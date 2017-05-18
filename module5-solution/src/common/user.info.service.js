(function() {
  "use strict";

  angular.module('common')
    .service('UserInfoService', UserInfoService);


  UserInfoService.$inject = [];

  function UserInfoService() {
    var service = this;

    var userInfo = {};

    service.getInfo = function() {
      return userInfo;
    };

    service.saveInfo = function(info) {
      userInfo = info;
    };

  }

})();
