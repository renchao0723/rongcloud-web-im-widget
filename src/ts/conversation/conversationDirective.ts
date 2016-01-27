/// <reference path="../../../typings/tsd.d.ts"/>

var conversationDirective = angular.module("RongWebIMWidget.conversationDirective", ["RongWebIMWidget.conversationController"]);

conversationDirective.directive("rongConversation", [function() {

    return {
        restrict: "E",
        templateUrl: "./src/ts/conversation/template.tpl.html",
        controller: "conversationController"
    }
}]);

conversationDirective.directive("emoji", [function() {
    return {
        restrict: "E",
        scope: {
            item: "=",
            content: "="
        },
        template: "",
        link: function(scope: any, ele: angular.IRootElementService, attr: angular.IAttributes) {

            ele.append(scope.item);
            ele.on("click", function() {
                scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent || "";
                scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent.replace(/\n$/, "");
                scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent + scope.item.children[0].getAttribute("name");
                scope.$parent.$apply();
                var obj = document.getElementById("inputMsg");
                WidgetModule.Helper.getFocus(obj);
            })
        }
    }
}]);

conversationDirective.directive('contenteditableDire', function() {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function(scope: any, element: angular.IRootElementService, attrs: angular.IAttributes, ngModel: angular.INgModelController) {
            function replacemy(e: string) {
                return e.replace(new RegExp("<[\\s\\S.]*?>", "ig"), "");
            }
            var domElement = <any>element[0];

            scope.$watch(function() {
                return ngModel.$modelValue;
            }, function(newVal: string) {
                if (document.activeElement === domElement) {
                    return;
                }
                if (newVal === '' || newVal === attrs["placeholder"]) {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });
            element.bind('focus', function() {
                if (domElement.innerHTML == attrs["placeholder"]) {
                    domElement.innerHTML = '';
                }
                domElement.style.color = '';
            });
            element.bind('blur', function() {
                if (domElement.innerHTML === '') {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });


            if (!ngModel) return; // do nothing if no ng-model

            element.bind("paste", function(e: any) {
                var that = this, ohtml = that.innerHTML;
                timeoutid && clearTimeout(timeoutid);
                var timeoutid = setTimeout(function() {
                    that.innerHTML = replacemy(that.innerHTML);
                    ngModel.$setViewValue(that.innerHTML);
                    timeoutid = null;
                }, 50);
            });


            // Specify how UI should be updated
            ngModel.$render = function() {
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

conversationDirective.directive("ctrlEnterKeys", ["$timeout", function($timeout: angular.ITimeoutService) {
    return {
        restrict: "A",
        require: '?ngModel',
        scope: {
            fun: "&",
            ctrlenter: "=",
            content: "="
        },
        link: function(scope: any, element: angular.IRootElementService, attrs: angular.IAttributes, ngModel: angular.INgModelController) {
            scope.ctrlenter = scope.ctrlenter || false;
            element.bind("keypress", function(e: any) {
                if (scope.ctrlenter) {
                    if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        scope.fun();
                        scope.$parent.$apply();
                        e.preventDefault();
                    }
                } else {
                    if (e.ctrlKey === false && e.shiftKey === false && (e.keyCode === 13 || e.keyCode === 10)) {
                        scope.fun();
                        scope.$parent.$apply();
                        e.preventDefault();
                    } else if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        //ctrl+enter 换行
                    }
                }
            })
        }
    }
}]);

conversationDirective.directive("textmessage", [function() {
    return {
        restrict: "E",
        scope: { msg: "=" },
        template: '<div class="">' +
        '<div class="Message-text"><pre class="Message-entry" ng-bind-html="msg.content|trustHtml"><br></pre></div>' +
        '</div>'
    }
}]);

conversationDirective.directive("includinglinkmessage", [function() {
    return {
        restrict: "E",
        scope: { msg: "=" },
        template: '<div class="">' +
        '<div class="Message-text">' +
        '<pre class="Message-entry" style="">' +
        '维护中 由于我们的服务商出现故障，融云官网及相关服务也受到影响，给各位用户带来的不便，还请谅解。  您可以通过 <a href="#">【官方微博】</a>了解</pre>' +
        '</div>' +
        '</div>'
    }
}]);

conversationDirective.directive("imagemessage", [function() {
    return {
        restrict: "E",
        scope: { msg: "=" },
        template: '<div class="">' +
        '<div class="Message-img">' +
        '<span class="Message-entry" style="">' +
        // '<p>发给您一张示意图</p>' +
        '<img ng-src="{{msg.content}}" alt="">' +
        '</span>' +
        '</div>' +
        '</div>'
    }
}]);

conversationDirective.directive("voicemessage", [function() {
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
        '</div>',
        link: function(scope, ele, attr) {

        }
    }
}]);

conversationDirective.directive("locationmessage", [function() {
    return {
        restrict: "E",
        scope: { msg: "=" },
        template: '<div class="">' +
        '<div class="Message-map">' +
        '<span class="Message-entry" style="">' +
        '<div class="mapBox">' +
        '<img ng-src="{{msg.content}}" alt="">' +
        '<span>{{msg.poi}}</span>' +
        '</div>' +
        '</span>' +
        '</div>' +
        '</div>'
    }
}]);

conversationDirective.directive("richcontentmessage", [function() {
    return {
        restrict: "E",
        scope: { msg: "=" },
        template: '<div class="">' +
        '<div class="Message-image-text">' +
        '<span class="Message-entry" style="">' +
        '<div class="image-textBox">' +
        '<h4>{{msg.title}}</h4>' +
        '<div class="cont clearfix">' +
        '<img ng-src="{{msg.imageUri}}" alt="">' +
        '<div>{{msg.content}}</div>' +
        '</div>' +
        '</div>' +
        '</span>' +
        '</div>' +
        '</div>'
    }
}]);
