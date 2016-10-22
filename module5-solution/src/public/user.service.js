(function(){

  'use strict';

  angular.module("public")
    .service("userInfoService", userInfoService);

  function userInfoService() {
    var service = this;
    var user = {};

    service.addUserInfo = function(input) {
      user = input;
    }

    service.getUserInfo = function () {
        return user;
        
    }

  }
})();
