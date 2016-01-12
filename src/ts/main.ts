/// <reference path="../../typings/tsd.d.ts"/>

var widget = angular.module("rongWebimWidget", ["rongWebimWidget.conversationServer"]);

widget.factory("WebIMWidget", ["$q", "conversationServer", function($q: angular.IQService, conversationServer: ConversationServer) {


    var WebimWidget = <WebIMWidget>{};

    var messageList = {};

    //TODO:是否要加限制可用css
    var availableCssConfig = {
        height: true, width: true, top: true, left: true, right: true,
        bottom: true, margin: true, "margin-top": true,
        "margin-left": true, "margin-right": true, "margin-bottom": true
    }

    var defaultconfig = <Config>{
        css: {
            width: "450px",
            height: "470px"
        }
    }

    WebimWidget.init = function(config: Config) {

        var defaultcss = defaultconfig.css;
        angular.extend(defaultconfig, config);
        angular.extend(defaultcss, config.css);

        // if (config)
        //

        if (!RongIMLib || !RongIMLib.RongIMClient) {
            throw new Error("please refer to RongIMLib");
        }
        var ele = document.getElementById("rongcloud-conversation");
        if (defaultcss) {
            for (var s in defaultcss) {
                if (typeof defaultcss[s] === "string" && availableCssConfig[s]) {
                    ele.style[s] = defaultcss[s];
                }
            }

            if (defaultcss.center) {
                ele.style["top"] = "50%";
                ele.style["left"] = "50%";
                ele.style["margin-top"] = "-" + parseInt(defaultcss.height) / 2 + "px";
                ele.style["margin-left"] = "-" + parseInt(defaultcss.width) / 2 + "px";
                ele.style["position"] = "fixed";
            }
        }

        RongIMLib.RongIMClient.init(defaultconfig.appkey);

        RongIMLib.RongIMClient.connect(defaultconfig.token, {
            onSuccess: function(userId: string) {
                console.log("connect success:" + userId);
                if (defaultconfig.onSuccess && typeof defaultconfig.onSuccess == "function") {
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
            onTokenIncorrect: function() {
                if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                    defaultconfig.onError(0);
                }
                console.log("token 无效");
            },
            onError: function(error) {
                if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                    defaultconfig.onError(error);
                }
                console.log("connect error:" + error);
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
                console.log(data);
                var msg = WidgetModule.Message.convert(data);

                switch (data.messageType) {
                    case WidgetModule.MessageType.ContactNotificationMessage:
                        //好友通知自行处理
                        break;
                    case WidgetModule.MessageType.TextMessage:
                    case WidgetModule.MessageType.VoiceMessage:
                    case WidgetModule.MessageType.LocationMessage:
                    case WidgetModule.MessageType.ImageMessage:
                    case WidgetModule.MessageType.RichContentMessage:
                        addMessageAndOperation(msg);
                        break;
                    case WidgetModule.MessageType.UnknownMessage:
                        //未知消息自行处理
                        break;
                    default:
                        //未捕获的消息类型
                        break;
                }

                if (msg instanceof RongIMLib.NotificationMessage) {
                    if (msg.messageType == WidgetModule.MessageType.InformationNotificationMessage) {
                        addMessageAndOperation(msg);
                    }
                } else {
                    addMessageAndOperation(msg);
                }

                if (WebimWidget.onReceivedMessage) {
                    WebimWidget.onReceivedMessage(msg);
                }
                conversationServer.onReceivedMessage(msg);
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
        WebimWidget.fullScreen = false;
        WebimWidget.display = true;
    }


    return WebimWidget;
}]);

widget.filter('trustHtml', function($sce: angular.ISCEService) {
    return function(str: any) {
        return $sce.trustAsHtml(str);
    }
});
widget.filter("historyTime", ["$filter", function($filter: angular.IFilterService) {
    return function(time: Date) {
        var today = new Date();
        if (time.toDateString() === today.toDateString()) {
            return $filter("date")(time, "HH:mm");
        } else if (time.toDateString() === new Date(today.setTime(today.getTime() - 1)).toDateString()) {
            return "昨天" + $filter("date")(time, "HH:mm");
        } else {
            return $filter("date")(time, "yyyy-MM-dd HH:mm");
        }
    };
}]);

interface Config {
    appkey: string;
    token: string;
    onSuccess(userId: string): void;
    onError(error: any): void;
    animation: number;
    css: {
        height: string;
        width: string;
        center: boolean;
    }
}

interface WebIMWidget {

    init(config: Config): void

    show(): void
    hidden(): void
    display: boolean
    fullScreen: boolean

    setConversation(targetType: string, targetId: string, title: string): void

    onReceivedMessage(msg: WidgetModule.Message): void

    onSentMessage(msg: WidgetModule.Message): void

    onClose(): void

    onCloseBefore(): boolean

    onConnectStatusChange(status: number): void
}
