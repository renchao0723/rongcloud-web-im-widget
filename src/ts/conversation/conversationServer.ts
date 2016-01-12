/// <reference path="../../../typings/tsd.d.ts"/>

var conversationServer = angular.module("rongWebIMWidget.conversationServer", ["rongWebIMWidget.conversationDirective"]);

conversationServer.factory("conversationServer", ["$q", function($q: angular.IQService) {

    var conversationServer = <ConversationServer>{}

    conversationServer.current = <WidgetModule.Conversation>{
        targetId: "",
        targetType: "",
        title: "",
        portraitUri: "",
        onLine: false
    }

    conversationServer.loginUser = {
        id: "",
        name: "",
        portraitUri: ""
    }

    conversationServer._cacheHistory = {};

    conversationServer._getHistoryMessages = function(targetType: number, targetId: string, number: number, reset?: boolean) {
        var defer = $q.defer();

        RongIMLib.RongIMClient.getInstance().getHistoryMessages(targetType, targetId, reset ? 0 : null, number, {
            onSuccess: function(data, has) {
                var msglen = data.length;
                while (msglen--) {
                    var msg = WidgetModule.Message.convert(data[msglen]);
                    unshiftHistoryMessages(targetId, targetType, msg);
                }

                defer.resolve({ data: data, has: has });
            },
            onError: function(error) {
                defer.reject(error);
            }
        })

        return defer.promise;
    }

    function unshiftHistoryMessages(id: string, type: number, item: any) {
        var arr = conversationServer._cacheHistory[type + "_" + id] = conversationServer._cacheHistory[type + "_" + id] || [];
        if (arr[0] && arr[0].sentTime && arr[0].panelType != WidgetModule.PanelType.Time && item.sentTime) {
            if (!WidgetModule.Helper.timeCompare(arr[0].sentTime, item.sentTime)) {
                arr.unshift(new WidgetModule.TimePanl(arr[0].sentTime));
            }
        }
        arr.unshift(item);
    }

    conversationServer._addHistoryMessages = function(item: WidgetModule.Message) {
        var arr = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] || [];

        if (arr[arr.length - 1] && arr[arr.length - 1].panelType != WidgetModule.PanelType.Time && arr[arr.length - 1].sentTime && item.sentTime) {
            if (!WidgetModule.Helper.timeCompare(arr[arr.length - 1].sentTime, item.sentTime)) {
                arr.push(new WidgetModule.TimePanl(item.sentTime));
            }
        }
        arr.push(item);
    }



    conversationServer.onConversationChangged = function() {
        //提供接口由conversation controller实现具体操作
    }

    conversationServer.onReceivedMessage = function() {
        //提供接口由coversation controller实现具体操作
    }

    return conversationServer;

}]);

interface ConversationServer {
    current: WidgetModule.Conversation
    loginUser: any
    onConversationChangged(conversation: WidgetModule.Conversation): void
    onReceivedMessage(message: WidgetModule.Message): void
    _cacheHistory: any
    _getHistoryMessages(targetType: number, targetId: string, number: number): angular.IPromise<any>
    _addHistoryMessages(msg: WidgetModule.Message): void

}
