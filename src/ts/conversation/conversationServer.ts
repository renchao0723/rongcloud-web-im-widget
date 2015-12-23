/// <reference path="../../../typings/tsd.d.ts"/>

var conversationServer = angular.module("rongWebimWidget.conversationServer", ["rongWebimWidget.conversationDirective"]);

conversationServer.factory("conversationServer", [function() {

    var conversationServer = <ConversationServer>{}

    conversationServer.current = {
        targetId: "",
        targetType: "",
        title: ""
    }

    conversationServer.loginUser = {
        id: "",
        name: "",
        portraitUri: ""
    }

    conversationServer._cacheHistory = {};

    


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
}
