angular
  .module('TodoApp')
  .controller('DashboardController', ['$scope', '$rootScope', function($scope, $rootScope) {
    let vm = this;

    vm.view = {
      todos: [],
    };

    $rootScope.$watch('todos', function(val) {
      vm.view.todos = val;
    });
  }]);
