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
      appkey: "bmdehs6pdw0ss",
      token: "0MR6diLid4RCH4IOrf7nDbgtZuR3CES6Xp+I56nDnYRbr6K9RiBhz1zki27LadwQibmmbEbLg9yvTecpF41gzw==",
      style:{
      },
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
