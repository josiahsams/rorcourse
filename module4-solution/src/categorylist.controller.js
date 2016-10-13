(function(){
  'use strict';

  angular.module("MenuApp")
    .controller("CategoryListController", CategoryListController);

CategoryListController.$inject = ["items"];

function CategoryListController(items) {
  var categoryList = this;

  categoryList.categories = items.data;
  console.log("Got categories :: " + items.data[0].name)
}

})();
