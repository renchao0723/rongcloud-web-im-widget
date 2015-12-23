var demo = angular.module("demo", ["rongWebimWidget"]);

demo.controller("main", ["$scope", "WebimWidget", function($scope,
  WebimWidget) {


  angular.element(document).ready(function() {

    WebimWidget.init({
      appkey: "3argexb6rv4ke",
      token: "ugTjYqCDS7xBzGde5bTSSp1YDkt/uRq44MP/ipJKA9cfVLy6nm4MoxxKL/2x4Sar6IlYgy39BOk=",
      onSuccess: function() {
        WebimWidget.setConversation("4", "cc", "呵呵");
      }
    });

  });

  console.log("controller");
}]);
