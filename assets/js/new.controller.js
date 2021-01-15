angular
  .module('TodoApp')
  .controller('NewController', ['$route', '$rootScope', function($route, $rootScope) {
    let vm = this;

    vm.view = {
      title: '',
      text: '',
    };

    vm.goBack = function() {
      history.back();
    };

    vm.add = function() {
      $rootScope.todos.push({
        title: vm.view.title,
        text: vm.view.text,
      });
      vm.view.title = vm.view.text = '';
    };
  }]);
