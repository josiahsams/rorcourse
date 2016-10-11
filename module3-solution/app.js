(function(){

  'use strict';

  angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive('foundItems', foundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];

  function foundItemsDirective() {
    var ddo = {
      templateUrl: 'menuList.html',
      scope : {
        items : "<",
        onRemove : "&",
        message: "=?"
      },
      controller: foundItemsDirectiveController,
      controllerAs: 'menulist',
      bindToController: true
    };

    return ddo;
  }

  function foundItemsDirectiveController() {
    var menulist = this;

    menulist.showTable = function() {
      if (menulist.items.length > 0 ) {
        return true;

      } else {
        return false;
      }
    }

  }


  function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;
    narrowItDown.searchKey = "";
    narrowItDown.found = [];
    narrowItDown.message = "";

    narrowItDown.searchMenu = function() {
      //console.log("Search for CTRL " + narrowItDown.searchKey);
      MenuSearchService.getMatchedMenuItems()
        .then(function(response) {
        var items = [];
        var arrayLength = response.data.menu_items.length;
        for (var i = 0; i < arrayLength; i++) {
            if (response.data.menu_items[i].description.includes(narrowItDown.searchKey)) {
              items.push(response.data.menu_items[i]);
            }
        }
        narrowItDown.found = items;
        //console.log(narrowItDown.found.length);
        if (narrowItDown.found.length == 0) {
          narrowItDown.message = "Nothing found";
          console.log("nothing");
        } else {
          narrowItDown.message = "";
        }
      }, function (error) {
        console.log("Error making http call");
        narrowItDown.message = "Nothing found";
      });
    }

    narrowItDown.removeItem = function(index) {
      narrowItDown.found.splice(index, 1);
    }

  }

  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    var menuSearch = this;

    menuSearch.getMatchedMenuItems = function() {

      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      });

    }

  }

})();
