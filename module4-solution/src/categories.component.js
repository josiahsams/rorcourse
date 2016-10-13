(function(){

  angular.module("MenuApp")
    .component("categoryList", {
        templateUrl: "src/template/category.sub.template.html",
        bindings: {
          items: '<'
        }
    });


})();
