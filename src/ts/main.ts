/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>

var widget = angular.module("RongWebIMWidget", ["RongWebIMWidget.conversationServer",
    "RongWebIMWidget.conversationListServer", "RongIMSDKModule", "Evaluate"]);

widget.run(["$http", "WebIMWidget", "widgetConfig", function($http: angular.IHttpService,
    WebIMWidget: WebIMWidget, widgetConfig: widgetConfig) {
    var protocol = location.protocol === "https:" ? "https:" : "http:";
    $script.get(protocol + "//cdn.ronghub.com/RongIMLib-2.0.15.min.js", function() {
        $script.get(protocol + "//cdn.ronghub.com/RongEmoji-2.0.15.min.js", function() {
            RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.init();
        });
        $script.get(protocol + "//cdn.ronghub.com/RongIMVoice-2.0.15.min.js", function() {
            RongIMLib.RongIMVoice && RongIMLib.RongIMVoice.init();
        });
        if (widgetConfig.config) {
            WebIMWidget.init(widgetConfig.config);
        }
    });
    $script.get(protocol + "//cdn.bootcss.com/plupload/2.1.8/plupload.full.min.js", function() { });
}]);

widget.factory("providerdata", [function() {
    var obj = {
        _cacheUserInfo: <WidgetModule.UserInfo[]>[],
        getCacheUserInfo: function(id) {
            for (var i = 0, len = obj._cacheUserInfo.length; i < len; i++) {
                if (obj._cacheUserInfo[i].userId == id) {
                    return obj._cacheUserInfo[i];
                }
            }
            return null;
        },
        addUserInfo: function(user: WidgetModule.UserInfo) {
            var olduser = obj.getCacheUserInfo(user.userId);
            if (olduser) {
                angular.extend(olduser, user);
            } else {
                obj._cacheUserInfo.push(user);
            }
        }
    };
    return obj;
}]);

widget.factory("widgetConfig", [function() {
    return {}
}]);


widget.factory("WebIMWidget", ["$q", "conversationServer",
    "conversationListServer", "providerdata", "widgetConfig", "RongIMSDKServer",
    function($q: angular.IQService, conversationServer: ConversationServer,
        conversationListServer: conversationListServer, providerdata: providerdata,
        widgetConfig: widgetConfig, RongIMSDKServer: RongIMSDKServer) {

        var WebIMWidget = <WebIMWidget>{};

        var messageList = {};

        var eleConversationListWidth = 195, eleminbtnHeight = 50, eleminbtnWidth = 195;

        var defaultconfig = <Config>{
            displayMinButton: true,
            conversationListPosition: WidgetModule.EnumConversationListPosition.left,
            style: {
                positionFixed: false,
                width: 450,
                height: 470,
                bottom: 0,
                right: 0
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

            var eleconversation = document.getElementById("rong-conversation");
            var eleconversationlist = document.getElementById("rong-conversation-list");

            var eleminbtn = document.getElementById("rong-widget-minbtn");

            if (defaultStyle) {

                eleconversation.style["height"] = defaultStyle.height + "px";
                eleconversation.style["width"] = defaultStyle.width + "px";
                eleconversationlist.style["height"] = defaultStyle.height + "px";

                if (defaultStyle.positionFixed) {
                    eleconversationlist.style['position'] = "fixed";
                    eleminbtn.style['position'] = "fixed";
                    eleconversation.style['position'] = "fixed";
                } else {
                    eleconversationlist.style['position'] = "absolute";
                    eleminbtn.style['position'] = "absolute";
                    eleconversation.style['position'] = "absolute";
                }

                if (defaultconfig.displayConversationList) {

                    eleminbtn.style["display"] = "inline-block";
                    eleconversationlist.style["display"] = "inline-block";

                    if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.left) {
                        if (!isNaN(defaultStyle.left)) {
                            eleconversationlist.style["left"] = defaultStyle.left + "px";
                            eleminbtn.style["left"] = defaultStyle.left + "px";
                            eleconversation.style["left"] = defaultStyle.left + eleConversationListWidth + "px";
                        }

                        if (!isNaN(defaultStyle.right)) {
                            eleconversationlist.style["right"] = defaultStyle.right + defaultStyle.width + "px";
                            eleminbtn.style["right"] = defaultStyle.right + defaultStyle.width + "px";
                            eleconversation.style["right"] = defaultStyle.right + "px";
                        }


                    } else if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.right) {
                        if (!isNaN(defaultStyle.left)) {
                            eleconversationlist.style["left"] = defaultStyle.left + defaultStyle.width + "px";
                            eleminbtn.style["left"] = defaultStyle.left + defaultStyle.width + "px";
                            eleconversation.style["left"] = defaultStyle.left + "px";
                        }

                        if (!isNaN(defaultStyle.right)) {
                            eleconversationlist.style["right"] = defaultStyle.right + "px";
                            eleminbtn.style["right"] = defaultStyle.right + "px";
                            eleconversation.style["right"] = defaultStyle.right + eleConversationListWidth + "px";
                        }
                    } else {
                        throw new Error("config conversationListPosition value is invalid")
                    }

                    if (!isNaN(defaultStyle["top"])) {
                        eleconversationlist.style["top"] = defaultStyle.top + "px";
                        eleminbtn.style["top"] = defaultStyle.top + defaultStyle.height - eleminbtnHeight + "px";
                        eleconversation.style["top"] = defaultStyle.top + "px";
                    }

                    if (!isNaN(defaultStyle["bottom"])) {
                        eleconversationlist.style["bottom"] = defaultStyle.bottom + "px";
                        eleminbtn.style["bottom"] = defaultStyle.bottom + "px";
                        eleconversation.style["bottom"] = defaultStyle.bottom + "px";
                    }
                } else {
                    eleminbtn.style["display"] = "inline-block";
                    eleconversationlist.style["display"] = "none";

                    eleconversation.style["left"] = defaultStyle["left"] + "px";
                    eleconversation.style["right"] = defaultStyle["right"] + "px";
                    eleconversation.style["top"] = defaultStyle["top"] + "px";
                    eleconversation.style["bottom"] = defaultStyle["bottom"] + "px";

                    eleminbtn.style["top"] = defaultStyle.top + defaultStyle.height - eleminbtnHeight + "px";
                    eleminbtn.style["bottom"] = defaultStyle.bottom + "px";
                    eleminbtn.style["left"] = defaultStyle.left + defaultStyle.width / 2 - eleminbtnWidth / 2 + "px";
                    eleminbtn.style["right"] = defaultStyle.right + defaultStyle.width / 2 - eleminbtnWidth / 2 + "px";
                }
            }
            if (defaultconfig.displayMinButton == false) {
                eleminbtn.style["display"] = "none";
            }


            widgetConfig.displayConversationList = defaultconfig.displayConversationList;
            widgetConfig.displayMinButton = defaultconfig.displayMinButton;
            widgetConfig.reminder = defaultconfig.reminder;

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
                } else {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError({ code: err.errorCode });
                    }
                }
            })

            RongIMSDKServer.setConnectionStatusListener({
                onChanged: function(status) {
                    WebIMWidget.connected = false;
                    switch (status) {
                        //链接成功
                        case RongIMLib.ConnectionStatus.CONNECTED:
                            console.log('链接成功');
                            WebIMWidget.connected = true;
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
                    if (conversationListServer._onConnectStatusChange) {
                        conversationListServer._onConnectStatusChange(status);
                    }
                }
            });

            RongIMSDKServer.setOnReceiveMessageListener({
                onReceived: function(data) {
                    console.log(data);
                    var msg = WidgetModule.Message.convert(data);

                    switch (data.messageType) {
                        case WidgetModule.MessageType.VoiceMessage:
                            msg.content.isUnReade = true;
                        case WidgetModule.MessageType.TextMessage:
                        case WidgetModule.MessageType.LocationMessage:
                        case WidgetModule.MessageType.ImageMessage:
                        case WidgetModule.MessageType.RichContentMessage:
                            addMessageAndOperation(msg);
                            break;
                        case WidgetModule.MessageType.ContactNotificationMessage:
                            //好友通知自行处理
                            break;
                        case WidgetModule.MessageType.InformationNotificationMessage:
                            addMessageAndOperation(msg);
                            break;
                        case WidgetModule.MessageType.UnknownMessage:
                            //未知消息自行处理
                            break;
                        default:
                            //未捕获的消息类型
                            break;
                    }
                    if (WidgetModule.Helper.checkType(providerdata.getUserInfo) == "function" && msg.content) {
                        providerdata.getUserInfo(msg.senderUserId, {
                            onSuccess: function(data) {
                                if (data) {
                                    msg.content.userInfo = new WidgetModule.UserInfo(data.userId, data.name, data.portraitUri);
                                }
                            }
                        })
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
                    conversationListServer.updateConversations().then(function() { });
                }
            });


        }

        function addMessageAndOperation(msg: WidgetModule.Message) {
            var hislist = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] || []
            if (hislist.length == 0) {
                // hislist.push(new WidgetModule.GetHistoryPanel());
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

        WebIMWidget.show = function() {
            WebIMWidget.display = true;
            WebIMWidget.fullScreen = false;
        }
        WebIMWidget.hidden = function() {
            WebIMWidget.display = false;
        }

        WebIMWidget.getCurrentConversation = function() {
            return conversationServer.current;
        }

        return WebIMWidget;
    }]);

widget.directive("rongWidget", [function() {
    return {
        restrict: "E",
        templateUrl: "./src/ts/main.tpl.html",
        controller: "rongWidgetController"
    }
}]);

widget.controller("rongWidgetController", ["$scope", "WebIMWidget", "widgetConfig",
    function($scope, WebIMWidget, widgetConfig: widgetConfig
    ) {

        $scope.main = WebIMWidget;
        $scope.widgetConfig = widgetConfig;

        WebIMWidget.show = function() {
            WebIMWidget.display = true;
            WebIMWidget.fullScreen = false;
            WebIMWidget.onShow && WebIMWidget.onShow();
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
            WebIMWidget.onShow && WebIMWidget.onShow();
        }

    }]);

widget.filter('trustHtml', ["$sce", function($sce: angular.ISCEService) {
    return function(str: any) {
        return $sce.trustAsHtml(str);
    }
}]);

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

interface widgetConfig {
    displayConversationList: boolean
    displayMinButton: boolean
    config: any
    reminder: string
}

interface providerdata {
    getUserInfo: UserInfoProvider
    getGroupInfo: GroupInfoProvider
    getCacheUserInfo(id): WidgetModule.UserInfo
    addUserInfo(user: WidgetModule.UserInfo): void
}

interface Config {
    appkey?: string;
    token?: string;
    onSuccess?(userId: string): void;
    onError?(error: any): void;
    // animation: number;
    displayConversationList?: boolean;
    conversationListPosition?: any;
    displayMinButton?: boolean;
    reminder?: string;
    style?: {
        positionFixed?: boolean;
        height?: number;
        width?: number;
        bottom?: number;
        right?: number;
        top?: number;
        left?: number;
    }
}

interface WebIMWidget {

    init(config: Config): void

    show(): void
    onShow(): void
    hidden(): void
    display: boolean
    fullScreen: boolean
    connected: boolean

    setConversation(targetType: number, targetId: string, title: string): void

    onReceivedMessage(msg: WidgetModule.Message): void

    onSentMessage(msg: WidgetModule.Message): void

    onClose(data: any): void

    onCloseBefore(obj: any): void

    onConnectStatusChange(status: number): void

    getCurrentConversation(): WidgetModule.Conversation


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
