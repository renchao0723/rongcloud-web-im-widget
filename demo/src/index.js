/// <reference path="../../../typings/tsd.d.ts"/>
var conversationController = angular.module("rongWebimWidget.conversationController", ["rongWebimWidget.conversationServer"]);
conversationController.controller("conversationController", ["$scope", "conversationServer", "WebimWidget",
    function ($scope, conversationServer, WebimWidget) {
        // $scope.fullScreen=
        function adjustScrollbars() {
            setTimeout(function () {
                var ele = document.getElementById("Messages");
                if (!ele)
                    return;
                ele.scrollTop = ele.scrollHeight;
            }, 0);
        }
        $scope.currentConversation = {
            title: "",
            targetId: "",
            targetType: ""
        };
        $scope.messageList = [];
        $scope.messageContent = "";
        $scope.resoures = WebimWidget;
        console.log(WebimWidget);
        conversationServer.onConversationChangged = function (conversation) {
            conversationServer.current.title = conversation.title;
            conversationServer.current.targetId = conversation.targetId;
            conversationServer.current.targetType = conversation.targetType;
            $scope.currentConversation.title = conversation.title;
            $scope.currentConversation.targetId = conversation.targetId;
            $scope.currentConversation.targetType = conversation.targetType;
            //TODO:获取历史消息
            //
            $scope.messageList.splice(0, $scope.messageList.length);
            var currenthis = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            if (currenthis.length == 0) {
                conversationServer._getHistoryMessages(+conversation.targetType, conversation.targetId, 3).then(function () {
                    $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
                    // $scope.$apply();
                    adjustScrollbars();
                });
            }
            else {
                $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
            }
        };
        conversationServer.onReceivedMessage = function (msg) {
            $scope.messageList.splice(0, $scope.messageList.length);
            if (msg.targetId == $scope.currentConversation.targetId && msg.conversationType == $scope.currentConversation.targetType) {
                adjustScrollbars();
                $scope.$apply();
            }
        };
        $scope.getHistory = function () {
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function () {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                $scope.$apply();
                adjustScrollbars();
            });
        };
        $scope.getMoreMessage = function () {
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function () {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                $scope.$apply();
                adjustScrollbars();
            });
        };
        function packDisplaySendMessage(msg, messageType) {
            var ret = new RongIMLib.Message();
            ret.content = msg;
            ret.conversationType = $scope.currentConversation.targetType;
            ret.targetId = $scope.currentConversation.targetId;
            ret.senderUserId = conversationServer.loginUser.id;
            ret.messageDirection = RongIMLib.MessageDirection.SEND;
            ret.sentTime = (new Date()).getTime();
            ret.messageType = messageType;
            return ret;
        }
        $scope.send = function () {
            console.log($scope.currentConversation, conversationServer.loginUser);
            if (!$scope.currentConversation.targetId || !$scope.currentConvers.targetType) {
                return;
            }
            var msg = RongIMLib.TextMessage.obtain($scope.messageContent);
            var userinfo = new RongIMLib.UserInfo(conversationServer.loginUser.id, conversationServer.loginUser.name, conversationServer.loginUser.portraitUri);
            // userinfo.userId = conversationServer.loginUser.id;
            // userinfo.name = conversationServer.loginUser.name;
            // userinfo.portraitUri = conversationServer.loginUser.portraitUri;
            msg.userInfo = userinfo;
            RongIMLib.RongIMClient.getInstance().sendMessage(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, msg, null, {
                onSuccess: function (retMessage) {
                    console.log("send success");
                },
                onError: function () {
                }
            });
            var content = packDisplaySendMessage(msg, WidgetModule.MessageType.TextMessage);
            var cmsg = WidgetModule.Message.convert(content);
            conversationServer._addHistoryMessages(cmsg);
            // $scope.messageList.push();
            adjustScrollbars();
            $scope.messageContent = "";
            // $scope.$apply();
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationDirective = angular.module("rongWebimWidget.conversationDirective", ["rongWebimWidget.conversationController"]);
conversationDirective.directive("rongConversation", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/conversation/template.tpl.html",
            controller: "conversationController"
        };
    }]);
conversationDirective.directive("textmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-text"><pre class="Message-entry">{{msg.content}}<br></pre></div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("includinglinkmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-text">' +
                '<pre class="Message-entry" style="">' +
                '维护中 由于我们的服务商出现故障，融云官网及相关服务也受到影响，给各位用户带来的不便，还请谅解。  您可以通过 <a href="#">【官方微博】</a>了解</pre>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("imagemessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-img">' +
                '<span class="Message-entry" style="">' +
                '<p>发给您一张示意图</p>' +
                '<img src="./src/images/webBg.png" alt="">' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("voicemessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-audio">' +
                '<span class="Message-entry" style="">' +
                '<span class="audioBox clearfix animate"><i></i><i></i><i></i></span>' +
                '<div style="display: inline-block;"><span class="audioTimer">30”</span><span class="audioState"></span></div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("locationmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-map">' +
                '<span class="Message-entry" style="">' +
                '<div class="mapBox">' +
                '<img src="./src/images/webBg.png" alt="">' +
                '<span>朝阳区北苑路北</span>' +
                '</div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("richcontentmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-image-text">' +
                '<span class="Message-entry" style="">' +
                '<div class="image-textBox">' +
                '<h4>理性设计</h4>' +
                '<div class="cont clearfix">' +
                '<img src="./src/images/webBg.png" alt="">' +
                '<div>苹果公司设计师年薪高达 17.4 万美元，约合人民币 110 万，而苹果官网也被业界捧为大师之作，受到世界各国产' +
                '品经理和设计师的追捧。为什么苹果公司设计的网页如此受欢迎，有什么技巧在其中吗？</div>' +
                '</div>' +
                '</div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationServer = angular.module("rongWebimWidget.conversationServer", ["rongWebimWidget.conversationDirective"]);
conversationServer.factory("conversationServer", ["$q", function ($q) {
        var conversationServer = {};
        conversationServer.current = {
            targetId: "",
            targetType: "",
            title: "",
            portraitUri: "",
            onLine: false
        };
        conversationServer.loginUser = {
            id: "",
            name: "",
            portraitUri: ""
        };
        conversationServer._cacheHistory = {};
        conversationServer._getHistoryMessages = function (targetType, targetId, number, reset) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getHistoryMessages(targetType, targetId, reset ? 0 : null, number, {
                onSuccess: function (data, has) {
                    for (var i = 0; i < data.length; i++) {
                        // if (data instanceof RongIMLib.NotificationMessage) {
                        // } else {
                        var msg = WidgetModule.Message.convert(data[i]);
                        unshiftHistoryMessages(targetId, targetType, msg);
                    }
                    defer.resolve({ data: data, has: has });
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        function unshiftHistoryMessages(id, type, item) {
            var arr = conversationServer._cacheHistory[type + "_" + id] = conversationServer._cacheHistory[type + "_" + id] || [];
            if (arr[0] && arr[0].sentTime && arr[0].panelType != WidgetModule.PanelType.Time && item.sentTime) {
                if (WidgetModule.Helper.timeCompare(arr[0].sentTime, item.sentTime)) {
                    arr.unshift(new WidgetModule.TimePanl(arr[0].sentTime));
                }
            }
            arr.unshift(item);
        }
        conversationServer._addHistoryMessages = function (item) {
            var arr = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] || [];
            if (arr[arr.length - 1] && arr[arr.length - 1].panelType != WidgetModule.PanelType.Time && arr[arr.length - 1].sendTime && item.sentTime) {
                if (!WidgetModule.Helper.timeCompare(arr[arr.length - 1].sendTime, item.sentTime)) {
                    arr.push(new WidgetModule.TimePanl(item.sentTime));
                }
            }
            arr.push(item);
        };
        conversationServer.onConversationChangged = function () {
            //提供接口由conversation controller实现具体操作
        };
        conversationServer.onReceivedMessage = function () {
            //提供接口由coversation controller实现具体操作
        };
        return conversationServer;
    }]);
/// <reference path="../../typings/tsd.d.ts"/>
var widget = angular.module("rongWebimWidget", ["ngAnimate", "rongWebimWidget.conversationServer"]);
widget.factory("WebimWidget", ["$q", "conversationServer", function ($q, conversationServer) {
        var WebimWidget = {};
        var messageList = {};
        //TODO:是否要加限制可用css
        var availableCssConfig = {
            height: true, width: true, top: true, left: true, right: true,
            bottom: true, margin: true, "margin-top": true,
            "margin-left": true, "margin-right": true, "margin-bottom": true
        };
        var defaultconfig = {};
        WebimWidget.init = function (config) {
            angular.extend(defaultconfig, config);
            // if (config)
            //
            if (!RongIMLib || !RongIMLib.RongIMClient) {
                throw new Error("please refer to RongIMLib");
            }
            var ele = document.getElementById("rongcloud-conversation");
            if (config.css) {
                for (var s in config.css) {
                    if (typeof config.css[s] === "string" && availableCssConfig[s]) {
                        ele.style[s] = config.css[s];
                    }
                }
            }
            RongIMLib.RongIMClient.init(defaultconfig.appkey, false);
            RongIMLib.RongIMClient.connect(defaultconfig.token, {
                onSuccess: function (userId) {
                    console.log("connect success:" + userId);
                    if (defaultconfig.onSuccess) {
                        defaultconfig.onSuccess(userId);
                    }
                    //取登录用户信息；
                    RongIMLib.RongIMClient.getInstance().getUserInfo(userId, {
                        onSuccess: function (data) {
                            conversationServer.loginUser.id = data.userId;
                            conversationServer.loginUser.name = data.name;
                            conversationServer.loginUser.portraitUri = data.portraitUri;
                        },
                        onError: function (error) {
                            console.log("getUserInfo error:" + error);
                        }
                    });
                },
                onTokenIncorrect: function (error) {
                    console.log("connect error:" + error);
                    if (defaultconfig.onError) {
                        defaultconfig.onError(error);
                    }
                },
                onError: function () {
                    //由于使用RongIMLib typescript原因，onError没有使用但必须加上
                }
            });
            RongIMLib.RongIMClient.setConnectionStatusListener({
                onChanged: function (status) {
                    if (WebimWidget.onConnectStatusChange) {
                        WebimWidget.onConnectStatusChange(status);
                    }
                }
            });
            RongIMLib.RongIMClient.setOnReceiveMessageListener({
                onReceived: function (data) {
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
                    }
                    else {
                        addMessageAndOperation(msg);
                    }
                }
            });
        };
        function addMessageAndOperation(msg) {
            var hislist = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] || [];
            if (hislist.length == 0) {
                hislist.push(new WidgetModule.GetHistoryPanel());
                hislist.push(new WidgetModule.TimePanl(msg.sentTime));
            }
            conversationServer._addHistoryMessages(msg);
        }
        WebimWidget.setConversation = function (targetType, targetId, title) {
            conversationServer.onConversationChangged(new WidgetModule.Conversation(targetType, targetId, title));
        };
        WebimWidget.display = false;
        WebimWidget.hidden = function () {
            WebimWidget.display = false;
        };
        WebimWidget.show = function () {
            WebimWidget.fullScreen = false;
            WebimWidget.display = true;
        };
        return WebimWidget;
    }]);
/// <reference path="../../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WidgetModule;
(function (WidgetModule) {
    (function (MessageDirection) {
        MessageDirection[MessageDirection["SEND"] = 1] = "SEND";
        MessageDirection[MessageDirection["RECEIVE"] = 2] = "RECEIVE";
    })(WidgetModule.MessageDirection || (WidgetModule.MessageDirection = {}));
    var MessageDirection = WidgetModule.MessageDirection;
    (function (ReceivedStatus) {
        ReceivedStatus[ReceivedStatus["READ"] = 1] = "READ";
        ReceivedStatus[ReceivedStatus["LISTENED"] = 2] = "LISTENED";
        ReceivedStatus[ReceivedStatus["DOWNLOADED"] = 4] = "DOWNLOADED";
    })(WidgetModule.ReceivedStatus || (WidgetModule.ReceivedStatus = {}));
    var ReceivedStatus = WidgetModule.ReceivedStatus;
    (function (SentStatus) {
        /**
         * 发送中。
         */
        SentStatus[SentStatus["SENDING"] = 10] = "SENDING";
        /**
         * 发送失败。
         */
        SentStatus[SentStatus["FAILED"] = 20] = "FAILED";
        /**
         * 已发送。
         */
        SentStatus[SentStatus["SENT"] = 30] = "SENT";
        /**
         * 对方已接收。
         */
        SentStatus[SentStatus["RECEIVED"] = 40] = "RECEIVED";
        /**
         * 对方已读。
         */
        SentStatus[SentStatus["READ"] = 50] = "READ";
        /**
         * 对方已销毁。
         */
        SentStatus[SentStatus["DESTROYED"] = 60] = "DESTROYED";
    })(WidgetModule.SentStatus || (WidgetModule.SentStatus = {}));
    var SentStatus = WidgetModule.SentStatus;
    var AnimationType;
    (function (AnimationType) {
        AnimationType[AnimationType["left"] = 1] = "left";
        AnimationType[AnimationType["right"] = 2] = "right";
        AnimationType[AnimationType["top"] = 3] = "top";
        AnimationType[AnimationType["bottom"] = 4] = "bottom";
    })(AnimationType || (AnimationType = {}));
    WidgetModule.MessageType = {
        DiscussionNotificationMessage: "DiscussionNotificationMessage ",
        TextMessage: "TextMessage",
        ImageMessage: "ImageMessage",
        VoiceMessage: "VoiceMessage",
        RichContentMessage: "RichContentMessage",
        HandshakeMessage: "HandshakeMessage",
        UnknownMessage: "UnknownMessage",
        SuspendMessage: "SuspendMessage",
        LocationMessage: "LocationMessage",
        InformationNotificationMessage: "InformationNotificationMessage",
        ContactNotificationMessage: "ContactNotificationMessage",
        ProfileNotificationMessage: "ProfileNotificationMessage",
        CommandNotificationMessage: "CommandNotificationMessage"
    };
    (function (PanelType) {
        PanelType[PanelType["Message"] = 1] = "Message";
        PanelType[PanelType["InformationNotification"] = 2] = "InformationNotification";
        PanelType[PanelType["System"] = 103] = "System";
        PanelType[PanelType["Time"] = 104] = "Time";
        PanelType[PanelType["getHistory"] = 105] = "getHistory";
        PanelType[PanelType["getMore"] = 106] = "getMore";
        PanelType[PanelType["Other"] = 0] = "Other";
    })(WidgetModule.PanelType || (WidgetModule.PanelType = {}));
    var PanelType = WidgetModule.PanelType;
    var ChatPanel = (function () {
        function ChatPanel(type) {
            this.panelType = type;
        }
        return ChatPanel;
    })();
    WidgetModule.ChatPanel = ChatPanel;
    var TimePanl = (function (_super) {
        __extends(TimePanl, _super);
        function TimePanl(date) {
            _super.call(this, PanelType.Time);
            this.sentTime = date;
        }
        return TimePanl;
    })(ChatPanel);
    WidgetModule.TimePanl = TimePanl;
    var GetHistoryPanel = (function (_super) {
        __extends(GetHistoryPanel, _super);
        function GetHistoryPanel() {
            _super.call(this, PanelType.getHistory);
        }
        return GetHistoryPanel;
    })(ChatPanel);
    WidgetModule.GetHistoryPanel = GetHistoryPanel;
    var GetMoreMessagePanel = (function (_super) {
        __extends(GetMoreMessagePanel, _super);
        function GetMoreMessagePanel() {
            _super.call(this, PanelType.getMore);
        }
        return GetMoreMessagePanel;
    })(ChatPanel);
    WidgetModule.GetMoreMessagePanel = GetMoreMessagePanel;
    var TimePanel = (function (_super) {
        __extends(TimePanel, _super);
        function TimePanel(time) {
            _super.call(this, PanelType.Time);
            this.sendTime = time;
        }
        return TimePanel;
    })(ChatPanel);
    WidgetModule.TimePanel = TimePanel;
    var Message = (function (_super) {
        __extends(Message, _super);
        function Message(content, conversationType, extra, objectName, messageDirection, messageId, receivedStatus, receivedTime, senderUserId, sentStatus, sentTime, targetId, messageType) {
            _super.call(this, PanelType.Message);
        }
        Message.convert = function (SDKmsg) {
            var msg = new Message();
            msg.conversationType = SDKmsg.conversationType;
            msg.extra = SDKmsg.extra;
            msg.objectName = SDKmsg.objectName;
            msg.messageDirection = SDKmsg.messageDirection;
            msg.messageId = SDKmsg.messageId;
            msg.receivedStatus = SDKmsg.receivedStatus;
            msg.receivedTime = new Date(SDKmsg.receivedTime);
            msg.senderUserId = SDKmsg.senderUserId;
            msg.sentStatus = SDKmsg.sendStatusMessage;
            msg.sentTime = new Date(SDKmsg.sentTime);
            msg.targetId = SDKmsg.targetId;
            msg.messageType = SDKmsg.messageType;
            switch (msg.messageType) {
                case WidgetModule.MessageType.TextMessage:
                    var texmsg = new TextMessage();
                    var content = SDKmsg.content.content;
                    if (RongIMLib.Expression && RongIMLib.Expression.retrievalEmoji) {
                        var a = document.createElement("span");
                        content = RongIMLib.Expression.retrievalEmoji(content, function (img) {
                            a.appendChild(img.img);
                            var str = '<span class="RongIMexpression_' + img.englishName + '" title="' + img.chineseName + '">' + a.innerHTML + '</span>';
                            a.innerHTML = "";
                            return str;
                        });
                    }
                    texmsg.content = content;
                    msg.content = texmsg;
                    break;
                case WidgetModule.MessageType.ImageMessage:
                    var image = new ImageMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    image.content = content;
                    image.imageUri = SDKmsg.content.imageUri;
                    msg.content = image;
                    break;
                case WidgetModule.MessageType.VoiceMessage:
                    var voice = new VoiceMessage();
                    voice.content = SDKmsg.content.content;
                    voice.duration = SDKmsg.content.duration;
                    msg.content = voice;
                    break;
                case WidgetModule.MessageType.RichContentMessage:
                    var rich = new RichContentMessage();
                    rich.content = SDKmsg.content.content;
                    rich.title = SDKmsg.content.title;
                    rich.imageUri = SDKmsg.content.imageUri;
                    msg.content = rich;
                    break;
                case WidgetModule.MessageType.LocationMessage:
                    var location = new LocationMessage();
                    location.content = SDKmsg.content.content;
                    location.latiude = SDKmsg.content.latiude;
                    location.longitude = SDKmsg.content.longitude;
                    location.poi = SDKmsg.content.poi;
                    msg.content = location;
                    break;
                case WidgetModule.MessageType.InformationNotificationMessage:
            }
            msg.content.userInfo = SDKmsg.content.userInfo;
            return msg;
        };
        return Message;
    })(ChatPanel);
    WidgetModule.Message = Message;
    var UserInfo = (function () {
        function UserInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return UserInfo;
    })();
    WidgetModule.UserInfo = UserInfo;
    var TextMessage = (function () {
        function TextMessage(msg) {
            msg = msg || {};
            this.content = msg.content;
            this.userInfo = msg.userInfo;
        }
        return TextMessage;
    })();
    WidgetModule.TextMessage = TextMessage;
    var InformationPanel = (function () {
        function InformationPanel() {
        }
        return InformationPanel;
    })();
    WidgetModule.InformationPanel = InformationPanel;
    var ImageMessage = (function () {
        function ImageMessage() {
        }
        return ImageMessage;
    })();
    WidgetModule.ImageMessage = ImageMessage;
    var VoiceMessage = (function () {
        function VoiceMessage() {
        }
        return VoiceMessage;
    })();
    WidgetModule.VoiceMessage = VoiceMessage;
    var LocationMessage = (function () {
        function LocationMessage() {
        }
        return LocationMessage;
    })();
    WidgetModule.LocationMessage = LocationMessage;
    var RichContentMessage = (function () {
        function RichContentMessage() {
        }
        return RichContentMessage;
    })();
    WidgetModule.RichContentMessage = RichContentMessage;
    var Conversation = (function () {
        function Conversation(targetType, targetId, title) {
            this.targetType = targetType;
            this.targetId = targetId;
            this.title = title;
        }
        return Conversation;
    })();
    WidgetModule.Conversation = Conversation;
    var Helper = (function () {
        function Helper() {
        }
        Helper.timeCompare = function (first, second) {
            var pre = first.toString();
            var cur = second.toString();
            return pre.substring(0, pre.lastIndexOf(":")) == cur.substring(0, cur.lastIndexOf(":"));
        };
        return Helper;
    })();
    WidgetModule.Helper = Helper;
})(WidgetModule || (WidgetModule = {}));
