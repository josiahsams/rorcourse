(function(){

  'use strict';

  angular.module("MenuApp")
    .controller("ItemController", ItemController);

  ItemController.$inject = ['items'];
  function ItemController(items) {
    var itemList = this;

    itemList.items = items.data.menu_items;
    console.log("Got menu Items :: " + items.data.menu_items[0].name)

  }

})();
