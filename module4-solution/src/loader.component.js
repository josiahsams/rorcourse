
(function(){
'use strict';

  angular.module("loaderMod")
    .component("loader",{
      templateUrl: "src/template/loader.template.html",
      controller: "loaderController as loadCtrl"
    })
})();
