/// <reference path="../../../typings/tsd.d.ts"/>

var conversationController = angular.module("rongWebimWidget.conversationController", ["rongWebimWidget.conversationServer"]);

conversationController.controller("conversationController", ["$scope", "conversationServer", "WebimWidget",
    function($scope: any, conversationServer: ConversationServer, WebimWidget: WebimWidget) {

        function adjustScrollbars() {
            setTimeout(function() {
                var ele = document.getElementById("Messages");
                if (!ele)
                    return;
                ele.scrollTop = ele.scrollHeight;
            }, 0);
        }

        $scope.currentConversation = <WidgetModule.Conversation>{
            title: "",
            targetId: "",
            targetType: ""
        }

        $scope.messageList = [];

        $scope.messageContent = "";

        $scope.resoures = WebimWidget;
        console.log(WebimWidget);

        WebimWidget.hidden = function() {
            WebimWidget.display = false;
        }

        WebimWidget.show = function() {
            WebimWidget.display = true;
        }

        conversationServer.onConversationChangged = function(conversation: WidgetModule.Conversation) {

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
                conversationServer._getHistoryMessages(+conversation.targetType, conversation.targetId, 3).then(function() {
                    $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
                    // $scope.$apply();
                    adjustScrollbars();
                });
            } else {
                $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
            }

        }

        conversationServer.onReceivedMessage = function(msg: WidgetModule.Message) {
            $scope.messageList.splice(0, $scope.messageList.length);
            if (msg.targetId == $scope.currentConversation.targetId && msg.conversationType == $scope.currentConversation.targetType) {
                adjustScrollbars();
                $scope.$apply();
            }
        }


        $scope.getHistory = function() {
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function() {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                $scope.$apply();
                adjustScrollbars();
            });
        }

        $scope.getMoreMessage = function() {
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function() {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                $scope.$apply();
                adjustScrollbars();
            });
        }


        function packDisplaySendMessage(msg: RongIMLib.MessageContent, messageType: string) {
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



        $scope.send = function() {
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
                onSuccess: function(retMessage: RongIMLib.Message) {
                    console.log("send success");
                },
                onError: function() {

                }
            });

            var content = packDisplaySendMessage(msg, WidgetModule.MessageType.TextMessage);

            var cmsg = WidgetModule.Message.convert(content);
            conversationServer._addHistoryMessages(cmsg);
            // $scope.messageList.push();

            adjustScrollbars();
            $scope.messageContent = ""
            // $scope.$apply();
        }


    }]);
