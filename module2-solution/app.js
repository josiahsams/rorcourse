(
function(){

  'use strict';

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.bought = function(index) {
      var item = ShoppingListCheckOffService.getToBuyItem(index);
      ShoppingListCheckOffService.removeToBuyItem(index);
      ShoppingListCheckOffService.addBoughtItem(item);
      
    }
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [{name: "cookies", quantity : 10},
                      {name: "lolly", quantity : 20},
                      {name: "buns", quantity : 1},
                      {name: "candy", quantity : 5},
                      {name: "jelly", quantity : 7}
    ];
    var boughtItems = [];

    service.getToBuyItem = function(index) {
      return toBuyItems[index];
    }

    service.addBoughtItem = function(item) {
      boughtItems.push(item);
    }

    service.removeToBuyItem = function(itemIndex) {
      toBuyItems.splice(itemIndex, 1);
    }

    service.getToBuyItems = function() {
      return toBuyItems;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }
  }
}

)();
