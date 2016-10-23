(function(){
  "use strict";

  angular.module("public")
    .controller("prefetchController", prefetchController);

  prefetchController.$inject = ['menuitems'];

  function prefetchController(menuitems) {
    var prefetchCtrl = this;

    prefetchCtrl.menuitems = menuitems.menu_items;

    //console.log(menuitems);
  }
})();
