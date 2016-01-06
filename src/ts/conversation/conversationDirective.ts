/// <reference path="../../../typings/tsd.d.ts"/>

var conversationDirective = angular.module("rongWebimWidget.conversationDirective", ["rongWebimWidget.conversationController"]);

conversationDirective.directive("rongConversation", [function() {

    return {
        restrict: "E",
        templateUrl: "./src/ts/conversation/template.tpl.html",
        controller: "conversationController"
    }
}]);

conversationDirective.directive("textmessage", [function() {
    return {
        restrict: "E",
        scope: { msg: "=" },
        template: '<div class="">' +
        '<div class="Message-text"><pre class="Message-entry">{{msg.content}}<br></pre></div>' +
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
        '<p>发给您一张示意图</p>' +
        '<img src="./src/images/webBg.png" alt="">' +
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
        '</div>'
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
        '<img src="./src/images/webBg.png" alt="">' +
        '<span>朝阳区北苑路北</span>' +
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
    }
}]);
