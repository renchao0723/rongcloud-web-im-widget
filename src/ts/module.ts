/// <reference path="../../typings/tsd.d.ts"/>

module WidgetModule {

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
        CommandNotificationMessage: "CommandNotificationMessage"
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
        sendTime: Date
        constructor(time: Date) {
            super(PanelType.Time);
            this.sendTime = time;
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
                    if (RongIMLib.Expression && RongIMLib.Expression.retrievalEmoji) {
                        var a = document.createElement("span");
                        content = RongIMLib.Expression.retrievalEmoji(content, function(img: any) {
                            a.appendChild(img.img);
                            var str = '<span class="RongIMexpression_' + img.englishName + '" title="' + img.chineseName + '">' + a.innerHTML + '</span>';
                            a.innerHTML = "";
                            return str;
                        });
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
                    location.content = SDKmsg.content.content;
                    location.latiude = SDKmsg.content.latiude;
                    location.longitude = SDKmsg.content.longitude;
                    location.poi = SDKmsg.content.poi;

                    msg.content = location;
                    break;
                case MessageType.InformationNotificationMessage:
                // var info = new InformationPanel();
                // info.content = SDKmsg.content.content;
                // msg.content = info;
                // break;

            }

            msg.content.userInfo = SDKmsg.content.userInfo;

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

    export class TextMessage {
        userInfo: UserInfo;
        content: string;
        constructor(msg?: any) {
            msg = msg || {};
            this.content = msg.content;
            this.userInfo = msg.userInfo;
        }
    }
    export class InformationPanel{

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

    export class Conversation {
        targetType: string;
        targetId: string;
        title: string;
        portraitUri: string;
        onLine: boolean;

        constructor(targetType: string, targetId: string, title: string) {
            this.targetType = targetType;
            this.targetId = targetId;
            this.title = title;
        }
    }

    export class Helper {
        static timeCompare(first: Date, second: Date) {
            var pre = first.toString();
            var cur = second.toString();
            return pre.substring(0, pre.lastIndexOf(":")) == cur.substring(0, cur.lastIndexOf(":"))
        }
    }

}
