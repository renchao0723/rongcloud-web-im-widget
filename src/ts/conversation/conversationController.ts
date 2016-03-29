/// <reference path="../../../typings/tsd.d.ts"/>

var conversationController = angular.module("RongWebIMWidget.conversationController", ["RongWebIMWidget.conversationServer"]);

conversationController.controller("conversationController", ["$scope",
    "conversationServer", "WebIMWidget", "conversationListServer", "widgetConfig", "providerdata",
    function($scope: any, conversationServer: ConversationServer,
        WebIMWidget: WebIMWidget, conversationListServer: conversationListServer,
        widgetConfig: widgetConfig, providerdata: providerdata) {

        var ImageDomain = "http://7xogjk.com1.z0.glb.clouddn.com/";
        var notExistConversation = true;

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

        $scope.WebIMWidget = WebIMWidget;
        $scope.widgetConfig = widgetConfig;
        $scope.conversationServer = conversationServer;
        $scope._inputPanelState = WidgetModule.InputPanelType.person;

        $scope.showSelf = false;


        //显示表情
        $scope.showemoji = false;
        document.addEventListener("click", function(e: any) {
            if ($scope.showemoji && e.target.className.indexOf("iconfont-smile") == -1) {
                $scope.$apply(function() {
                    $scope.showemoji = false;
                });
            }
        });

        // $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 84);

        $scope.$watch("showemoji", function(newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if (!$scope.emojiList || $scope.emojiList.length == 0) {
                $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 84);
            }
        });

        $scope.$watch("currentConversation.messageContent", function(newVal: string, oldVal: string) {
            if (newVal === oldVal)
                return;
            if ($scope.currentConversation) {
                RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal)
            }
        });

        conversationServer.onConversationChangged = function(conversation: WidgetModule.Conversation) {

            if (widgetConfig.displayConversationList) {
                $scope.showSelf = true;
            } else {
                $scope.showSelf = true;
                $scope.WebIMWidget.display = true;
            }

            if (conversation && conversation.targetType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE && (!conversationServer.current || conversationServer.current.targetId != conversation.targetId)) {
                RongIMLib.RongIMClient.getInstance().startCustomService(conversation.targetId, {
                    onSuccess: function() {

                    },
                    onError: function() {
                        console.log("连接客服失败");
                    }
                })
            }

            //会话为空清除页面各项值
            if (!conversation || !conversation.targetId) {
                $scope.messageList = [];
                $scope.currentConversation = null;
                conversationServer.current = null;
                setTimeout(function() {
                    $scope.$apply();
                })
                return;
            }
            conversationServer.current = conversation;
            $scope.currentConversation = conversation;


            //TODO:获取历史消息

            conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || []

            var currenthis = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            if (currenthis.length == 0) {
                conversationServer._getHistoryMessages(+conversation.targetType, conversation.targetId, 3).then(function(data) {
                    $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
                    if ($scope.messageList.length > 0) {
                        $scope.messageList.unshift(new WidgetModule.TimePanl($scope.messageList[0].sentTime));
                        if (data.has) {
                            $scope.messageList.unshift(new WidgetModule.GetMoreMessagePanel());
                        }
                        adjustScrollbars();
                    }
                });
            } else {
                $scope.messageList = currenthis;
            }

            //TODO:获取草稿
            $scope.currentConversation.messageContent = RongIMLib.RongIMClient.getInstance().getTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId) || "";
            setTimeout(function() {
                $scope.$apply();
            })
        }



        conversationServer.onReceivedMessage = function(msg: WidgetModule.Message) {
            // $scope.messageList.splice(0, $scope.messageList.length);
            if ($scope.currentConversation && msg.targetId == $scope.currentConversation.targetId && msg.conversationType == $scope.currentConversation.targetType) {
                $scope.$apply();
                var systemMsg = null;
                switch (msg.messageType) {
                    case WidgetModule.MessageType.HandShakeResponseMessage:
                        conversationServer._customService.type = msg.content.data.serviceType;
                        conversationServer._customService.companyName = msg.content.data.companyName;
                        conversationServer._customService.robotName = msg.content.data.robotName;
                        conversationServer._customService.robotIcon = msg.content.data.robotIcon;
                        conversationServer._customService.robotWelcome = msg.content.data.robotWelcome;
                        conversationServer._customService.humanWelcome = msg.content.data.humanWelcome;
                        conversationServer._customService.noOneOnlineTip = msg.content.data.noOneOnlineTip;

                        if (msg.content.data.serviceType == "1") {//仅机器人
                            changeInputPanelState(WidgetModule.InputPanelType.robot);
                            msg.content.data.robotWelcome && (systemMsg = packReceiveMessage(RongIMLib.TextMessage.obtain(msg.content.data.robotWelcome), WidgetModule.MessageType.TextMessage));
                        } else if (msg.content.data.serviceType == "3") {
                            msg.content.data.robotWelcome && (systemMsg = packReceiveMessage(RongIMLib.TextMessage.obtain(msg.content.data.robotWelcome), WidgetModule.MessageType.TextMessage));
                            changeInputPanelState(WidgetModule.InputPanelType.robotSwitchPerson);
                        } else {
                            // msg.content.data.humanWelcome && (systemMsg = packReceiveMessage(RongIMLib.TextMessage.obtain(msg.content.data.humanWelcome), WidgetModule.MessageType.TextMessage));
                            changeInputPanelState(WidgetModule.InputPanelType.person);
                        }
                        $scope.evaluate.valid = false;
                        setTimeout(function() {
                            $scope.evaluate.valid = true;
                        }, 60 * 1000);

                        break;
                    case WidgetModule.MessageType.ChangeModeResponseMessage:
                        switch (msg.content.data.status) {
                            case 1:
                                conversationServer._customService.human.name = msg.content.data.name || "客服人员";
                                conversationServer._customService.human.headimgurl = msg.content.data.headimgurl;
                                changeInputPanelState(WidgetModule.InputPanelType.person);
                                break;
                            case 2:
                                if (conversationServer._customService.type == "2") {
                                    changeInputPanelState(WidgetModule.InputPanelType.person);
                                } else if (conversationServer._customService.type == "1" || conversationServer._customService.type == "3") {
                                    changeInputPanelState(WidgetModule.InputPanelType.robotSwitchPerson);
                                }
                                break;
                            case 3:
                                changeInputPanelState(WidgetModule.InputPanelType.robot);
                                systemMsg = packReceiveMessage(RongIMLib.InformationNotificationMessage.obtain("你被拉黑了"), WidgetModule.MessageType.InformationNotificationMessage);
                                break;
                            case 4:
                                changeInputPanelState(WidgetModule.InputPanelType.person);
                                systemMsg = packReceiveMessage(RongIMLib.InformationNotificationMessage.obtain("已经是人工了"), WidgetModule.MessageType.InformationNotificationMessage);
                                break;
                            default:
                                break;
                        }
                        break;
                    case WidgetModule.MessageType.TerminateMessage:
                        //关闭客服
                        if (msg.content.code == 0) {
                            $scope.evaluate.CSTerminate = true;
                            $scope.close();
                        } else {
                            if (conversationServer._customService.type == "1") {
                                changeInputPanelState(WidgetModule.InputPanelType.robot);
                            } else {
                                changeInputPanelState(WidgetModule.InputPanelType.robotSwitchPerson);
                            }
                        }

                        break;
                    case WidgetModule.MessageType.CustomerStatusUpdateMessage:
                        switch (Number(msg.content.serviceStatus)) {
                            case 1:
                                if (conversationServer._customService.type == "1") {
                                    changeInputPanelState(WidgetModule.InputPanelType.robot);
                                } else {
                                    changeInputPanelState(WidgetModule.InputPanelType.robotSwitchPerson);
                                }
                                break;
                            case 2:
                                changeInputPanelState(WidgetModule.InputPanelType.person);
                                break;
                            case 3:
                                changeInputPanelState(WidgetModule.InputPanelType.notService);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }

                if (systemMsg) {
                    var wmsg = WidgetModule.Message.convert(systemMsg);
                    addCustomService(wmsg);
                    conversationServer._addHistoryMessages(wmsg);
                }

                addCustomService(msg);

                setTimeout(function() {
                    adjustScrollbars();
                }, 200);
            }
        }



        conversationServer._onConnectSuccess = function() {
            RongIMLib.RongIMClient.getInstance().getFileToken(RongIMLib.FileType.IMAGE, {
                onSuccess: function(data) {
                    conversationServer._uploadToken = data.token;
                    uploadFileInit();
                }, onError: function() {

                }
            })
        }


        $scope.getHistory = function() {
            var arr = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
            arr.splice(0, arr.length);
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function(data) {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                if (data.has) {
                    conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].unshift(new WidgetModule.GetMoreMessagePanel());
                }
                // adjustScrollbars();
            });
        }

        $scope.getMoreMessage = function() {
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();

            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function(data) {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                if (data.has) {
                    conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].unshift(new WidgetModule.GetMoreMessagePanel());
                }
            });
        }

        function addCustomService(msg: WidgetModule.Message) {
            if (msg.conversationType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE && msg.content) {
                if (conversationServer._customService.currentType == "1") {
                    msg.content.userInfo = {
                        name: conversationServer._customService.human.name || "客服人员",
                        portraitUri: conversationServer._customService.human.headimgurl || conversationServer._customService.robotIcon,
                    }
                } else {
                    msg.content.userInfo = {
                        name: conversationServer._customService.robotName,
                        portraitUri: conversationServer._customService.robotIcon,
                    }
                }
            }
            return msg;
        }

        var changeInputPanelState = function(type) {
            $scope._inputPanelState = type;
            if (type == WidgetModule.InputPanelType.person) {
                $scope.evaluate.type = 1;
                conversationServer._customService.currentType = "1";
                conversationServer.current.title = conversationServer._customService.human.name || "客服人员";
            } else {
                $scope.evaluate.type = 2;
                conversationServer._customService.currentType = "2";
                conversationServer.current.title = conversationServer._customService.robotName;
            }
        }

        function packDisplaySendMessage(msg: any, messageType: string) {
            var ret = new RongIMLib.Message();
            var userinfo = new RongIMLib.UserInfo(conversationServer.loginUser.id, conversationServer.loginUser.name || "我", conversationServer.loginUser.portraitUri);
            msg.user = userinfo;
            ret.content = msg;
            ret.conversationType = $scope.currentConversation.targetType;
            ret.targetId = $scope.currentConversation.targetId;
            ret.senderUserId = conversationServer.loginUser.id;

            ret.messageDirection = RongIMLib.MessageDirection.SEND;
            ret.sentTime = (new Date()).getTime() - RongIMLib.RongIMClient.getInstance().getDeltaTime();
            ret.messageType = messageType;

            return ret;
        }

        function packReceiveMessage(msg: any, messageType: string) {
            var ret = new RongIMLib.Message();
            var userinfo = null;
            msg.userInfo = userinfo;
            ret.content = msg;
            ret.conversationType = $scope.currentConversation.targetType;
            ret.targetId = $scope.currentConversation.targetId;
            ret.senderUserId = $scope.currentConversation.targetId;

            ret.messageDirection = RongIMLib.MessageDirection.RECEIVE;
            ret.sentTime = (new Date()).getTime() - RongIMLib.RongIMClient.getInstance().getDeltaTime();
            ret.messageType = messageType;

            return ret;
        }


        function closeState() {

            if (WebIMWidget.onClose && typeof WebIMWidget.onClose === "function") {
                WebIMWidget.onClose($scope.currentConversation);
            }
            if (widgetConfig.displayConversationList) {
                $scope.showSelf = false;
            } else {
                $scope.WebIMWidget.display = false;
            }
            $scope.messageList = [];
            $scope.currentConversation = null;
            conversationServer.current = null;
        }

        $scope.evaluate = {
            type: 1,
            showevaluate: false,
            valid: false,
            CSTerminate: false,
            onConfirm: function(data) {
                //发评价
                if (data) {
                    if ($scope.value == 1) {
                        RongIMLib.RongIMClient.getInstance().evaluateHumanCustomService(conversationServer.current.targetId, data.stars, data.describe, {
                            onSuccess: function() {

                            }
                        })
                    } else {
                        RongIMLib.RongIMClient.getInstance().evaluateRebotCustomService(conversationServer.current.targetId, data.value, data.describe, {
                            onSuccess: function() {

                            }
                        })
                    }
                }
                RongIMLib.RongIMClient.getInstance().stopCustomeService(conversationServer.current.targetId, {
                    onSuccess: function() {

                    },
                    onError: function() {

                    }
                });

                closeState();
            },
            onCancle: function() {
                RongIMLib.RongIMClient.getInstance().stopCustomeService(conversationServer.current.targetId, {
                    onSuccess: function() {

                    },
                    onError: function() {

                    }
                });
                closeState();
            }
        }

        $scope.close = function() {
            if (WebIMWidget.onCloseBefore && typeof WebIMWidget.onCloseBefore === "function") {
                var isClose = WebIMWidget.onCloseBefore({
                    close: function(data) {
                        if (conversationServer.current.targetType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE) {
                            if ($scope.evaluate.valid) {
                                $scope.evaluate.showevaluate = true;
                            } else {
                                $scope.evaluate.onCancle();
                            }
                        } else {
                            closeState();
                        }
                    }
                });
            } else {
                if (conversationServer.current.targetType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE) {
                    if ($scope.evaluate.valid) {
                        $scope.evaluate.showevaluate = true;
                    } else {
                        $scope.evaluate.onCancle();
                    }
                } else {
                    closeState();
                }
            }
        }


        $scope.send = function() {
            if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                alert("请先选择一个会话目标。")
                return;
            }
            if ($scope.currentConversation.messageContent == "") {
                return;
            }


            var con = RongIMLib.RongIMEmoji.symbolToEmoji($scope.currentConversation.messageContent);

            var msg = RongIMLib.TextMessage.obtain(con);
            var userinfo = new RongIMLib.UserInfo(conversationServer.loginUser.id, conversationServer.loginUser.name, conversationServer.loginUser.portraitUri);

            msg.user = userinfo;

            RongIMLib.RongIMClient.getInstance().sendMessage(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, msg, {
                onSuccess: function(retMessage: RongIMLib.Message) {

                    conversationListServer.updateConversations().then(function() {

                    });
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

        $scope.minimize = function() {
            WebIMWidget.display = false;
        }

        $scope.switchPerson = function() {
            RongIMLib.RongIMClient.getInstance().switchToHumanMode(conversationServer.current.targetId, {
                onSuccess: function() {

                },
                onError: function() {

                }
            })
        }

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
                domain: ImageDomain,
                get_new_uptoken: false,
                // unique_names: true,
                filters: {
                    mime_types: [{ title: "Image files", extensions: "jpg,gif,png" }],
                    prevent_duplicates: false
                },
                multi_selection: false,
                auto_start: true,
                init: {
                    'FilesAdded': function(up: any, files: any) {
                    },
                    'BeforeUpload': function(up: any, file: any) {
                    },
                    'UploadProgress': function(up: any, file: any) {
                    },
                    'UploadComplete': function() {
                    },
                    'FileUploaded': function(up: any, file: any, info: any) {
                        if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                            alert("请先选择一个会话目标。")
                            return;
                        }
                        info = JSON.parse(info);
                        RongIMLib.RongIMClient.getInstance().getFileUrl(RongIMLib.FileType.IMAGE, info.name, {
                            onSuccess: function(url) {

                                WidgetModule.Helper.ImageHelper.getThumbnail(file.getNative(), 60000, function(obj: any, data: any) {
                                    var im = RongIMLib.ImageMessage.obtain(data, url.downloadUrl);

                                    var content = packDisplaySendMessage(im, WidgetModule.MessageType.ImageMessage);
                                    RongIMLib.RongIMClient.getInstance().sendMessage($scope.currentConversation.targetType, $scope.currentConversation.targetId, im, {
                                        onSuccess: function() {
                                            conversationListServer.updateConversations().then(function() {

                                            });
                                        },
                                        onError: function() {

                                        }
                                    })
                                    conversationServer._addHistoryMessages(WidgetModule.Message.convert(content));
                                    $scope.$apply();
                                    adjustScrollbars();
                                })

                            },
                            onError: function() {

                            }
                        });
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
