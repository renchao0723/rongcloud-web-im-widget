var SDKServer = angular.module("RongIMSDKModule", []);


SDKServer.factory("RongIMSDKServer", ["$q", function($q: angular.IQService) {
    var RongIMSDKServer = <any>{};

    RongIMSDKServer.init = function(appkey: string) {
        RongIMLib.RongIMClient.init(appkey);
    }

    RongIMSDKServer.connect = function(token: string) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.connect(token, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onTokenIncorrect: function() {
                defer.reject({ tokenError: true });
            },
            onError: function(errorCode) {
                defer.reject({ errorCode: errorCode });
                var info = '';
                switch (errorCode) {
                    case RongIMLib.ErrorCode.TIMEOUT:
                        info = '连接超时';
                        break;
                    case RongIMLib.ErrorCode.UNKNOWN:
                        info = '未知错误';
                        break;
                    case RongIMLib.ConnectionState.UNACCEPTABLE_PROTOCOL_VERSION:
                        info = '不可接受的协议版本';
                        break;
                    case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
                        info = 'appkey不正确';
                        break;
                    case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
                        info = '服务器不可用';
                        break;
                    case RongIMLib.ConnectionState.NOT_AUTHORIZED:
                        info = '未认证';
                        break;
                    case RongIMLib.ConnectionState.REDIRECT:
                        info = '重新获取导航';
                        break;
                    case RongIMLib.ConnectionState.APP_BLOCK_OR_DELETE:
                        info = '应用已被封禁或已被删除';
                        break;
                    case RongIMLib.ConnectionState.BLOCK:
                        info = '用户被封禁';
                        break;
                }
                console.log("失败:" + info);
            }
        });

        return defer.promise;
    }

    RongIMSDKServer.getInstance = function() {
        return RongIMLib.RongIMClient.getInstance();
    }

    RongIMSDKServer.setOnReceiveMessageListener = function(option: any) {
        RongIMLib.RongIMClient.setOnReceiveMessageListener(option);
    }

    RongIMSDKServer.setConnectionStatusListener = function(option: any) {
        RongIMLib.RongIMClient.setConnectionStatusListener(option);
    }

    RongIMSDKServer.sendMessage = function(conver: number, targetId: string, content: any) {
        var defer = $q.defer();

        RongIMLib.RongIMClient.getInstance().sendMessage(+conver, targetId, content, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function(errorCode, message) {
                defer.reject({ errorCode: errorCode, message: message });
                var info = '';
                switch (errorCode) {
                    case RongIMLib.ErrorCode.TIMEOUT:
                        info = '超时';
                        break;
                    case RongIMLib.ErrorCode.UNKNOWN:
                        info = '未知错误';
                        break;
                    case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                        info = '在黑名单中，无法向对方发送消息';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                        info = '不在讨论组中';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_GROUP:
                        info = '不在群组中';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                        info = '不在聊天室中';
                        break;
                    default:
                        info = "";
                        break;
                }
                console.log('发送失败:' + info);
            }
        });

        return defer.promise;
    }

    RongIMSDKServer.reconnect = function(callback: any) {
        RongIMLib.RongIMClient.reconnect(callback);
    }

    RongIMSDKServer.clearUnreadCount = function(type: number, targetid: string) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().clearUnreadCount(type, targetid, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function(error) {
                defer.reject(error);
            }
        });
        return defer.promise;
    }


    RongIMSDKServer.getTotalUnreadCount = function() {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().getTotalUnreadCount({
            onSuccess: function(num) {
                defer.resolve(num);
            },
            onError: function() {
                defer.reject();
            }
        });
        return defer.promise;
    }

    RongIMSDKServer.getConversationList = function() {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().getConversationList({
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function(error) {
                defer.reject(error);
            }
        }, null);
        return defer.promise;
    }

    // RongIMSDKServer.conversationList = function() {
    //     return RongIMLib.RongIMClient._memoryStore.conversationList;
    //     // return RongIMLib.RongIMClient.conversationMap.conversationList;
    // }

    RongIMSDKServer.removeConversation = function(type: number, targetId: string) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().removeConversation(type, targetId, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function(error) {
                defer.reject(error);
            }
        });
        return defer.promise;
    }

    RongIMSDKServer.createConversation = function(type: number, targetId: string, title: string) {
        RongIMLib.RongIMClient.getInstance().createConversation(type, targetId, title);
    }

    RongIMSDKServer.getConversation = function(type: number, targetId: string) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().getConversation(type, targetId, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function() {
                defer.reject();
            }
        });
        return defer.promise;
    }

    RongIMSDKServer.getDraft = function(type: number, targetId: string) {
        return RongIMLib.RongIMClient.getInstance().getTextMessageDraft(type, targetId) || "";
    }

    RongIMSDKServer.setDraft = function(type: number, targetId: string, value: string) {
        return RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(type, targetId, value);
    }

    RongIMSDKServer.clearDraft = function(type: number, targetId: string) {
        return RongIMLib.RongIMClient.getInstance().clearTextMessageDraft(type, targetId);
    }

    RongIMSDKServer.getHistoryMessages = function(type: number, targetId: string, num: number) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().getHistoryMessages(type, targetId, null, num, {
            onSuccess: function(data, has) {
                defer.resolve({
                    data: data,
                    has: has
                });
            },
            onError: function(error) {
                defer.reject(error);
            }
        })
        return defer.promise;
    }

    RongIMSDKServer.disconnect = function() {
        RongIMLib.RongIMClient.getInstance().disconnect();
    }

    RongIMSDKServer.logout = function() {
        if (RongIMLib && RongIMLib.RongIMClient) {
            RongIMLib.RongIMClient.getInstance().logout();
        }
    }

    RongIMSDKServer.voice = {
        init: function() {
            // RongIMLib.voice.init()
        },
        play: function(content: string, time: any) {
            RongIMLib.voice.play(content, time);
        }
    }

    return RongIMSDKServer;
}]);

interface RongIMSDKServer {
    init(appkey: string): void
    connect(token: string): angular.IPromise<string>
    setConnectionStatusListener(listener: any): void
    setOnReceiveMessageListener(listener: any): void
    removeConversation(type: number, targetId: string): angular.IPromise<boolean>
    clearMessagesUnreadStatus(type: number, targetid: string): angular.IPromise<boolean>
    clearUnreadCount(type: number, targetid: string): angular.IPromise<boolean>
    getTotalUnreadCount(): angular.IPromise<number>
    sendMessage(conver: number, targetId: string, content: any): angular.IPromise<RongIMLib.Message>
    // conversationList(): any
    getConversationList(): angular.IPromise<RongIMLib.Conversation[]>
    getConversation(type: number, targetId: string): angular.IPromise<RongIMLib.Conversation>
    createConversation(type: number, targetId: string, title: string): RongIMLib.Conversation
    getDraft(type: number, targetId: string): string
    setDraft(type: number, targetId: string, valur: string): boolean
    clearDraft(type: number, targetId: string): boolean
    getHistoryMessages(type: number, targetId: string, num: number): angular.IPromise<{ data: RongIMLib.Message[], has: boolean }>
    disconnect(): void
    logout(): void

    voice: any
}
