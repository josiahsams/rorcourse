(function(){
  angular.module("data")
    .service("MenuDataService", MenuDataService)
    .constant("ApiBaseUrl" ,"https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBaseUrl'];

  function MenuDataService($http, ApiBaseUrl) {
    var menuData = this;

    menuData.getAllCategories = function() {

      return $http({
        method: "GET",
        url: (ApiBaseUrl + "/categories.json")
      });
    }

    menuData.getItemsForCategory = function(categoryShortName) {
      console.log("getItemsForCategory invoked with " + categoryShortName);
      return $http({
        method: "GET",
        url: (ApiBaseUrl + "/menu_items.json"),
        params: {
          category : categoryShortName
        }
      });
    }
  }
})();
