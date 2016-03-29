/// <reference path="../../typings/tsd.d.ts"/>

module WidgetModule {

    export enum EnumConversationListPosition {
        left = 0, right = 1
    }

    export enum EnumConversationType {
        PRIVATE = 1, DISCUSSION = 2, GROUP = 3, CHATROOM = 4, CUSTOMER_SERVICE = 5, SYSTEM = 6, APP_PUBLIC_SERVICE = 7, PUBLIC_SERVICE = 8
    }

    export enum MessageDirection {
        SEND = 1,
        RECEIVE = 2,
    }

    export enum ReceivedStatus {
        READ = 0x1,
        LISTENED = 0x2,
        DOWNLOADED = 0x4
    }

    export enum SentStatus {
        /**
         * 发送中。
         */
        SENDING = 10,
        /**
         * 发送失败。
         */
        FAILED = 20,
        /**
         * 已发送。
         */
        SENT = 30,
        /**
         * 对方已接收。
         */
        RECEIVED = 40,
        /**
         * 对方已读。
         */
        READ = 50,
        /**
         * 对方已销毁。
         */
        DESTROYED = 60,
    }

    enum AnimationType {
        left = 1, right = 2, top = 3, bottom = 4
    }

    export enum InputPanelType {
        person = 0, robot = 1, robotSwitchPerson = 2, notService = 4
    }

    export var MessageType = {
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
        CommandNotificationMessage: "CommandNotificationMessage",
        HandShakeResponseMessage: "HandShakeResponseMessage",
        ChangeModeResponseMessage: "ChangeModeResponseMessage",
        TerminateMessage: "TerminateMessage",
        CustomerStatusUpdateMessage: "CustomerStatusUpdateMessage"
    }

    export enum PanelType {
        Message = 1, InformationNotification = 2,
        System = 103, Time = 104, getHistory = 105, getMore = 106,
        Other = 0
    }

    export class ChatPanel {
        panelType: PanelType
        constructor(type: number) {
            this.panelType = type;
        }
    }

    export class TimePanl extends ChatPanel {
        sentTime: Date;
        constructor(date: Date) {
            super(PanelType.Time);
            this.sentTime = date;
        }
    }

    export class GetHistoryPanel extends ChatPanel {
        constructor() {
            super(PanelType.getHistory);
        }
    }

    export class GetMoreMessagePanel extends ChatPanel {
        constructor() {
            super(PanelType.getMore);
        }
    }

    export class TimePanel extends ChatPanel {
        sentTime: Date
        constructor(time: Date) {
            super(PanelType.Time);
            this.sentTime = time;
        }
    }



    export class Message extends ChatPanel {
        content: any;
        conversationType: any;
        extra: string;
        objectName: string;
        messageDirection: MessageDirection;
        messageId: string;
        receivedStatus: ReceivedStatus;
        receivedTime: Date;
        senderUserId: string;
        sentStatus: SentStatus;
        sentTime: Date;
        targetId: string;
        messageType: string;
        constructor(content?: any, conversationType?: string, extra?: string, objectName?: string, messageDirection?: MessageDirection, messageId?: string, receivedStatus?: ReceivedStatus, receivedTime?: number, senderUserId?: string, sentStatus?: SentStatus, sentTime?: number, targetId?: string, messageType?: string) {
            super(PanelType.Message);
        }
        static convert(SDKmsg: any) {

            var msg = new Message();
            msg.conversationType = SDKmsg.conversationType;
            msg.extra = SDKmsg.extra;
            msg.objectName = SDKmsg.objectName
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
                case MessageType.TextMessage:
                    var texmsg = new TextMessage();
                    var content = SDKmsg.content.content;
                    if (RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.emojiToHTML) {
                        content = RongIMLib.RongIMEmoji.emojiToHTML(content);
                    }
                    texmsg.content = content;

                    msg.content = texmsg;
                    break;
                case MessageType.ImageMessage:
                    var image = new ImageMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    image.content = content;
                    image.imageUri = SDKmsg.content.imageUri;

                    msg.content = image;
                    break;

                case MessageType.VoiceMessage:
                    var voice = new VoiceMessage();
                    voice.content = SDKmsg.content.content;
                    voice.duration = SDKmsg.content.duration;

                    msg.content = voice;
                    break;

                case MessageType.RichContentMessage:
                    var rich = new RichContentMessage();
                    rich.content = SDKmsg.content.content;
                    rich.title = SDKmsg.content.title;
                    rich.imageUri = SDKmsg.content.imageUri;

                    msg.content = rich;
                    break;
                case MessageType.LocationMessage:
                    var location = new LocationMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    location.content = content;
                    location.latiude = SDKmsg.content.latiude;
                    location.longitude = SDKmsg.content.longitude;
                    location.poi = SDKmsg.content.poi;

                    msg.content = location;
                    break;
                case MessageType.InformationNotificationMessage:
                    var info = new InformationNotificationMessage();
                    msg.panelType = 2;//灰条消息
                    info.content = SDKmsg.content.message;

                    msg.content = info;
                    break;
                case MessageType.DiscussionNotificationMessage:
                    var discussion = new DiscussionNotificationMessage();
                    discussion.extension = SDKmsg.content.extension;
                    discussion.operation = SDKmsg.content.operation;
                    discussion.type = SDKmsg.content.type;
                    discussion.isHasReceived = SDKmsg.content.isHasReceived;

                    msg.content = discussion;
                case WidgetModule.MessageType.HandShakeResponseMessage:
                    var handshak = new HandShakeResponseMessage();
                    handshak.status = SDKmsg.content.status;
                    handshak.msg = SDKmsg.content.msg;
                    handshak.data = SDKmsg.content.data;
                    msg.content = handshak;
                    break;
                case WidgetModule.MessageType.ChangeModeResponseMessage:
                    var change = new ChangeModeResponseMessage();
                    change.code = SDKmsg.content.code;
                    change.data = SDKmsg.content.data;
                    change.status = SDKmsg.content.status;
                    msg.content = change;
                    break;
                case WidgetModule.MessageType.CustomerStatusUpdateMessage:
                    var up = new CustomerStatusUpdateMessage();
                    up.serviceStatus = SDKmsg.content.serviceStatus;
                    msg.content = up;
                    break;
                case WidgetModule.MessageType.TerminateMessage:
                    var ter = new TerminateMessage();
                    ter.code = SDKmsg.content.code;
                    msg.content = ter;
                    break;
                default:
                    console.log("未处理消息类型:" + SDKmsg.messageType);
                    break;
            }
            if (msg.content) {
                msg.content.userInfo = SDKmsg.content.user;
            }

            return msg;
        }

    }

    export class UserInfo {
        userId: string;
        name: string;
        portraitUri: string;
        constructor(userId: string, name: string, portraitUri?: string) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
    }

    export class GroupInfo {
        userId: string;
        name: string;
        portraitUri: string;
        constructor(userId: string, name: string, portraitUri?: string) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
    }

    export class TextMessage {
        userInfo: UserInfo;
        content: string;
        constructor(msg?: any) {
            msg = msg || {};
            this.content = msg.content;
            this.userInfo = msg.userInfo;
        }
    }
    export class HandShakeResponseMessage {
        status: string
        msg: string
        data: {
            uid: string,
            pid: string,
            sid: string,
            serviceType: string,
            isblack: string,
            notAutoCha: string,
            roboWelcome: string,
            robotName: string,
            robotIcon: string,
            humanWelcome: string,
            companyName: string,
            noOneOnlineTip: string
        }
    }
    export class ChangeModeResponseMessage {
        code: string
        data: any//1成功，2没有客服在线，3用户被拉黑，4用户已转人工
        status: string
    }
    export class TerminateMessage {
        code: string //0表示会话结束，1转为机器人
    }
    export class CustomerStatusUpdateMessage {
        serviceStatus: string//1机器人，2人工，3无法服务
    }

    export class InformationNotificationMessage {
        userInfo: UserInfo;
        content: string;
        extra: string;
        messageName: string;
    }

    export class ImageMessage {
        userInfo: UserInfo;
        content: string;
        imageUri: string;
    }

    export class VoiceMessage {
        userInfo: UserInfo;
        content: string;
        duration: string;
    }

    export class LocationMessage {
        userInfo: UserInfo;
        content: string;
        latiude: number;
        longitude: number;
        poi: string;
    }

    export class RichContentMessage {
        userInfo: UserInfo;
        content: string;
        title: string;
        imageUri: string;
    }

    export class DiscussionNotificationMessage {
        userInfo: UserInfo;
        extension: string;
        type: number;
        isHasReceived: boolean;
        operation: string;
        extra: string;
        messageName: string;
    }

    export class Conversation {
        targetType: number;
        targetId: string;
        title: string;
        portraitUri: string;
        unreadMessageCount: number

        onLine: boolean;

        constructor(targetType?: number, targetId?: string, title?: string) {
            this.targetType = targetType;
            this.targetId = targetId;
            this.title = title || "";
        }

        static onvert(item: RongIMLib.Conversation) {
            var conver = new Conversation();

            conver.targetId = item.targetId;
            conver.targetType = item.conversationType;
            conver.title = item.conversationTitle;
            conver.portraitUri = item.senderPortraitUri;

            conver.unreadMessageCount = item.unreadMessageCount;

            return conver;
        }
    }

    var userAgent = window.navigator.userAgent;

    export class Helper {
        static timeCompare(first: Date, second: Date) {
            var pre = first.toString();
            var cur = second.toString();
            return pre.substring(0, pre.lastIndexOf(":")) == cur.substring(0, cur.lastIndexOf(":"))
        }
        static browser = {
            version: (userAgent.match(/.+(?:rv|it|ra|chrome|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
            safari: /webkit/.test(userAgent),
            opera: /opera|opr/.test(userAgent),
            msie: /msie|trident/.test(userAgent) && !/opera/.test(userAgent),
            chrome: /chrome/.test(userAgent),
            mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit|like gecko)/.test(userAgent)
        }
        static getFocus = function(obj: any) {
            obj.focus();
            if (obj.createTextRange) {//ie
                var rtextRange = obj.createTextRange();
                rtextRange.moveStart('character', obj.value.length);
                rtextRange.collapse(true);
                rtextRange.select();
            }
            else if (obj.selectionStart) {//chrome "<input>"、"<textarea>"
                obj.selectionStart = obj.value.length;
            } else if (window.getSelection && obj.lastChild) {

                var sel = window.getSelection();

                var tempRange = document.createRange();
                if (WidgetModule.Helper.browser.msie) {
                    tempRange.setStart(obj.lastChild, obj.lastChild.length);
                } else {
                    tempRange.setStart(obj.firstChild, obj.firstChild.length);
                }

                sel.removeAllRanges();
                sel.addRange(tempRange);
            }
        }

        static checkType(obj) {
            var type = Object.prototype.toString.call(obj);
            return type.substring(8, type.length - 1).toLowerCase();
        }

        static ImageHelper = {
            getThumbnail(obj: any, area: number, callback: any) {
                var canvas = document.createElement("canvas"),
                    context = canvas.getContext('2d');

                var img = new Image();

                img.onload = function() {
                    var target_w: number;
                    var target_h: number;

                    var imgarea = img.width * img.height;
                    if (imgarea > area) {
                        var scale = Math.sqrt(imgarea / area);
                        scale = Math.ceil(scale * 100) / 100;
                        target_w = img.width / scale;
                        target_h = img.height / scale;
                    } else {
                        target_w = img.width;
                        target_h = img.height;
                    }

                    canvas.width = target_w;
                    canvas.height = target_h;

                    context.drawImage(img, 0, 0, target_w, target_h);

                    try {
                        var _canvas = canvas.toDataURL("image/jpeg", 0.5);
                        _canvas = _canvas.substr(23);
                        callback(obj, _canvas);
                    } catch (e) {
                        callback(obj, null);
                    }

                }
                img.src = WidgetModule.Helper.ImageHelper.getFullPath(obj);
            },
            getFullPath(file: File) {
                window.URL = window.URL || window.webkitURL;
                if (window.URL && window.URL.createObjectURL) {
                    return window.URL.createObjectURL(file)
                } else {
                    return null;
                }
            }
        }
    }

}
