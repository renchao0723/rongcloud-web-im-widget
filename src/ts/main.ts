/// <reference path="../../typings/tsd.d.ts"/>

var widget = angular.module("rongWebimWidget", ["ngAnimate", "rongWebimWidget.conversationServer"]);

widget.factory("WebimWidget", ["$q", "conversationServer", function($q: angular.IQService, conversationServer: ConversationServer) {


    var WebimWidget = <WebimWidget>{};

    var messageList = {};

    var defaultconfig = <Config>{

    }

    WebimWidget.init = function(config: Config) {

        angular.extend(defaultconfig, config);

        // if (config)
        //
        //

        if (!RongIMLib || !RongIMLib.RongIMClient) {
            throw new Error("please refer to RongIMLib");
        }

        RongIMLib.RongIMClient.init(defaultconfig.appkey, false);

        RongIMLib.RongIMClient.connect(defaultconfig.token, {
            onSuccess: function(userId: string) {
                console.log("connect success:" + userId);
                if (defaultconfig.onSuccess) {
                    defaultconfig.onSuccess(userId);
                }

                //取登录用户信息；
                RongIMLib.RongIMClient.getInstance().getUserInfo(userId, {
                    onSuccess: function(data) {
                        conversationServer.loginUser.id = data.userId;
                        conversationServer.loginUser.name = data.name;
                        conversationServer.loginUser.portraitUri = data.portraitUri;
                    },
                    onError: function(error) {
                        console.log("getUserInfo error:" + error);
                    }
                });

            },
            onTokenIncorrect: function(error) {
                console.log("connect error:" + error);
                if (defaultconfig.onError) {
                    defaultconfig.onError(error);
                }
            },
            onError: function() {
                //由于使用RongIMLib typescript原因，onError没有使用但必须加上
            }
        });

        RongIMLib.RongIMClient.setConnectionStatusListener({
            onChanged: function(status) {
                if (WebimWidget.onConnectStatusChange) {
                    WebimWidget.onConnectStatusChange(status);
                }
            }
        });

        RongIMLib.RongIMClient.setOnReceiveMessageListener({
            onReceived: function(data) {
                var msg = WidgetModule.Message.convert(data);

                if (WebimWidget.onReceivedMessage) {
                    WebimWidget.onReceivedMessage(msg);
                }

                conversationServer.onReceivedMessage(msg);

                if (msg instanceof RongIMLib.NotificationMessage) {
                    // $scope.messageList.push(WidgetModule.Message.convert(msg));
                    if (msg.messageType == WidgetModule.MessageType.InformationNotificationMessage) {
                        addMessageAndOperation(msg);
                    }
                } else {
                    addMessageAndOperation(msg);
                }


            }
        });


    }

    function addMessageAndOperation(msg: WidgetModule.Message) {
        var hislist = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] || []
        if (hislist.length == 0) {
            hislist.push(new WidgetModule.GetHistoryPanel());
            hislist.push(new WidgetModule.TimePanl(msg.sentTime));
        }
        conversationServer._addHistoryMessages(msg);
    }

    WebimWidget.setConversation = function(targetType: string, targetId: string, title: string) {
        conversationServer.onConversationChangged(new WidgetModule.Conversation(targetType, targetId, title));
    }

    WebimWidget.display = false;
    WebimWidget.hidden = function() {
        WebimWidget.display = false;
    }

    WebimWidget.show = function() {
        WebimWidget.display = true;
    }

    return WebimWidget;
}]);

interface Config {
    appkey: string;
    token: string;
    onSuccess(userId: string): void;
    onError(error: any): void;
    animation: number;
    css: {
        height: number;
        width: number;
        centent: boolean;
    }
}

interface WebimWidget {

    init(config: Config): void

    show(): void
    hidden(): void
    display: boolean

    setConversation(targetType: string, targetId: string, title: string): void

    onConnectStatusChange(status: number): void

    onReceivedMessage(msg: WidgetModule.Message): void

    onSentMessage(msg: WidgetModule.Message): void
}
