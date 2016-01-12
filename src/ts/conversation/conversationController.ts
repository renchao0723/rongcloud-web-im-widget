/// <reference path="../../../typings/tsd.d.ts"/>

var conversationController = angular.module("RongWebIMWidget.conversationController", ["RongWebIMWidget.conversationServer"]);

conversationController.controller("conversationController", ["$scope", "conversationServer", "WebIMWidget",
    function($scope: any, conversationServer: ConversationServer, WebIMWidget: WebIMWidget) {

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

        $scope.resoures = WebIMWidget;

        console.log(WebIMWidget);

        //显示表情
        $scope.showemoji = false;
        document.addEventListener("click", function(e: any) {
            if ($scope.showemoji && e.target.className.indexOf("iconfont-smile") == -1) {
                $scope.$apply(function() {
                    $scope.showemoji = false;
                });
            }
        });

        $scope.emojiList = RongIMLib.Expression.getAllExpression(81, 0);


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
            conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || []

            var currenthis = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            if (currenthis.length == 0) {
                conversationServer._getHistoryMessages(+conversation.targetType, conversation.targetId, 3).then(function() {
                    $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
                    if ($scope.messageList.length > 0) {
                        $scope.messageList.unshift(new WidgetModule.TimePanl($scope.messageList[0].sentTime));
                        $scope.messageList.unshift(new WidgetModule.GetMoreMessagePanel());
                    }
                    adjustScrollbars();
                });
            } else {
                $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
            }

            //TODO:获取草稿
            $scope.currentConversation.messageContent = RongIMLib.RongIMClient.getInstance().getTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId) || "";
        }

        $scope.$watch("currentConversation.draftMsg", function(newVal: string, oldVal: string) {
            if (newVal === oldVal)
                return;

            RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal)
            //mainDataServer.conversation.setDraft($scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal);
        })

        conversationServer.onReceivedMessage = function(msg: WidgetModule.Message) {
            // $scope.messageList.splice(0, $scope.messageList.length);
            if (msg.targetId == $scope.currentConversation.targetId && msg.conversationType == $scope.currentConversation.targetType) {
                $scope.$apply();
                adjustScrollbars();
                console.log("刷新页面");
            }
        }


        $scope.getHistory = function() {
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function() {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                // $scope.$apply();
                adjustScrollbars();
            });
        }

        $scope.getMoreMessage = function() {
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();

            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function() {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                // adjustScrollbars();
                // $scope.$apply();
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

            if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                console.log("请设置会话");
                return;
            }
            if ($scope.currentConversation.messageContent == "") {
                return;
            }

            var con = $scope.currentConversation.messageContent.replace(/\[.+?\]/g, function(x: any) {
                return RongIMLib.Expression.getEmojiObjByEnglishNameOrChineseName(x.slice(1, x.length - 1)).tag || x;
            });

            var msg = RongIMLib.TextMessage.obtain(con);
            var userinfo = new RongIMLib.UserInfo(conversationServer.loginUser.id, conversationServer.loginUser.name, conversationServer.loginUser.portraitUri);
            // userinfo.userId = conversationServer.loginUser.id;
            // userinfo.name = conversationServer.loginUser.name;
            // userinfo.portraitUri = conversationServer.loginUser.portraitUri;
            msg.userInfo = userinfo;

            RongIMLib.RongIMClient.getInstance().sendMessage(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, msg, {
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
            $scope.currentConversation.messageContent = ""
            var obj = document.getElementById("inputMsg");
            WidgetModule.Helper.getFocus(obj);
        }


    }]);
