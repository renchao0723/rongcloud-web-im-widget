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
    WebIMWidget.setConversation(Number($scope.targetType), $scope.targetId, "自定义");
  }

  angular.element(document).ready(function() {

    WebIMWidget.init({
      appkey: "3argexb6r934e",
      token: "BRrW9ZoxW5pkra92UQK+e5UnU/cREmEFuMhOJuGv5bP+dl6CkOlF+VrK3U6TbotAVT4eqyf00Itg2Mh5WIasRw==",
      style:{
        right:"0px",
        bottom:"0px",
        left:"0px",
        width:"600px",
      },
      displayConversationList:true,
      conversationListPosition:WebIMWidget.EnumConversationListPosition.right,
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


    //设置会话
    //WebimWidget.setConversation("4", "cc", "呵呵");


  });

}]);
