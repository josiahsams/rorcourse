(function(){

  angular.module("MenuApp")
    .component("menuItems", {
      templateUrl: "src/template/item.sub.template.html",
      bindings: {
        items: '<'
      }
    });


})();
