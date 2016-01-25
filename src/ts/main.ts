/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>

var widget = angular.module("RongWebIMWidget", ["RongWebIMWidget.conversationServer", "RongWebIMWidget.conversationListServer"]);

widget.config(function() {

});

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded");
}, false)

widget.run(["$http", function($http: angular.IHttpService) {

    console.log("run widget");
    // var e = document.getElementsByTagName("script");
    // var sdk = document.createElement("script");
    // // sdk.src = "http://cdn.ronghub.com/RongIMLib-2.0.3.beta.min.js";
    // sdk.src = "./RongIMLib.js"
    //
    // var emoji = document.createElement("script");
    // emoji.src = "./emoji-2.0.0.js";
    //
    // document.head.appendChild(sdk);
    //
    //
    // angular.element(document).ready(function() {
    //     document.head.appendChild(emoji);
    // });
    function loadScript(url, callback?) {
        var eHead = document.getElementsByTagName("head")[0];
        var eScript = document.createElement("script");
        eScript.src = url;
        eHead.appendChild(eScript);
    }
    var scripts = <any>{}, urlArgs = "", head = document.getElementsByTagName("head")[0];
    // function create(path, fn) {
    //     var el = document.createElement('script'), loaded
    //     el.onload = el.onerror = el["onreadystatechange"] = function() {
    //         if ((el["readyState"] && !(/^c|loade/.test(el["readyState"]))) || loaded) return;
    //         el.onload = el["onreadystatechange"] = null
    //         loaded = 1
    //         fn()
    //     }
    //     el.async = !!1;
    //     el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    //     head.insertBefore(el, head.lastChild)
    // }

    // function loadScript(url, callback?) {
    //     var eHead = document.getElementsByTagName("head")[0];
    //     $http.get(url, {}).success(function(data: string) {
    //         var eScript = document.createElement("script");
    //         eScript.innerHTML = data;
    //         eHead.appendChild(eScript);
    //         if (callback && typeof callback == "function") {
    //             callback();
    //         }
    //     })
    // }
    // loadScript("http://jssdk.demo.qiniu.io/js/plupload/plupload.full.min.js", function() {
    // });
    $script.get("./RongIMLib.js", function() {
        $script("./emoji-2.0.0.js");
    });
    $script(["http://jssdk.demo.qiniu.io/js/plupload/plupload.full.min.js", "http://jssdk.demo.qiniu.io/js/qiniu.js"], "qiniu")

    // loadScript("./RongIMLib.js")
    // // loadScript("http://cdn.ronghub.com/RongIMLib-2.0.5.beta.min.js");
    // loadScript("./emoji-2.0.0.js");

}]);

widget.factory("providerdata", [function() {
    return {}
}]);

interface providerdata {
    getUserInfo: UserInfoProvider
    getGroupInfo: GroupInfoProvider
}

widget.factory("WebIMWidget", ["$q", "conversationServer", "conversationListServer", "providerdata",
    function($q: angular.IQService, conversationServer: ConversationServer, conversationListServer: conversationListServer, providerdata: providerdata) {


        var WebIMWidget = <WebIMWidget>{};

        var messageList = {};

        //TODO:是否要加限制可用css
        var availableStyleConfig = {
            height: true, width: true, top: true, left: true, right: true,
            bottom: true, margin: true, "margin-top": true,
            "margin-left": true, "margin-right": true, "margin-bottom": true
        }

        var defaultconfig = <Config>{
            style: {
                width: "450px",
                height: "470px"
            }
        }

        WebIMWidget.init = function(config: Config) {

            var defaultStyle = defaultconfig.style;
            angular.extend(defaultconfig, config);
            angular.extend(defaultStyle, config.style);

            // if (config)
            //

            if (!RongIMLib || !RongIMLib.RongIMClient) {
                throw new Error("please refer to RongIMLib");
            }
            var elebox = document.getElementById("rong-widget-box");
            var eleconversation = document.getElementById("rong-conversation");
            var eleconversationlist = document.getElementById("rong-conversation-list");


            if (defaultconfig.displayConversationList) {
                if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.left) {
                    eleconversation.style["left"] = "197px";
                    eleconversation.style["right"] = "0px";
                    eleconversationlist.style["left"] = "0px";
                } else {
                    eleconversation.style["left"] = "0px";
                    eleconversation.style["right"] = "197px";
                    eleconversationlist.style["right"] = "0px";
                }
            } else {
                eleconversationlist.style["display"] = "none";
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

            RongIMLib.RongIMClient.init(defaultconfig.appkey);

            RongIMLib.RongIMClient.connect(defaultconfig.token, {
                onSuccess: function(userId: string) {
                    console.log("connect success:" + userId);
                    if (defaultconfig.onSuccess && typeof defaultconfig.onSuccess == "function") {
                        defaultconfig.onSuccess(userId);
                    }

                    providerdata.getUserInfo(userId, {
                        onSuccess: function(data) {
                            conversationServer.loginUser.id = data.userId;
                            conversationServer.loginUser.name = data.name;
                            conversationServer.loginUser.portraitUri = data.portraitUri;
                        }
                    });

                    conversationListServer.updateConversations();

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

        WebIMWidget.display = false;

        WebIMWidget.hidden = function() {
            //由maincontroller实现
        }

        WebIMWidget.show = function() {
            //由maincontroller实现
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

widget.controller("rongWidgetController", ["$scope", "WebIMWidget", function($scope, WebIMWidget) {
    $scope.main = WebIMWidget;
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
    displayConversationList: boolean;
    conversationListPosition: any;
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
