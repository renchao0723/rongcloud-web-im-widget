/// <reference path="../../../typings/tsd.d.ts"/>

var conversationListCtr = angular.module("RongWebIMWidget.conversationListController", []);

conversationListCtr.controller("conversationListController", ["$scope", "conversationListServer",
    function($scope: any, conversationListServer: conversationListServer) {
        $scope.conversationListServer = conversationListServer;
        conversationListServer.refreshConversationList = function() {
            setTimeout(function() {
                $scope.$apply();
            });
        }

        $scope.$watch("conversationListServer.conversationList", function(newVal) {
            console.log(newVal);
        })
    }])
