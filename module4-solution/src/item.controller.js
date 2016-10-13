(function(){

  'use strict';

  angular.module("MenuApp")
    .controller("ItemController", ItemController);

  ItemController.$inject = ['items', '$stateParams'];
  function ItemController(items, $stateParams) {
    var itemList = this;

    itemList.mitems = items.data.menu_items;
    itemList.cSN = $stateParams.categoryShortName;


    console.log("itemList.cSN " + itemList.cSN);
    //console.log("Got menu Items :: " + items.data.menu_items[0].name)

  }

})();
