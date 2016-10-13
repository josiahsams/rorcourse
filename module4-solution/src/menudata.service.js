(function(){
  angular.module("data")
    .service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var menuData = this;

    menuData.getAllCategories = function() {

      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      });
    }

    menuData.getItemsForCategory = function(categoryShortName) {
      console.log("getItemsForCategory invoked with " + categoryShortName);
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
        params: {
          category : categoryShortName
        }
      });
    }
  }
})();
