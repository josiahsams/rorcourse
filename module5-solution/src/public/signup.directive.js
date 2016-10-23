(function(){

  "use strict";

  angular.module("public")
    .directive("favitemValidate", [ function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
        var menuItems = scope.prefetchCtrl.menuitems;
        ctrl.$parsers.unshift(function(value) {
          var valid = false;
          scope.reg.menuname = false;
          for (var i=0; i < menuItems.length; i++) {
            if (menuItems[i].short_name == value) {
              valid = true;
              scope.reg.menuname = menuItems[i].name;
              break;
            }
          }

          ctrl.$setValidity('favitemValidate', valid);
          return valid ? value : "";
        });

      ctrl.$formatters.unshift(function(value) {
        var valid = false;
        scope.reg.menuname = false;
        for (var i=0; i < menuItems.length; i++) {
          if (menuItems[i].short_name == value) {
            valid = true;
            scope.reg.menuname = menuItems[i].name;
            break;
          }
        }
        ctrl.$setValidity('favitemValidate', valid);
        return value;
    });
  }
}
}]);


})();
