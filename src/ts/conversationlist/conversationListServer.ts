/// <reference path="../../../typings/tsd.d.ts"/>

var conversationListSer = angular.module("RongWebIMWidget.conversationListServer", ["RongWebIMWidget.conversationListDirective", "RongWebIMWidget"]);

conversationListSer.factory("conversationListServer", ["$q", "providerdata",
    function($q: angular.IQService, providerdata: providerdata
    ) {
        var server = <conversationListServer>{};

        server.conversationList = <WidgetModule.Conversation[]>[];

        server.updateConversations = function() {
            var defer = $q.defer();

            RongIMLib.RongIMClient.getInstance().getConversationList({
                onSuccess: function(data) {
                    server.conversationList.splice(0, server.conversationList.length);
                    for (var i = 0, len = data.length; i < len; i++) {
                        var con = WidgetModule.Conversation.onvert(data[i]);

                        if ( providerdata.getUserInfo) {
                            switch (con.targetType) {
                                case RongIMLib.ConversationType.PRIVATE:
                                    (function(a, b) {
                                        providerdata.getUserInfo(a.targetId, {
                                            onSuccess: function(data) {
                                                a.title = data.name;
                                                a.portraitUri = data.portraitUri;
                                                b.conversationTitle = data.name;
                                                b.portraitUri = data.portraitUri;
                                            }
                                        })
                                    } (con, data[i]));
                                    break;
                            }
                        }
                        server.conversationList.push(con);
                    }
                    defer.resolve();
                    server.refreshConversationList();
                },
                onError: function(error) {
                    defer.reject(error);
                }
            }, null);

            return defer.promise;
        }

        server.refreshConversationList = function() {
            //在controller里刷新页面。
        }

        server.getConversation = function(type: number, id: string) {
            for (var i = 0, len = server.conversationList.length; i < len; i++) {
                if (server.conversationList[i].targetType == type && server.conversationList[i].targetId == id) {
                    return server.conversationList[i];
                }
            }
            return null;
        }

        server.addConversation = function(conversation: WidgetModule.Conversation) {
            server.conversationList.unshift(conversation);
        }

        return server;
    }]);
interface conversationListServer {
    conversationList: WidgetModule.Conversation[]
    updateConversations(): angular.IPromise<any>
    refreshConversationList(): void
    getConversation(type: number, id: string): WidgetModule.Conversation
    addConversation(con: WidgetModule.Conversation): void
}
