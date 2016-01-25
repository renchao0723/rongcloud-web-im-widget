/// <reference path="../../../typings/tsd.d.ts"/>

var conversationController = angular.module("RongWebIMWidget.conversationController", ["RongWebIMWidget.conversationServer"]);

conversationController.controller("conversationController", ["$scope", "conversationServer", "WebIMWidget", "conversationListServer",
    function($scope: any, conversationServer: ConversationServer, WebIMWidget: WebIMWidget, conversationListServer: conversationListServer) {
        console.log("conversation controller");

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
            targetType: 0
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

        $scope.$watch("showemoji", function(newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if (!$scope.emojiList || $scope.emojiList.length == 0) {
                // $scope.emojiList = RongIMLib.Expression.getAllExpression(81, 0);
                RongIMLib.RongIMEmoji.initExpression(81, function(data) {
                    $scope.emojiList = data;
                })
            }
        });


        conversationServer.onConversationChangged = function(conversation: WidgetModule.Conversation) {
            if (!conversation || !conversation.targetId) {
                $scope.messageList = [];
                conversationServer.current = null;
                setTimeout(function() {
                    $scope.$apply();
                })
                return;
            }
            conversationServer.current = conversation;
            $scope.currentConversation = conversation;

            if (!conversationListServer.getConversation(conversation.targetType, conversation.targetId)) {
                conversationListServer.addConversation(conversation);
            }

            //TODO:获取历史消息
            //

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
            setTimeout(function() {
                $scope.$apply();
            })
        }

        $scope.$watch("currentConversation.messageContent", function(newVal: string, oldVal: string) {
            if (newVal === oldVal)
                return;

            RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal)

        });

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

        $scope.close = function() {
            if (WebIMWidget.onCloseBefore && typeof WebIMWidget.onCloseBefore === "function") {
                var isClose = WebIMWidget.onCloseBefore({
                    close: function() {
                        $scope.resoures.display = false;
                        setTimeout(function() {
                            $scope.$apply();
                        })
                        if (WebIMWidget.onClose && typeof WebIMWidget.onClose === "function") {
                            WebIMWidget.onClose();
                        }
                    }
                });
            } else {
                $scope.resoures.display = false;
                if (WebIMWidget.onClose && typeof WebIMWidget.onClose === "function") {
                    WebIMWidget.onClose();
                }
            }

        }



        $scope.send = function() {
            console.log($scope.currentConversation, conversationServer.loginUser);

            if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                console.log("请设置会话");
                alert("请先选择一个会话目标。")
                return;
            }
            if ($scope.currentConversation.messageContent == "") {
                return;
            }

            // var con = $scope.currentConversation.messageContent.replace(/\[.+?\]/g, function(x: any) {
            //     return RongIMLib.Expression.getEmojiObjByEnglishNameOrChineseName(x.slice(1, x.length - 1)).tag || x;
            // });

            var con = RongIMLib.RongIMEmoji.getExpressions($scope.currentConversation.messageContent);

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
                onError: function(error) {
                    console.log(error);
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

        $script.ready("qiniu", function() {
            if (conversationServer._uploadToken) {
                uploadFileInit();
            } else {
                var upload = document.getElementById("upload-file");
                var getToken = function() {
                    RongIMLib.RongIMClient.getInstance().getQnTkn(RongIMLib.FileType.IMAGE, {
                        onSuccess: function(data) {
                            conversationServer._uploadToken = data.token;
                            uploadFileInit();
                            angular.element(upload).off("click", getToken)
                        }
                    })
                }
                angular.element(upload).on("click", getToken)
            }
        })

        function uploadFileInit() {
            var qiniuuploader = Qiniu.uploader({
                // runtimes: 'html5,flash,html4',
                runtimes: 'html5,html4',
                browse_button: 'upload-file',
                // browse_button: 'upload',
                container: 'funcPanel',
                drop_element: 'Messages',
                max_file_size: '100mb',
                // flash_swf_url: 'js/plupload/Moxie.swf',
                dragdrop: true,
                chunk_size: '4mb',
                // uptoken_url: "http://webim.demo.rong.io/getUploadToken",
                uptoken: conversationServer._uploadToken,
                domain: "http://localhost:8000/",
                get_new_uptoken: false,
                unique_names: true,
                filters: {
                    mime_types: [{ title: "Image files", extensions: "jpg,gif,png" }],
                    prevent_duplicates: false
                },
                multi_selection: false,
                auto_start: true,
                init: {
                    'FilesAdded': function(up: any, files: any) {
                        console.log(up, files);
                    },
                    'BeforeUpload': function(up: any, file: any) {
                        console.log(up, file);
                    },
                    'UploadProgress': function(up: any, file: any) {
                        console.log(up, file);
                    },
                    'UploadComplete': function() {
                        console.log("wan cheng");
                    },
                    'FileUploaded': function(up: any, file: any, info: any) {
                        !function(info: any) {
                            var info = JSON.parse(info);
                            // webimutil.ImageHelper.getThumbnail(file.getNative(), 60000, function(obj: any, data: any) {
                            //     var im = RongIMLib.ImageMessage.obtain(data, IMGDOMAIN + info.key);
                            //
                            //     var content = packmysend(im, webimmodel.MessageType.ImageMessage);
                            //     RongIMSDKServer.sendMessage($scope.currentConversation.targetType, $scope.currentConversation.targetId, im).then(function() {
                            //
                            //     }, function() {
                            //
                            //     })
                            //     conversationServer.addHistoryMessages($scope.currentConversation.targetId, $scope.currentConversation.targetType,
                            //         webimmodel.Message.convertMsg(content));
                            //     setTimeout(function() {
                            //         $scope.$emit("msglistchange");
                            //         $scope.$emit("conversationChange");
                            //     }, 200);
                            // })
                        } (info)

                    },
                    'Error': function(up: any, err: any, errTip: any) {
                    }
                    // ,
                    // 'Key': function(up: any, file: any) {
                    //     var key = "";
                    //     // do something with key
                    //     return key
                    // }
                }
            });
        }

    }]);
