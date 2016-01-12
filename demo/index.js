var demo = angular.module("demo", ["rongWebimWidget"]);

demo.controller("main", ["$scope", "WebimWidget", function($scope,
  WebimWidget) {

  $scope.show = function() {
    WebimWidget.show();
  }

  $scope.hidden = function() {
    WebimWidget.hidden();
  }

  $scope.server = WebimWidget;

  $scope.setconversation=function(){
    WebimWidget.setConversation("4", "cc", "张三");
  }

  angular.element(document).ready(function() {

    WebimWidget.init({
      appkey: "bmdehs6pdw0ss",
      token: "b0oOjj+U9fb3LYky1D2K4bgtZuR3CES6Xp+I56nDnYRbr6K9RiBhz+gi5pgBW9mb/7AB2yLRdGivTecpF41gzw==",
      css:{
        right:"0px",
        bottom:"0px",
        width:"600px"
      }
    });

    //设置会话
    //WebimWidget.setConversation("4", "cc", "呵呵");


  });

}]);
