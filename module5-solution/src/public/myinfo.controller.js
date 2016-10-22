(function(){

  "use strict";

  angular.module("public")
    .controller("MyInfoController", MyInfoController);

  MyInfoController.$inject = ['myInfo'];

  function MyInfoController(myInfo) {
    var myInfoCtrl = this;
    if (Object.keys(myInfo).length != 0) {
      myInfoCtrl.myInfo = myInfo
    } else {
      myInfoCtrl.myInfo = false;
    }
    
  }
})();
