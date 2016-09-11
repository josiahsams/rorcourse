(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter) {

    $scope.checkLunch = function () {
      var input = $scope.menu;
      var menucount = 0;

      if (input) {
        var inputArr = input.split(",");

        for(var i = 0; i < inputArr.length; i++ ) {
          var item = inputArr[i];
          if (item.trim() !== "") {
            menucount = menucount + 1;
          }
        };
      }
      if (menucount == 0 ) {
        $scope.message = "Please enter data first";
        $scope.messagecolor = "redmsg";
        $scope.texthighlight = "redtextbox";
      } else if (menucount <= 3 ) {
        $scope.message = "Enjoy!";
        $scope.messagecolor = "greenmsg";
        $scope.texthighlight = "greentextbox";
      } else {
        $scope.message = "Too much!";
        $scope.messagecolor = "greenmsg";
        $scope.texthighlight = "greentextbox";
      }


    };

  }

})();
