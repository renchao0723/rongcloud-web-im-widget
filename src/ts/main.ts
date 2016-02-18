/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>

var widget = angular.module("RongWebIMWidget", ["RongWebIMWidget.conversationServer", "RongWebIMWidget.conversationListServer", "RongIMSDKModule"]);

widget.run(["$http", "WebIMWidget", "widgetConfig", function($http: angular.IHttpService,
    WebIMWidget: WebIMWidget, widgetConfig: widgetConfig) {

    $script.get("http://cdn.ronghub.com/RongIMLib-2.0.6.beta.min.js", function() {
        $script.get("http://cdn.ronghub.com/RongEmoji-2.0.0.beta.min.js", function() {
            RongIMLib.RongIMEmoji.init();
        });
        if (widgetConfig.config) {
            WebIMWidget.init(widgetConfig.config);
        }
    });

    $script.get("//cdn.bootcss.com/plupload/2.1.8/plupload.full.min.js", function() { });
}]);

widget.factory("providerdata", [function() {
    return {}
}]);

widget.factory("widgetConfig", [function() {
    return {};
}]);
interface widgetConfig {
    displayConversationList: boolean
    displayMinButton: boolean
    config: any
}

interface providerdata {
    getUserInfo: UserInfoProvider
    getGroupInfo: GroupInfoProvider
}
// var RongIMLib: any;

widget.factory("WebIMWidget", ["$q", "conversationServer",
    "conversationListServer", "providerdata", "widgetConfig", "RongIMSDKServer",
    function($q: angular.IQService, conversationServer: ConversationServer,
        conversationListServer: conversationListServer, providerdata: providerdata,
        widgetConfig: widgetConfig, RongIMSDKServer: RongIMSDKServer) {


        var WebIMWidget = <WebIMWidget>{};

        var messageList = {};

        //TODO:是否要加限制可用css
        var availableStyleConfig = {
            height: true, width: true, top: true, left: true, right: true,
            bottom: true, margin: true, "margin-top": true,
            "margin-left": true, "margin-right": true, "margin-bottom": true
        }

        var defaultconfig = <Config>{
            displayMinButton: true,
            style: {
                width: "450px",
                height: "470px"
            }
        }

        WebIMWidget.display = false;

        WebIMWidget.init = function(config: Config) {

            if (!window.RongIMLib || !window.RongIMLib.RongIMClient) {
                widgetConfig.config = config;
                return;
            }

            var defaultStyle = defaultconfig.style;
            angular.extend(defaultconfig, config);
            angular.extend(defaultStyle, config.style);

            // if (config)
            //

            var elebox = document.getElementById("rong-widget-box");
            var eleconversation = document.getElementById("rong-conversation");
            var eleconversationlist = document.getElementById("rong-conversation-list");

            var eleminbtn = document.getElementById("minbtn");


            if (defaultconfig.displayConversationList) {
                eleminbtn.style["display"] = "inline-block";
                if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.left) {
                    eleconversation.style["left"] = "197px";
                    eleconversation.style["right"] = "0px";
                    eleconversationlist.style["left"] = "0px";
                    eleminbtn.style["left"] = "0px";
                } else if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.right) {
                    eleconversation.style["left"] = "0px";
                    eleconversation.style["right"] = "197px";
                    eleconversationlist.style["right"] = "0px";
                    eleminbtn.style["right"] = "0px";
                } else {
                    throw new Error("config conversationListPosition value is invalid");
                }
            } else {
                eleconversationlist.style["display"] = "none";
                eleminbtn.style["display"] = "none";
                eleconversation.style["left"] = "0px";
                eleconversation.style["right"] = "0px";
            }

            if (defaultStyle) {
                for (var s in defaultStyle) {
                    if (typeof defaultStyle[s] === "string" && availableStyleConfig[s]) {
                        elebox.style[s] = defaultStyle[s];
                    }
                }

                if (defaultStyle.center) {
                    elebox.style["top"] = "50%";
                    elebox.style["left"] = "50%";
                    elebox.style["margin-top"] = "-" + parseInt(defaultStyle.height) / 2 + "px";
                    elebox.style["margin-left"] = "-" + parseInt(defaultStyle.width) / 2 + "px";
                    elebox.style["position"] = "fixed";
                }
            }


            widgetConfig.displayConversationList = defaultconfig.displayConversationList;
            widgetConfig.displayMinButton = defaultconfig.displayMinButton;

            // RongIMLib.RongIMClient.init(defaultconfig.appkey);
            RongIMSDKServer.init(defaultconfig.appkey);

            RongIMSDKServer.connect(defaultconfig.token).then(function(userId) {
                console.log("connect success:" + userId);
                if (WidgetModule.Helper.checkType(defaultconfig.onSuccess) == "function") {
                    defaultconfig.onSuccess(userId);
                }
                if (WidgetModule.Helper.checkType(providerdata.getUserInfo) == "function") {
                    providerdata.getUserInfo(userId, {
                        onSuccess: function(data) {
                            conversationServer.loginUser.id = data.userId;
                            conversationServer.loginUser.name = data.name;
                            conversationServer.loginUser.portraitUri = data.portraitUri;
                        }
                    });
                }

                conversationListServer.updateConversations();

                conversationServer._onConnectSuccess();
            }, function(err) {
                if (err.tokenError) {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError({ code: 0, info: "token 无效" });
                    }
                    // console.log("token 无效");
                } else {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError({ code: err.errorCode });
                    }
                    // console.log("connect error:" + err.errorCode);
                }
            })

            RongIMSDKServer.setConnectionStatusListener({
                onChanged: function(status) {
                    switch (status) {
                        //链接成功
                        case RongIMLib.ConnectionStatus.CONNECTED:
                            console.log('链接成功');
                            break;
                        //正在链接
                        case RongIMLib.ConnectionStatus.CONNECTING:
                            console.log('正在链接');
                            break;
                        //其他设备登陆
                        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                            console.log('其他设备登录');
                            break;
                        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                            console.log("网络不可用");

                            break;
                    }
                    if (WebIMWidget.onConnectStatusChange) {
                        WebIMWidget.onConnectStatusChange(status);
                    }
                }
            });

            RongIMSDKServer.setOnReceiveMessageListener({
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
                        case WidgetModule.MessageType.InformationNotificationMessage:
                            break;
                        case WidgetModule.MessageType.UnknownMessage:
                            //未知消息自行处理
                            break;
                        default:
                            //未捕获的消息类型
                            break;
                    }

                    if (WebIMWidget.onReceivedMessage) {
                        WebIMWidget.onReceivedMessage(msg);
                    }
                    conversationServer.onReceivedMessage(msg);

                    if (WebIMWidget.display && conversationServer.current && conversationServer.current.targetType == msg.conversationType && conversationServer.current.targetId == msg.targetId) {
                        RongIMLib.RongIMClient.getInstance().clearUnreadCount(conversationServer.current.targetType, conversationServer.current.targetId, {
                            onSuccess: function() {

                            },
                            onError: function() {

                            }
                        })
                    }
                    conversationListServer.updateConversations();
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

        WebIMWidget.setConversation = function(targetType: number, targetId: string, title: string) {
            conversationServer.onConversationChangged(new WidgetModule.Conversation(targetType, targetId, title));
        }

        WebIMWidget.setUserInfoProvider = function(fun) {
            providerdata.getUserInfo = fun;
        }

        WebIMWidget.setGroupInfoProvider = function(fun) {
            providerdata.getGroupInfo = fun;
        }

        WebIMWidget.EnumConversationListPosition = WidgetModule.EnumConversationListPosition;

        WebIMWidget.EnumConversationType = WidgetModule.EnumConversationType;


        return WebIMWidget;
    }]);

widget.directive("rongWidget", [function() {
    return {
        restrict: "E",
        templateUrl: "./src/ts/main.tpl.html",
        controller: "rongWidgetController"
    }
}]);

widget.controller("rongWidgetController", ["$scope", "WebIMWidget", "widgetConfig", function($scope, WebIMWidget, widgetConfig: widgetConfig) {
    $scope.main = WebIMWidget;
    $scope.widgetConfig = widgetConfig;
    WebIMWidget.show = function() {
        WebIMWidget.display = true;
        WebIMWidget.fullScreen = false;
        setTimeout(function() {
            $scope.$apply();
        });
    }
    WebIMWidget.hidden = function() {
        WebIMWidget.display = false;
        setTimeout(function() {
            $scope.$apply();
        });
    }
    $scope.showbtn = function() {
        WebIMWidget.display = true;
    }
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
    // animation: number;
    displayConversationList: boolean;
    conversationListPosition: any;
    displayMinButton: boolean;
    style: {
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

    setConversation(targetType: number, targetId: string, title: string): void

    onReceivedMessage(msg: WidgetModule.Message): void

    onSentMessage(msg: WidgetModule.Message): void

    onClose(): void

    onCloseBefore(obj: any): boolean

    onConnectStatusChange(status: number): void


    setUserInfoProvider(fun: UserInfoProvider)
    setGroupInfoProvider(fun: GroupInfoProvider)

    /**
     * 静态属性
     */
    EnumConversationListPosition: any
    EnumConversationType: any
}

interface UserInfoProvider {
    (targetId: string, callback: CallBack<WidgetModule.UserInfo>): void
}

interface GroupInfoProvider {
    (targetId: string, callback: CallBack<WidgetModule.GroupInfo>): void
}

interface CallBack<T> {
    onSuccess(data: T): void
}
