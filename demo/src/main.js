/// <reference path="../../../typings/tsd.d.ts"/>
var conversationController = angular.module("RongWebIMWidget.conversationController", ["RongWebIMWidget.conversationServer"]);
conversationController.controller("conversationController", ["$scope", "conversationServer", "WebIMWidget", "conversationListServer",
    function ($scope, conversationServer, WebIMWidget, conversationListServer) {
        console.log("conversation controller");
        function adjustScrollbars() {
            setTimeout(function () {
                var ele = document.getElementById("Messages");
                if (!ele)
                    return;
                ele.scrollTop = ele.scrollHeight;
            }, 0);
        }
        $scope.currentConversation = {
            title: "",
            targetId: "",
            targetType: 0
        };
        $scope.messageList = [];
        $scope.messageContent = "";
        $scope.resoures = WebIMWidget;
        console.log(WebIMWidget);
        //显示表情
        $scope.showemoji = false;
        document.addEventListener("click", function (e) {
            if ($scope.showemoji && e.target.className.indexOf("iconfont-smile") == -1) {
                $scope.$apply(function () {
                    $scope.showemoji = false;
                });
            }
        });
        $scope.$watch("showemoji", function (newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if (!$scope.emojiList || $scope.emojiList.length == 0) {
                // $scope.emojiList = RongIMLib.Expression.getAllExpression(81, 0);
                RongIMLib.RongIMEmoji.initExpression(81, function (data) {
                    $scope.emojiList = data;
                });
            }
        });
        conversationServer.onConversationChangged = function (conversation) {
            if (!conversation || !conversation.targetId) {
                $scope.messageList = [];
                conversationServer.current = null;
                setTimeout(function () {
                    $scope.$apply();
                });
                return;
            }
            conversationServer.current = conversation;
            $scope.currentConversation = conversation;
            if (!conversationListServer.getConversation(conversation.targetType, conversation.targetId)) {
                conversationListServer.addConversation(conversation);
            }
            //TODO:获取历史消息
            //
            conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            var currenthis = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            if (currenthis.length == 0) {
                conversationServer._getHistoryMessages(+conversation.targetType, conversation.targetId, 3).then(function () {
                    $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
                    if ($scope.messageList.length > 0) {
                        $scope.messageList.unshift(new WidgetModule.TimePanl($scope.messageList[0].sentTime));
                        $scope.messageList.unshift(new WidgetModule.GetMoreMessagePanel());
                    }
                    adjustScrollbars();
                });
            }
            else {
                $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
            }
            //TODO:获取草稿
            $scope.currentConversation.messageContent = RongIMLib.RongIMClient.getInstance().getTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId) || "";
            setTimeout(function () {
                $scope.$apply();
            });
        };
        $scope.$watch("currentConversation.messageContent", function (newVal, oldVal) {
            if (newVal === oldVal)
                return;
            RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal);
        });
        conversationServer.onReceivedMessage = function (msg) {
            // $scope.messageList.splice(0, $scope.messageList.length);
            if (msg.targetId == $scope.currentConversation.targetId && msg.conversationType == $scope.currentConversation.targetType) {
                $scope.$apply();
                adjustScrollbars();
                console.log("刷新页面");
            }
        };
        $scope.getHistory = function () {
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function () {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                // $scope.$apply();
                adjustScrollbars();
            });
        };
        $scope.getMoreMessage = function () {
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function () {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                // adjustScrollbars();
                // $scope.$apply();
            });
        };
        function packDisplaySendMessage(msg, messageType) {
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
        $scope.close = function () {
            if (WebIMWidget.onCloseBefore && typeof WebIMWidget.onCloseBefore === "function") {
                var isClose = WebIMWidget.onCloseBefore({
                    close: function () {
                        $scope.resoures.display = false;
                        setTimeout(function () {
                            $scope.$apply();
                        });
                        if (WebIMWidget.onClose && typeof WebIMWidget.onClose === "function") {
                            WebIMWidget.onClose();
                        }
                    }
                });
            }
            else {
                $scope.resoures.display = false;
                if (WebIMWidget.onClose && typeof WebIMWidget.onClose === "function") {
                    WebIMWidget.onClose();
                }
            }
        };
        $scope.send = function () {
            console.log($scope.currentConversation, conversationServer.loginUser);
            if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                console.log("请设置会话");
                alert("请先选择一个会话目标。");
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
                onSuccess: function (retMessage) {
                    console.log("send success");
                },
                onError: function (error) {
                    console.log(error);
                }
            });
            var content = packDisplaySendMessage(msg, WidgetModule.MessageType.TextMessage);
            var cmsg = WidgetModule.Message.convert(content);
            conversationServer._addHistoryMessages(cmsg);
            // $scope.messageList.push();
            adjustScrollbars();
            $scope.currentConversation.messageContent = "";
            var obj = document.getElementById("inputMsg");
            WidgetModule.Helper.getFocus(obj);
        };
        $script.ready("qiniu", function () {
            if (conversationServer._uploadToken) {
                uploadFileInit();
            }
            else {
                var upload = document.getElementById("upload-file");
                RongIMLib.RongIMClient.getInstance().getQnTkn(RongIMLib.FileType.IMAGE, {
                    onSuccess: function (data) {
                        conversationServer._uploadToken = data.token;
                        uploadFileInit();
                    }
                });
            }
        });
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
                    'FilesAdded': function (up, files) {
                        console.log(up, files);
                    },
                    'BeforeUpload': function (up, file) {
                        console.log(up, file);
                    },
                    'UploadProgress': function (up, file) {
                        console.log(up, file);
                    },
                    'UploadComplete': function () {
                        console.log("wan cheng");
                    },
                    'FileUploaded': function (up, file, info) {
                        !function (info) {
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
                        }(info);
                    },
                    'Error': function (up, err, errTip) {
                    }
                }
            });
        }
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationDirective = angular.module("RongWebIMWidget.conversationDirective", ["RongWebIMWidget.conversationController"]);
conversationDirective.directive("rongConversation", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/conversation/template.tpl.html",
            controller: "conversationController"
        };
    }]);
conversationDirective.directive("emoji", [function () {
        return {
            restrict: "E",
            scope: {
                item: "=",
                content: "="
            },
            template: "",
            link: function (scope, ele, attr) {
                ele.append(scope.item);
                ele.on("click", function () {
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent || "";
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent.replace(/\n$/, "");
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent + scope.item.children[0].getAttribute("name");
                    scope.$parent.$apply();
                    var obj = document.getElementById("inputMsg");
                    WidgetModule.Helper.getFocus(obj);
                });
            }
        };
    }]);
conversationDirective.directive('contenteditableDire', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            function replacemy(e) {
                return e.replace(new RegExp("<[\\s\\S.]*?>", "ig"), "");
            }
            var domElement = element[0];
            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newVal) {
                if (document.activeElement === domElement) {
                    return;
                }
                if (newVal === '' || newVal === attrs["placeholder"]) {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });
            element.bind('focus', function () {
                if (domElement.innerHTML == attrs["placeholder"]) {
                    domElement.innerHTML = '';
                }
                domElement.style.color = '';
            });
            element.bind('blur', function () {
                if (domElement.innerHTML === '') {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });
            if (!ngModel)
                return; // do nothing if no ng-model
            element.bind("paste", function (e) {
                var that = this, ohtml = that.innerHTML;
                timeoutid && clearTimeout(timeoutid);
                var timeoutid = setTimeout(function () {
                    that.innerHTML = replacemy(that.innerHTML);
                    ngModel.$setViewValue(that.innerHTML);
                    timeoutid = null;
                }, 50);
            });
            // Specify how UI should be updated
            ngModel.$render = function () {
                element.html(ngModel.$viewValue || '');
            };
            // Listen for change events to enable binding
            WidgetModule.Helper.browser.msie ? element.bind("keyup paste", read) : element.bind("input", read);
            // element.on('blur keyup change', function() {
            //     scope.$apply(read);
            // });
            //read(); // initialize
            // Write data to the model
            function read() {
                var html = element.html();
                html = html.replace(/^<br>$/i, "");
                html = html.replace(/<br>/gi, "\n");
                // When we clear the content editable the browser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if (attrs["stripBr"] && html == '<br>') {
                    html = '';
                }
                ngModel.$setViewValue(html);
            }
        }
    };
});
conversationDirective.directive("ctrlEnterKeys", ["$timeout", function ($timeout) {
        return {
            restrict: "A",
            require: '?ngModel',
            scope: {
                fun: "&",
                ctrlenter: "=",
                content: "="
            },
            link: function (scope, element, attrs, ngModel) {
                scope.ctrlenter = scope.ctrlenter || false;
                element.bind("keypress", function (e) {
                    if (scope.ctrlenter) {
                        if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                            scope.fun();
                            scope.$parent.$apply();
                            e.preventDefault();
                        }
                    }
                    else {
                        if (e.ctrlKey === false && e.shiftKey === false && (e.keyCode === 13 || e.keyCode === 10)) {
                            scope.fun();
                            scope.$parent.$apply();
                            e.preventDefault();
                        }
                        else if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        }
                    }
                });
            }
        };
    }]);
conversationDirective.directive("textmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-text"><pre class="Message-entry" ng-bind-html="msg.content|trustHtml"><br></pre></div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("includinglinkmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-text">' +
                '<pre class="Message-entry" style="">' +
                '维护中 由于我们的服务商出现故障，融云官网及相关服务也受到影响，给各位用户带来的不便，还请谅解。  您可以通过 <a href="#">【官方微博】</a>了解</pre>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("imagemessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-img">' +
                '<span class="Message-entry" style="">' +
                '<p>发给您一张示意图</p>' +
                '<img src="./src/images/webBg.png" alt="">' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("voicemessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-audio">' +
                '<span class="Message-entry" style="">' +
                '<span class="audioBox clearfix animate"><i></i><i></i><i></i></span>' +
                '<div style="display: inline-block;"><span class="audioTimer">30”</span><span class="audioState"></span></div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("locationmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-map">' +
                '<span class="Message-entry" style="">' +
                '<div class="mapBox">' +
                '<img src="./src/images/webBg.png" alt="">' +
                '<span>朝阳区北苑路北</span>' +
                '</div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("richcontentmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-image-text">' +
                '<span class="Message-entry" style="">' +
                '<div class="image-textBox">' +
                '<h4>理性设计</h4>' +
                '<div class="cont clearfix">' +
                '<img src="./src/images/webBg.png" alt="">' +
                '<div>苹果公司设计师年薪高达 17.4 万美元，约合人民币 110 万，而苹果官网也被业界捧为大师之作，受到世界各国产' +
                '品经理和设计师的追捧。为什么苹果公司设计的网页如此受欢迎，有什么技巧在其中吗？</div>' +
                '</div>' +
                '</div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationServer = angular.module("RongWebIMWidget.conversationServer", ["RongWebIMWidget.conversationDirective"]);
conversationServer.factory("conversationServer", ["$q", function ($q) {
        var conversationServer = {};
        conversationServer.current = {
            targetId: "",
            targetType: 0,
            title: "",
            portraitUri: "",
            onLine: false
        };
        conversationServer.loginUser = {
            id: "",
            name: "",
            portraitUri: ""
        };
        conversationServer._cacheHistory = {};
        conversationServer._getHistoryMessages = function (targetType, targetId, number, reset) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getHistoryMessages(targetType, targetId, reset ? 0 : null, number, {
                onSuccess: function (data, has) {
                    var msglen = data.length;
                    while (msglen--) {
                        var msg = WidgetModule.Message.convert(data[msglen]);
                        unshiftHistoryMessages(targetId, targetType, msg);
                    }
                    defer.resolve({ data: data, has: has });
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        function adduserinfo() {
        }
        function unshiftHistoryMessages(id, type, item) {
            var arr = conversationServer._cacheHistory[type + "_" + id] = conversationServer._cacheHistory[type + "_" + id] || [];
            if (arr[0] && arr[0].sentTime && arr[0].panelType != WidgetModule.PanelType.Time && item.sentTime) {
                if (!WidgetModule.Helper.timeCompare(arr[0].sentTime, item.sentTime)) {
                    arr.unshift(new WidgetModule.TimePanl(arr[0].sentTime));
                }
            }
            arr.unshift(item);
        }
        conversationServer._addHistoryMessages = function (item) {
            var arr = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] || [];
            if (arr[arr.length - 1] && arr[arr.length - 1].panelType != WidgetModule.PanelType.Time && arr[arr.length - 1].sentTime && item.sentTime) {
                if (!WidgetModule.Helper.timeCompare(arr[arr.length - 1].sentTime, item.sentTime)) {
                    arr.push(new WidgetModule.TimePanl(item.sentTime));
                }
            }
            arr.push(item);
        };
        conversationServer.onConversationChangged = function () {
            //提供接口由conversation controller实现具体操作
        };
        conversationServer.onReceivedMessage = function () {
            //提供接口由coversation controller实现具体操作
        };
        return conversationServer;
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListCtr = angular.module("RongWebIMWidget.conversationListController", []);
conversationListCtr.controller("conversationListController", ["$scope", "conversationListServer",
    function ($scope, conversationListServer) {
        $scope.conversationListServer = conversationListServer;
        conversationListServer.refreshConversationList = function () {
            setTimeout(function () {
                $scope.$apply();
            });
        };
        $scope.$watch("conversationListServer.conversationList", function (newVal) {
            console.log(newVal);
        });
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListDir = angular.module("RongWebIMWidget.conversationListDirective", ["RongWebIMWidget.conversationListController"]);
conversationListDir.directive("rongConversationList", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/conversationList/conversationList.tpl.html",
            controller: "conversationListController"
        };
    }]);
conversationListDir.directive("conversationItem", ["conversationServer", "conversationListServer", function (conversationServer, conversationListServer) {
        return {
            restrict: "E",
            scope: { item: "=" },
            template: '<div class="chatList">' +
                '<div class="chat_item online ">' +
                '<div class="ext">' +
                '<p class="attr clearfix">' +
                '<span class="badge" ng-show="item.unreadMessageCount>0">{{item.unreadMessageCount>99?"99+":item.unreadMessageCount}}</span>' +
                '<i class="sprite no-remind" ng-click="remove()"></i>' +
                '</p>' +
                '</div>' +
                '<div class="photo">' +
                '<img class="img" src="images/webBg.png" alt="">' +
                '<i class="Presence Presence--stacked Presence--mainBox"></i>' +
                '</div>' +
                '<div class="info">' +
                '<h3 class="nickname">' +
                '<span class="nickname_text">{{item.title}}</span>' +
                '</h3>' +
                '</div>' +
                '</div>' +
                '</div>',
            link: function (scope, ele, attr) {
                ele.on("click", function () {
                    conversationServer.onConversationChangged(new WidgetModule.Conversation(scope.item.targetType, scope.item.targetId, scope.item.title));
                    RongIMLib.RongIMClient.getInstance().clearUnreadCount(scope.item.targetType, scope.item.targetId, {
                        onSuccess: function () {
                        },
                        onError: function () {
                        }
                    });
                    conversationListServer.updateConversations();
                });
                scope.remove = function () {
                    RongIMLib.RongIMClient.getInstance().removeConversation(scope.item.targetType, scope.item.targetId, {
                        onSuccess: function () {
                            if (conversationServer.current.targetType == scope.item.targetType && conversationServer.current.targetId == scope.item.targetId) {
                                conversationServer.onConversationChangged(new WidgetModule.Conversation());
                            }
                            conversationListServer.updateConversations();
                        },
                        onError: function (error) {
                            console.log(error);
                        }
                    });
                };
            }
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListSer = angular.module("RongWebIMWidget.conversationListServer", ["RongWebIMWidget.conversationListDirective", "RongWebIMWidget"]);
conversationListSer.factory("conversationListServer", ["$q", "providerdata",
    function ($q, providerdata) {
        var server = {};
        server.conversationList = [];
        server.updateConversations = function () {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getConversationList({
                onSuccess: function (data) {
                    server.conversationList.splice(0, server.conversationList.length);
                    for (var i = 0, len = data.length; i < len; i++) {
                        var con = WidgetModule.Conversation.onvert(data[i]);
                        if (providerdata.getUserInfo) {
                            switch (con.targetType) {
                                case RongIMLib.ConversationType.PRIVATE:
                                    (function (a, b) {
                                        providerdata.getUserInfo(a.targetId, {
                                            onSuccess: function (data) {
                                                a.title = data.name;
                                                a.portraitUri = data.portraitUri;
                                                b.conversationTitle = data.name;
                                                b.portraitUri = data.portraitUri;
                                            }
                                        });
                                    }(con, data[i]));
                                    break;
                            }
                        }
                        server.conversationList.push(con);
                    }
                    defer.resolve();
                    server.refreshConversationList();
                },
                onError: function (error) {
                    defer.reject(error);
                }
            }, null);
            return defer.promise;
        };
        server.refreshConversationList = function () {
            //在controller里刷新页面。
        };
        server.getConversation = function (type, id) {
            for (var i = 0, len = server.conversationList.length; i < len; i++) {
                if (server.conversationList[i].targetType == type && server.conversationList[i].targetId == id) {
                    return server.conversationList[i];
                }
            }
            return null;
        };
        server.addConversation = function (conversation) {
            server.conversationList.unshift(conversation);
        };
        return server;
    }]);
/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>
var widget = angular.module("RongWebIMWidget", ["RongWebIMWidget.conversationServer", "RongWebIMWidget.conversationListServer"]);
widget.config(function () {
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
}, false);
widget.run(["$http", function ($http) {
        console.log("run widget");
        // var e = document.getElementsByTagName("script");
        // var sdk = document.createElement("script");
        // // sdk.src = "http://cdn.ronghub.com/RongIMLib-2.0.3.beta.min.js";
        // sdk.src = "./RongIMLib.js"
        //
        // var emoji = document.createElement("script");
        // emoji.src = "./emoji-2.0.0.js";
        //
        // document.head.appendChild(sdk);
        //
        //
        // angular.element(document).ready(function() {
        //     document.head.appendChild(emoji);
        // });
        function loadScript(url, callback) {
            var eHead = document.getElementsByTagName("head")[0];
            var eScript = document.createElement("script");
            eScript.src = url;
            eHead.appendChild(eScript);
        }
        var scripts = {}, urlArgs = "", head = document.getElementsByTagName("head")[0];
        // function create(path, fn) {
        //     var el = document.createElement('script'), loaded
        //     el.onload = el.onerror = el["onreadystatechange"] = function() {
        //         if ((el["readyState"] && !(/^c|loade/.test(el["readyState"]))) || loaded) return;
        //         el.onload = el["onreadystatechange"] = null
        //         loaded = 1
        //         fn()
        //     }
        //     el.async = !!1;
        //     el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
        //     head.insertBefore(el, head.lastChild)
        // }
        // function loadScript(url, callback?) {
        //     var eHead = document.getElementsByTagName("head")[0];
        //     $http.get(url, {}).success(function(data: string) {
        //         var eScript = document.createElement("script");
        //         eScript.innerHTML = data;
        //         eHead.appendChild(eScript);
        //         if (callback && typeof callback == "function") {
        //             callback();
        //         }
        //     })
        // }
        // loadScript("http://jssdk.demo.qiniu.io/js/plupload/plupload.full.min.js", function() {
        // });
        $script.get("./RongIMLib.js", function () {
            $script("./emoji-2.0.0.js");
        });
        $script(["http://jssdk.demo.qiniu.io/js/plupload/plupload.full.min.js", "http://jssdk.demo.qiniu.io/js/qiniu.js"], "qiniu");
        // loadScript("./RongIMLib.js")
        // // loadScript("http://cdn.ronghub.com/RongIMLib-2.0.5.beta.min.js");
        // loadScript("./emoji-2.0.0.js");
    }]);
widget.factory("providerdata", [function () {
        return {};
    }]);
widget.factory("WebIMWidget", ["$q", "conversationServer", "conversationListServer", "providerdata",
    function ($q, conversationServer, conversationListServer, providerdata) {
        var WebIMWidget = {};
        var messageList = {};
        //TODO:是否要加限制可用css
        var availableStyleConfig = {
            height: true, width: true, top: true, left: true, right: true,
            bottom: true, margin: true, "margin-top": true,
            "margin-left": true, "margin-right": true, "margin-bottom": true
        };
        var defaultconfig = {
            style: {
                width: "450px",
                height: "470px"
            }
        };
        WebIMWidget.init = function (config) {
            var defaultStyle = defaultconfig.style;
            angular.extend(defaultconfig, config);
            angular.extend(defaultStyle, config.style);
            // if (config)
            //
            if (!RongIMLib || !RongIMLib.RongIMClient) {
                throw new Error("please refer to RongIMLib");
            }
            var elebox = document.getElementById("rong-widget-box");
            var eleconversation = document.getElementById("rong-conversation");
            var eleconversationlist = document.getElementById("rong-conversation-list");
            if (defaultconfig.displayConversationList) {
                if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.left) {
                    eleconversation.style["left"] = "197px";
                    eleconversation.style["right"] = "0px";
                    eleconversationlist.style["left"] = "0px";
                }
                else {
                    eleconversation.style["left"] = "0px";
                    eleconversation.style["right"] = "197px";
                    eleconversationlist.style["right"] = "0px";
                }
            }
            else {
                eleconversationlist.style["display"] = "none";
                eleconversation.style["left"] = "0px";
                eleconversation.style["right"] = "0px";
            }
            if (defaultStyle) {
                for (var s in defaultStyle) {
                    if (typeof defaultStyle[s] === "string" && availableStyleConfig[s]) {
                        elebox.style[s] = defaultStyle[s];
                    }
                }
                if (defaultStyle.center) {
                    elebox.style["top"] = "50%";
                    elebox.style["left"] = "50%";
                    elebox.style["margin-top"] = "-" + parseInt(defaultStyle.height) / 2 + "px";
                    elebox.style["margin-left"] = "-" + parseInt(defaultStyle.width) / 2 + "px";
                    elebox.style["position"] = "fixed";
                }
            }
            RongIMLib.RongIMClient.init(defaultconfig.appkey);
            RongIMLib.RongIMClient.connect(defaultconfig.token, {
                onSuccess: function (userId) {
                    console.log("connect success:" + userId);
                    if (defaultconfig.onSuccess && typeof defaultconfig.onSuccess == "function") {
                        defaultconfig.onSuccess(userId);
                    }
                    providerdata.getUserInfo(userId, {
                        onSuccess: function (data) {
                            conversationServer.loginUser.id = data.userId;
                            conversationServer.loginUser.name = data.name;
                            conversationServer.loginUser.portraitUri = data.portraitUri;
                        }
                    });
                    conversationListServer.updateConversations();
                },
                onTokenIncorrect: function () {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError(0);
                    }
                    console.log("token 无效");
                },
                onError: function (error) {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError(error);
                    }
                    console.log("connect error:" + error);
                }
            });
            RongIMLib.RongIMClient.setConnectionStatusListener({
                onChanged: function (status) {
                    switch (status) {
                        //链接成功
                        case RongIMLib.ConnectionStatus.CONNECTED:
                            console.log('链接成功');
                            break;
                        //正在链接
                        case RongIMLib.ConnectionStatus.CONNECTING:
                            console.log('正在链接');
                            break;
                        //其他设备登陆
                        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                            console.log('其他设备登录');
                            break;
                        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                            console.log("网络不可用");
                            break;
                    }
                    if (WebIMWidget.onConnectStatusChange) {
                        WebIMWidget.onConnectStatusChange(status);
                    }
                }
            });
            RongIMLib.RongIMClient.setOnReceiveMessageListener({
                onReceived: function (data) {
                    console.log(data);
                    var msg = WidgetModule.Message.convert(data);
                    switch (data.messageType) {
                        case WidgetModule.MessageType.ContactNotificationMessage:
                            //好友通知自行处理
                            break;
                        case WidgetModule.MessageType.TextMessage:
                        case WidgetModule.MessageType.VoiceMessage:
                        case WidgetModule.MessageType.LocationMessage:
                        case WidgetModule.MessageType.ImageMessage:
                        case WidgetModule.MessageType.RichContentMessage:
                            addMessageAndOperation(msg);
                            break;
                        case WidgetModule.MessageType.InformationNotificationMessage:
                            break;
                        case WidgetModule.MessageType.UnknownMessage:
                            //未知消息自行处理
                            break;
                        default:
                            //未捕获的消息类型
                            break;
                    }
                    if (WebIMWidget.onReceivedMessage) {
                        WebIMWidget.onReceivedMessage(msg);
                    }
                    conversationServer.onReceivedMessage(msg);
                    if (WebIMWidget.display && conversationServer.current && conversationServer.current.targetType == msg.conversationType && conversationServer.current.targetId == msg.targetId) {
                        RongIMLib.RongIMClient.getInstance().clearUnreadCount(conversationServer.current.targetType, conversationServer.current.targetId, {
                            onSuccess: function () {
                            },
                            onError: function () {
                            }
                        });
                    }
                    conversationListServer.updateConversations();
                }
            });
        };
        function addMessageAndOperation(msg) {
            var hislist = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] || [];
            if (hislist.length == 0) {
                hislist.push(new WidgetModule.GetHistoryPanel());
                hislist.push(new WidgetModule.TimePanl(msg.sentTime));
            }
            conversationServer._addHistoryMessages(msg);
        }
        WebIMWidget.setConversation = function (targetType, targetId, title) {
            conversationServer.onConversationChangged(new WidgetModule.Conversation(targetType, targetId, title));
        };
        WebIMWidget.display = false;
        WebIMWidget.hidden = function () {
            //由maincontroller实现
        };
        WebIMWidget.show = function () {
            //由maincontroller实现
        };
        WebIMWidget.setUserInfoProvider = function (fun) {
            providerdata.getUserInfo = fun;
        };
        WebIMWidget.setGroupInfoProvider = function (fun) {
            providerdata.getGroupInfo = fun;
        };
        WebIMWidget.EnumConversationListPosition = WidgetModule.EnumConversationListPosition;
        WebIMWidget.EnumConversationType = WidgetModule.EnumConversationType;
        return WebIMWidget;
    }]);
widget.directive("rongWidget", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/main.tpl.html",
            controller: "rongWidgetController"
        };
    }]);
widget.controller("rongWidgetController", ["$scope", "WebIMWidget", function ($scope, WebIMWidget) {
        $scope.main = WebIMWidget;
        WebIMWidget.show = function () {
            WebIMWidget.display = true;
            WebIMWidget.fullScreen = false;
            setTimeout(function () {
                $scope.$apply();
            });
        };
        WebIMWidget.hidden = function () {
            WebIMWidget.display = false;
            setTimeout(function () {
                $scope.$apply();
            });
        };
    }]);
widget.filter('trustHtml', function ($sce) {
    return function (str) {
        return $sce.trustAsHtml(str);
    };
});
widget.filter("historyTime", ["$filter", function ($filter) {
        return function (time) {
            var today = new Date();
            if (time.toDateString() === today.toDateString()) {
                return $filter("date")(time, "HH:mm");
            }
            else if (time.toDateString() === new Date(today.setTime(today.getTime() - 1)).toDateString()) {
                return "昨天" + $filter("date")(time, "HH:mm");
            }
            else {
                return $filter("date")(time, "yyyy-MM-dd HH:mm");
            }
        };
    }]);
/// <reference path="../../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WidgetModule;
(function (WidgetModule) {
    (function (EnumConversationListPosition) {
        EnumConversationListPosition[EnumConversationListPosition["left"] = 0] = "left";
        EnumConversationListPosition[EnumConversationListPosition["right"] = 1] = "right";
    })(WidgetModule.EnumConversationListPosition || (WidgetModule.EnumConversationListPosition = {}));
    var EnumConversationListPosition = WidgetModule.EnumConversationListPosition;
    (function (EnumConversationType) {
        EnumConversationType[EnumConversationType["PRIVATE"] = 1] = "PRIVATE";
        EnumConversationType[EnumConversationType["DISCUSSION"] = 2] = "DISCUSSION";
        EnumConversationType[EnumConversationType["GROUP"] = 3] = "GROUP";
        EnumConversationType[EnumConversationType["CHATROOM"] = 4] = "CHATROOM";
        EnumConversationType[EnumConversationType["CUSTOMER_SERVICE"] = 5] = "CUSTOMER_SERVICE";
        EnumConversationType[EnumConversationType["SYSTEM"] = 6] = "SYSTEM";
        EnumConversationType[EnumConversationType["APP_PUBLIC_SERVICE"] = 7] = "APP_PUBLIC_SERVICE";
        EnumConversationType[EnumConversationType["PUBLIC_SERVICE"] = 8] = "PUBLIC_SERVICE";
    })(WidgetModule.EnumConversationType || (WidgetModule.EnumConversationType = {}));
    var EnumConversationType = WidgetModule.EnumConversationType;
    (function (MessageDirection) {
        MessageDirection[MessageDirection["SEND"] = 1] = "SEND";
        MessageDirection[MessageDirection["RECEIVE"] = 2] = "RECEIVE";
    })(WidgetModule.MessageDirection || (WidgetModule.MessageDirection = {}));
    var MessageDirection = WidgetModule.MessageDirection;
    (function (ReceivedStatus) {
        ReceivedStatus[ReceivedStatus["READ"] = 1] = "READ";
        ReceivedStatus[ReceivedStatus["LISTENED"] = 2] = "LISTENED";
        ReceivedStatus[ReceivedStatus["DOWNLOADED"] = 4] = "DOWNLOADED";
    })(WidgetModule.ReceivedStatus || (WidgetModule.ReceivedStatus = {}));
    var ReceivedStatus = WidgetModule.ReceivedStatus;
    (function (SentStatus) {
        /**
         * 发送中。
         */
        SentStatus[SentStatus["SENDING"] = 10] = "SENDING";
        /**
         * 发送失败。
         */
        SentStatus[SentStatus["FAILED"] = 20] = "FAILED";
        /**
         * 已发送。
         */
        SentStatus[SentStatus["SENT"] = 30] = "SENT";
        /**
         * 对方已接收。
         */
        SentStatus[SentStatus["RECEIVED"] = 40] = "RECEIVED";
        /**
         * 对方已读。
         */
        SentStatus[SentStatus["READ"] = 50] = "READ";
        /**
         * 对方已销毁。
         */
        SentStatus[SentStatus["DESTROYED"] = 60] = "DESTROYED";
    })(WidgetModule.SentStatus || (WidgetModule.SentStatus = {}));
    var SentStatus = WidgetModule.SentStatus;
    var AnimationType;
    (function (AnimationType) {
        AnimationType[AnimationType["left"] = 1] = "left";
        AnimationType[AnimationType["right"] = 2] = "right";
        AnimationType[AnimationType["top"] = 3] = "top";
        AnimationType[AnimationType["bottom"] = 4] = "bottom";
    })(AnimationType || (AnimationType = {}));
    WidgetModule.MessageType = {
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
    };
    (function (PanelType) {
        PanelType[PanelType["Message"] = 1] = "Message";
        PanelType[PanelType["InformationNotification"] = 2] = "InformationNotification";
        PanelType[PanelType["System"] = 103] = "System";
        PanelType[PanelType["Time"] = 104] = "Time";
        PanelType[PanelType["getHistory"] = 105] = "getHistory";
        PanelType[PanelType["getMore"] = 106] = "getMore";
        PanelType[PanelType["Other"] = 0] = "Other";
    })(WidgetModule.PanelType || (WidgetModule.PanelType = {}));
    var PanelType = WidgetModule.PanelType;
    var ChatPanel = (function () {
        function ChatPanel(type) {
            this.panelType = type;
        }
        return ChatPanel;
    })();
    WidgetModule.ChatPanel = ChatPanel;
    var TimePanl = (function (_super) {
        __extends(TimePanl, _super);
        function TimePanl(date) {
            _super.call(this, PanelType.Time);
            this.sentTime = date;
        }
        return TimePanl;
    })(ChatPanel);
    WidgetModule.TimePanl = TimePanl;
    var GetHistoryPanel = (function (_super) {
        __extends(GetHistoryPanel, _super);
        function GetHistoryPanel() {
            _super.call(this, PanelType.getHistory);
        }
        return GetHistoryPanel;
    })(ChatPanel);
    WidgetModule.GetHistoryPanel = GetHistoryPanel;
    var GetMoreMessagePanel = (function (_super) {
        __extends(GetMoreMessagePanel, _super);
        function GetMoreMessagePanel() {
            _super.call(this, PanelType.getMore);
        }
        return GetMoreMessagePanel;
    })(ChatPanel);
    WidgetModule.GetMoreMessagePanel = GetMoreMessagePanel;
    var TimePanel = (function (_super) {
        __extends(TimePanel, _super);
        function TimePanel(time) {
            _super.call(this, PanelType.Time);
            this.sentTime = time;
        }
        return TimePanel;
    })(ChatPanel);
    WidgetModule.TimePanel = TimePanel;
    var Message = (function (_super) {
        __extends(Message, _super);
        function Message(content, conversationType, extra, objectName, messageDirection, messageId, receivedStatus, receivedTime, senderUserId, sentStatus, sentTime, targetId, messageType) {
            _super.call(this, PanelType.Message);
        }
        Message.convert = function (SDKmsg) {
            var msg = new Message();
            msg.conversationType = SDKmsg.conversationType;
            msg.extra = SDKmsg.extra;
            msg.objectName = SDKmsg.objectName;
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
                case WidgetModule.MessageType.TextMessage:
                    var texmsg = new TextMessage();
                    var content = SDKmsg.content.content;
                    if (RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.retrievalEmoji) {
                        //var a = document.createElement("span");
                        // content = RongIMLib.Expression.retrievalEmoji(content, function(img: any) {
                        //     a.appendChild(img.img);
                        //     var str = '<span class="RongIMexpression_' + img.englishName + '" title="' + img.chineseName + '">' + a.innerHTML + '</span>';
                        //     a.innerHTML = "";
                        //     return str;
                        // });
                        content = RongIMLib.RongIMEmoji.retrievalEmoji(content);
                    }
                    texmsg.content = content;
                    msg.content = texmsg;
                    break;
                case WidgetModule.MessageType.ImageMessage:
                    var image = new ImageMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    image.content = content;
                    image.imageUri = SDKmsg.content.imageUri;
                    msg.content = image;
                    break;
                case WidgetModule.MessageType.VoiceMessage:
                    var voice = new VoiceMessage();
                    voice.content = SDKmsg.content.content;
                    voice.duration = SDKmsg.content.duration;
                    msg.content = voice;
                    break;
                case WidgetModule.MessageType.RichContentMessage:
                    var rich = new RichContentMessage();
                    rich.content = SDKmsg.content.content;
                    rich.title = SDKmsg.content.title;
                    rich.imageUri = SDKmsg.content.imageUri;
                    msg.content = rich;
                    break;
                case WidgetModule.MessageType.LocationMessage:
                    var location = new LocationMessage();
                    location.content = SDKmsg.content.content;
                    location.latiude = SDKmsg.content.latiude;
                    location.longitude = SDKmsg.content.longitude;
                    location.poi = SDKmsg.content.poi;
                    msg.content = location;
                    break;
                case WidgetModule.MessageType.InformationNotificationMessage:
                    var info = new InformationNotificationMessage();
                    info.content = SDKmsg.content.content;
                    msg.content = info;
                    break;
                case WidgetModule.MessageType.DiscussionNotificationMessage:
                    var discussion = new DiscussionNotificationMessage();
                    discussion.extension = SDKmsg.content.extension;
                    discussion.operation = SDKmsg.content.operation;
                    discussion.type = SDKmsg.content.type;
                    discussion.isHasReceived = SDKmsg.content.isHasReceived;
                    msg.content = discussion;
                default:
                    console.log("未处理消息类型:" + SDKmsg.messageType);
                    break;
            }
            if (msg.content) {
                msg.content.userInfo = SDKmsg.content.userInfo;
            }
            return msg;
        };
        return Message;
    })(ChatPanel);
    WidgetModule.Message = Message;
    var UserInfo = (function () {
        function UserInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return UserInfo;
    })();
    WidgetModule.UserInfo = UserInfo;
    var GroupInfo = (function () {
        function GroupInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return GroupInfo;
    })();
    WidgetModule.GroupInfo = GroupInfo;
    var TextMessage = (function () {
        function TextMessage(msg) {
            msg = msg || {};
            this.content = msg.content;
            this.userInfo = msg.userInfo;
        }
        return TextMessage;
    })();
    WidgetModule.TextMessage = TextMessage;
    var InformationNotificationMessage = (function () {
        function InformationNotificationMessage() {
        }
        return InformationNotificationMessage;
    })();
    WidgetModule.InformationNotificationMessage = InformationNotificationMessage;
    var ImageMessage = (function () {
        function ImageMessage() {
        }
        return ImageMessage;
    })();
    WidgetModule.ImageMessage = ImageMessage;
    var VoiceMessage = (function () {
        function VoiceMessage() {
        }
        return VoiceMessage;
    })();
    WidgetModule.VoiceMessage = VoiceMessage;
    var LocationMessage = (function () {
        function LocationMessage() {
        }
        return LocationMessage;
    })();
    WidgetModule.LocationMessage = LocationMessage;
    var RichContentMessage = (function () {
        function RichContentMessage() {
        }
        return RichContentMessage;
    })();
    WidgetModule.RichContentMessage = RichContentMessage;
    var DiscussionNotificationMessage = (function () {
        function DiscussionNotificationMessage() {
        }
        return DiscussionNotificationMessage;
    })();
    WidgetModule.DiscussionNotificationMessage = DiscussionNotificationMessage;
    var Conversation = (function () {
        function Conversation(targetType, targetId, title) {
            this.targetType = targetType;
            this.targetId = targetId;
            this.title = title;
        }
        Conversation.onvert = function (item) {
            var conver = new Conversation();
            conver.targetId = item.targetId;
            conver.targetType = item.conversationType;
            conver.title = item.conversationTitle;
            conver.portraitUri = item.senderPortraitUri;
            conver.unreadMessageCount = item.unreadMessageCount;
            return conver;
        };
        return Conversation;
    })();
    WidgetModule.Conversation = Conversation;
    var userAgent = window.navigator.userAgent;
    var Helper = (function () {
        function Helper() {
        }
        Helper.timeCompare = function (first, second) {
            var pre = first.toString();
            var cur = second.toString();
            return pre.substring(0, pre.lastIndexOf(":")) == cur.substring(0, cur.lastIndexOf(":"));
        };
        Helper.checkType = function (obj) {
            var type = Object.prototype.toString.call(obj);
            return type.substring(8, type.length - 1).toLowerCase();
        };
        Helper.browser = {
            version: (userAgent.match(/.+(?:rv|it|ra|chrome|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
            safari: /webkit/.test(userAgent),
            opera: /opera|opr/.test(userAgent),
            msie: /msie|trident/.test(userAgent) && !/opera/.test(userAgent),
            chrome: /chrome/.test(userAgent),
            mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit|like gecko)/.test(userAgent)
        };
        Helper.getFocus = function (obj) {
            obj.focus();
            if (obj.createTextRange) {
                var rtextRange = obj.createTextRange();
                rtextRange.moveStart('character', obj.value.length);
                rtextRange.collapse(true);
                rtextRange.select();
            }
            else if (obj.selectionStart) {
                obj.selectionStart = obj.value.length;
            }
            else if (window.getSelection && obj.lastChild) {
                var sel = window.getSelection();
                var tempRange = document.createRange();
                if (WidgetModule.Helper.browser.msie) {
                    tempRange.setStart(obj.lastChild, obj.lastChild.length);
                }
                else {
                    tempRange.setStart(obj.firstChild, obj.firstChild.length);
                }
                sel.removeAllRanges();
                sel.addRange(tempRange);
            }
        };
        return Helper;
    })();
    WidgetModule.Helper = Helper;
})(WidgetModule || (WidgetModule = {}));

angular.module('RongWebIMWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/ts/conversation/template.tpl.html',
    "<div id=rong-conversation class=\"kefuChatBox both am-fade-and-slide-top\" ng-class=\"{'fullScreen':resoures.fullScreen}\"><div class=kefuChat><div id=header class=\"header blueBg online\"><div class=\"infoBar pull-left\"><div class=infoBarTit><span class=\"Presence Presence--stacked\"></span> <span class=kefuName ng-bind=currentConversation.title></span></div></div><div class=\"toolBar headBtn pull-right\"><a href=javascript:; class=\"kefuChatBoxMin sprite\" ng-show=resoures.fullScreen ng-click=\"resoures.fullScreen=false;\" title=最小化></a> <a href=javascript:; class=\"kefuChatBoxMax sprite\" ng-show=!resoures.fullScreen ng-click=\"resoures.fullScreen=true;\" title=最大化></a> <a href=javascript:; class=\"kefuChatBoxClose sprite\" ng-click=close() title=结束对话></a></div></div><div class=\"outlineBox hide\"><div class=sprite></div><span>网络连接断开</span></div><div id=Messages><div class=emptyBox>暂时没有新消息</div><div class=MessagesInner><div ng-repeat=\"item in messageList\" ng-switch=item.panelType><div class=Messages-date ng-switch-when=104><b>{{item.sentTime|historyTime}}</b></div><div class=Messages-date ng-switch-when=105><b ng-click=getHistory()>获取历史消息</b></div><div class=Messages-date ng-switch-when=106><b ng-click=getMoreMessage()>获取更多消息</b></div><div class=sys-tips ng-switch-when=2><span>会话已结束</span></div><div class=Message ng-switch-when=1><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" ng-src=\"{{item.content.userInfo.portraitUri||'./images/webBg.png'}}\" alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">{{item.content.userInfo.name}}</a></div></div></div><div class=Message-body ng-switch=item.messageType><textmessage ng-switch-when=TextMessage msg=item.content></textmessage><imagemessage ng-switch-when=ImageMessage msg=item.content></imagemessage><voicemessage ng-switch-when=VoiceMessage msg=item.content></voicemessage><locationmessage ng-switch-when=LocationMessage msg=item.content></locationmessage><richcontentmessage ng-switch-when=RichContentMessage msg=item.content></richcontentmessage></div></div></div></div></div><div id=footer class=footer style=\"display: block\"><div class=footer-con><div class=text-layout><div id=funcPanel class=\"funcPanel robotMode\"><div class=mode1><div class=MessageForm-tool id=expressionWrap><i class=\"sprite iconfont-smile\" ng-click=\"showemoji=!showemoji\"></i><div class=expressionWrap ng-show=showemoji><i class=arrow></i><emoji ng-repeat=\"item in emojiList\" item=item content=msgvalue></emoji></div></div><div class=MessageForm-tool><i class=\"sprite iconfont-upload\" id=upload-file style=\"position: relative; z-index: 1\"></i><div class=\"moxie-shim moxie-shim-html5\" style=\"position: absolute; top: 5px; left: 0px; width: 20px; height: 15px; overflow: hidden; z-index: 0\"><input type=file style=\"font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%\" multiple accept=\"\"></div></div></div><div class=\"mode2 hide\"><a href=javascript:; id=chatSwitch class=chatSwitch>转人工服务</a></div></div><pre id=inputMsg class=\"text grey\" contenteditable contenteditable-dire ng-focus=\"showemoji=fase\" style=\"background-color: rgba(0,0,0,0);color:black\" ctrl-enter-keys fun=send() ctrlenter=false placeholder=请输入文字... ondrop=\"return false\" ng-model=currentConversation.messageContent></pre></div><div class=powBox><button type=button class=\"btn send-btn\" id=sendBtn ng-click=send()>发送</button></div></div></div></div></div>"
  );


  $templateCache.put('./src/ts/conversationList/conversationList.tpl.html',
    "<div id=rong-conversation-list class=\"kefuListBox both\"><div class=kefuList><div class=\"header blueBg\"><div class=\"toolBar headBtn\"><div class=\"sprite people\"></div><span class=recent>最近联系人</span></div></div><div class=content><div class=\"netStatus hide\"><div class=sprite></div><span>网络连接成功</span></div><div><conversation-item ng-repeat=\"item in conversationListServer.conversationList\" item=item></conversation-item></div></div></div></div>"
  );


  $templateCache.put('./src/ts/main.tpl.html',
    "<div id=rong-widget-box ng-show=main.display><rong-conversation></rong-conversation><rong-conversation-list></rong-conversation-list></div>"
  );

}]);

/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
(function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()})("$script",function(){function p(e,t){for(var n=0,i=e.length;n<i;++n)if(!t(e[n]))return r;return 1}function d(e,t){p(e,function(e){return!t(e)})}function v(e,t,n){function g(e){return e.call?e():u[e]}function y(){if(!--h){u[o]=1,s&&s();for(var e in f)p(e.split("|"),g)&&!d(f[e],g)&&(f[e]=[])}}e=e[i]?e:[e];var r=t&&t.call,s=r?t:n,o=r?e.join(""):t,h=e.length;return setTimeout(function(){d(e,function t(e,n){if(e===null)return y();!n&&!/^https?:\/\//.test(e)&&c&&(e=e.indexOf(".js")===-1?c+e+".js":c+e);if(l[e])return o&&(a[o]=1),l[e]==2?y():setTimeout(function(){t(e,!0)},0);l[e]=1,o&&(a[o]=1),m(e,y)})},0),v}function m(n,r){var i=e.createElement("script"),u;i.onload=i.onerror=i[o]=function(){if(i[s]&&!/^c|loade/.test(i[s])||u)return;i.onload=i[o]=null,u=1,l[n]=2,r()},i.async=1,i.src=h?n+(n.indexOf("?")===-1?"?":"&")+h:n,t.insertBefore(i,t.lastChild)}var e=document,t=e.getElementsByTagName("head")[0],n="string",r=!1,i="push",s="readyState",o="onreadystatechange",u={},a={},f={},l={},c,h;return v.get=m,v.order=function(e,t,n){(function r(i){i=e.shift(),e.length?v(i,r):v(i,t,n)})()},v.path=function(e){c=e},v.urlArgs=function(e){h=e},v.ready=function(e,t,n){e=e[i]?e:[e];var r=[];return!d(e,function(e){u[e]||r[i](e)})&&p(e,function(e){return u[e]})?t():!function(e){f[e]=f[e]||[],f[e][i](t),n&&n(r)}(e.join("|")),v},v.done=function(e){v([null],e)},v})
