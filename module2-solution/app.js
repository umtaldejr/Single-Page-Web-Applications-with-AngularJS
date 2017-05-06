(function() {

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuy();
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBought();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    service.getToBuy = function() {
      return toBuy;
    };
    service.getAlreadyBought = function() {
      return alreadyBought;
    };
    var toBuy = [{
      name: 'apples',
      quantity: 10
    }, {
      name: 'bananas',
      quantity: 15
    }, {
      name: 'oranges',
      quantity: 5
    }, {
      name: 'watermelons',
      quantity: 2
    }, {
      name: 'pears',
      quantity: 5
    }];
    var alreadyBought = [];
  };

})();
