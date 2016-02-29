/// <reference path="../../../typings/tsd.d.ts"/>

var conversationListCtr = angular.module("RongWebIMWidget.conversationListController", []);

conversationListCtr.controller("conversationListController", ["$scope", "conversationListServer", "WebIMWidget",
    function($scope: any, conversationListServer: conversationListServer, WebIMWidget: WebIMWidget) {
        $scope.conversationListServer = conversationListServer;
        $scope.WebIMWidget = WebIMWidget;
        conversationListServer.refreshConversationList = function() {
            setTimeout(function() {
                $scope.$apply();
            });
        }

        $scope.minbtn = function() {
            WebIMWidget.display = false;
        }

        $scope.connected = true;

        conversationListServer._onConnectStatusChange = function(status: any) {
            if (status == RongIMLib.ConnectionStatus.CONNECTED) {
                $scope.connected = true;
            } else {
                $scope.connected = false;
            }
            setTimeout(function() {
                $scope.$apply();
            })
        }
    }])
