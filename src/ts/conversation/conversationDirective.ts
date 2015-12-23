/// <reference path="../../../typings/tsd.d.ts"/>

var conversationDirective = angular.module("rongWebimWidget.conversationDirective", ["rongWebimWidget.conversationController"]);

conversationDirective.directive("rongConversation", [function() {

    return {
        restrict: "E",
        templateUrl: "./src/ts/conversation/template.tpl.html",
        controller: "conversationController"
    }
}]);
