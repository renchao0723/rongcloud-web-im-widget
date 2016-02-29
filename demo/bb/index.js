var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope", "WebIMWidget", function($scope,
  WebIMWidget) {

  $scope.show = function() {
    WebIMWidget.show();
  }

  $scope.hidden = function() {
    WebIMWidget.hidden();
  }

  $scope.server = WebIMWidget;
  $scope.targetType=1;

  $scope.setconversation=function(){
    WebIMWidget.setConversation(Number($scope.targetType), $scope.targetId, "自定义:"+$scope.targetId);
  }

  angular.element(document).ready(function() {

    WebIMWidget.init({
      appkey: "z3v5yqkbv8v30",
      token: "/jmqZI8QkQjkIf3pW6fMt7I6ZiT8q7s0UEaMPWY0lMyxu55c8bJO3/VqHhVG+5rbgoBbb9WE1cARaIf9YN+emg==",
      style:{
        width:600,
        left:100,
        top:100
      },
      displayConversationList:true,
      displayMinButton:true,
      conversationListPosition:WebIMWidget.EnumConversationListPosition.left,
      onError:function(error){
        console.log("error:"+error);
      }
    });

    WebIMWidget.show();

    WebIMWidget.setUserInfoProvider(function(targetId,obj){
        obj.onSuccess({name:"陌："+targetId});
    });

    // WebIMWidget.onCloseBefore=function(obj){
    //   console.log("关闭前");
    //   setTimeout(function(){
    //     obj.close();
    //   },1000)
    // }

    WebIMWidget.onClose=function(){
      console.log("已关闭");
    }

    WebIMWidget.show();


    //设置会话
    //WebimWidget.setConversation("4", "cc", "呵呵");


  });

}]);
