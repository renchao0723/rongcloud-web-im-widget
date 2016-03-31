var demo = angular.module("demo", ["RongCloudkefu"]);

demo.controller("main", ["$scope","RongKefu", function($scope,RongKefu) {
  $scope.title="asdf";
  RongKefu.init({
        appkey:"3argexb6r934e",//selfe
        token:"I8zRoTYOdtHug+ox4s7HapUnU/cREmEFuMhOJuGv5bP+dl6CkOlF+WuQPPbm30kCrX6ygPNSBvlJzwuiv72NPw==",//selfe kefu
        kefuId:"KEFU145914839332836",//selfe
        // appkey:"8brlm7ufrnfa3",
        // token:"qmi2DP0GTLOTdnwXc9ASAkJGE6CUea+VYHqv2I8LN/80VvDnGE9m0gFhVwV4pwWlcKaZvPUUF0VPIlOk5iRxrw51WQTHnwL1lHRP4bxQ3dE=",
        // kefuId:"KEFU145932387671898",
        position:RongKefu.KefuPostion.left,
        onSuccess:function(e){
          console.log(e);
        }
  })
    $scope.show = function() {
      RongKefu.show();
    }

    $scope.hidden = function() {
      RongKefu.hidden();
    }
}]);
