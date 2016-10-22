(function(){
  'use strict';

  angular.module("public")
    .component("loadFavImg", {
        templateUrl: 'src/public/signup-fav.html',
        bindings: {
          favitem: '<'
        },
        controller: signupFavCtrl
      });


      signupFavCtrl.$inject = [ 'ApiPath', '$http'];

      function signupFavCtrl(ApiPath, $http) {
        var $ctrl = this;
        console.log("FAV is " + $ctrl.favitem);

        $ctrl.basePath = ApiPath;
        
        $http.get("https://hotel-course5.herokuapp.com" + '/menu_items/'+ $ctrl.favitem +'.json')
          .then(function (response) {
            return $ctrl.menuItem = response.data;
          }
        );
      }



})();
