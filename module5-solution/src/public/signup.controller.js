(function(){

'use strict';


angular.module("public")
  .controller("signupController", signupController);

signupController.$inject = ['userInfoService'];

function signupController(userInfoService) {
  var ctrl = this;
  ctrl.submitted = false;

  ctrl.submit = function() {
    userInfoService.addUserInfo(ctrl.user);
    ctrl.submitted = true;
    console.log("submit invoked" + userInfoService.getUserInfo().email);

  }

}

})();
