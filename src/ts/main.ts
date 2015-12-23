/// <reference path="../../typings/tsd.d.ts"/>

var widget = angular.module("rongWebimWidget", ["rongWebimWidget.conversationServer"]);

widget.factory("WebimWidget", ["$q", "conversationServer", function($q: angular.IQService, conversationServer: ConversationServer) {


    var WebimWidget = <WebimWidget>{};

    var messageList = {};

    var defaultconfig = <Config>{

    }

    WebimWidget.init = function(config: Config) {

        angular.extend(defaultconfig, config);

        // if (config)
        //

        RongIMLib.RongIMClient.init(defaultconfig.appkey);

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
                conversationServer.onReceivedMessage(msg);

                if (WebimWidget.onReceivedMessage) {
                    WebimWidget.onReceivedMessage(data);
                }
            }
        });


    }

    WebimWidget.setConversation = function(targetType: string, targetId: string, title: string) {
        //加载时立即设置会话会有问题
        //TODO:之后考虑怎么处理
        setTimeout(function() {
            conversationServer.onConversationChangged(new WidgetModule.Conversation(targetType, targetId, title));
        }, 0);
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
    }
}

interface WebimWidget {

    init(config: Config): void

    setConversation(targetType: string, targetId: string, title: string): void

    onConnectStatusChange(status: number): void

    onReceivedMessage(msg: RongIMLib.Message): void

    onSentMessage(msg: RongIMLib.Message): void
}
