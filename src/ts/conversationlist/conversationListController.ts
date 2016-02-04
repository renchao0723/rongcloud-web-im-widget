/// <reference path="../../../typings/tsd.d.ts"/>

var conversationListCtr = angular.module("RongWebIMWidget.conversationListController", []);

conversationListCtr.controller("conversationListController", ["$scope", "conversationListServer", "WebIMWidget",
    function($scope: any, conversationListServer: conversationListServer, WebIMWidget: WebIMWidget) {
        $scope.conversationListServer = conversationListServer;
        conversationListServer.refreshConversationList = function() {
            setTimeout(function() {
                $scope.$apply();
            });
        }

        $scope.$watch("conversationListServer.conversationList", function(newVal) {
            console.log(newVal);
        })

        $scope.minbtn = function() {
            WebIMWidget.display = false;

        }
    }])
