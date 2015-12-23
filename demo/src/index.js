/// <reference path="../../../typings/tsd.d.ts"/>
var conversationController = angular.module("rongWebimWidget.conversationController", ["rongWebimWidget.conversationServer"]);
conversationController.controller("conversationController", ["$scope", "conversationServer",
    function ($scope, conversationServer) {
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
            RongIMLib.RongIMClient.getInstance().getHistoryMessages(+conversation.targetType, conversation.targetId, null, 5, {
                onSuccess: function (list, has) {
                    for (var i = 0; i < list.length; i++) {
                        $scope.messageList.push(WidgetModule.Message.convert(list[i]));
                    }
                    adjustScrollbars();
                    $scope.$apply();
                },
                onError: function () {
                }
            });
        };
        conversationServer.onReceivedMessage = function (msg) {
            console.log(msg);
            if (msg.targetId === $scope.currentConversation.targetId) {
                $scope.messageList.push(WidgetModule.Message.convert(msg));
                adjustScrollbars();
                $scope.$apply();
            }
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
            var msg = RongIMLib.TextMessage.obtain($scope.messageContent);
            var userinfo = new RongIMLib.UserInfo();
            userinfo.userId = conversationServer.loginUser.id;
            userinfo.name = conversationServer.loginUser.name;
            userinfo.portraitUri = conversationServer.loginUser.portraitUri;
            msg.userInfo = userinfo;
            RongIMLib.RongIMClient.getInstance().sendMessage(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, msg, null, {
                onSuccess: function (retMessage) {
                    console.log("send success");
                },
                onError: function () {
                }
            });
            var content = packDisplaySendMessage(msg, WidgetModule.MessageType.TextMessage);
            $scope.messageList.push(WidgetModule.Message.convert(content));
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
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationServer = angular.module("rongWebimWidget.conversationServer", ["rongWebimWidget.conversationDirective"]);
conversationServer.factory("conversationServer", [function () {
        var conversationServer = {};
        conversationServer.current = {
            targetId: "",
            targetType: "",
            title: ""
        };
        conversationServer.loginUser = {
            id: "",
            name: "",
            portraitUri: ""
        };
        conversationServer._cacheHistory = {};
        conversationServer.onConversationChangged = function () {
            //提供接口由conversation controller实现具体操作
        };
        conversationServer.onReceivedMessage = function () {
            //提供接口由coversation controller实现具体操作
        };
        return conversationServer;
    }]);
/// <reference path="../../typings/tsd.d.ts"/>
var widget = angular.module("rongWebimWidget", ["rongWebimWidget.conversationServer"]);
widget.factory("WebimWidget", ["$q", "conversationServer", function ($q, conversationServer) {
        var WebimWidget = {};
        var messageList = {};
        var defaultconfig = {};
        WebimWidget.init = function (config) {
            angular.extend(defaultconfig, config);
            // if (config)
            //
            RongIMLib.RongIMClient.init(defaultconfig.appkey);
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
                    conversationServer.onReceivedMessage(msg);
                    if (WebimWidget.onReceivedMessage) {
                        WebimWidget.onReceivedMessage(data);
                    }
                }
            });
        };
        WebimWidget.setConversation = function (targetType, targetId, title) {
            //加载时立即设置会话会有问题
            //TODO:之后考虑怎么处理
            setTimeout(function () {
                conversationServer.onConversationChangged(new WidgetModule.Conversation(targetType, targetId, title));
            }, 0);
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
    var SentStatus;
    (function (SentStatus) {
    })(SentStatus || (SentStatus = {}));
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
    var InformationPanel = (function (_super) {
        __extends(InformationPanel, _super);
        function InformationPanel(content) {
            _super.call(this, PanelType.getMore);
            this.content = content;
        }
        return InformationPanel;
    })(ChatPanel);
    WidgetModule.InformationPanel = InformationPanel;
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
            msg.receivedTime = SDKmsg.receivedTime;
            msg.senderUserId = SDKmsg.senderUserId;
            msg.sentStatus = SDKmsg.sendStatusMessage;
            msg.sentTime = SDKmsg.sentTime;
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
})(WidgetModule || (WidgetModule = {}));
