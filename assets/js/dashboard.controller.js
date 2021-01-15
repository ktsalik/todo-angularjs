angular
  .module('TodoApp')
  .controller('DashboardController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    let vm = this;

    vm.view = {
      todos: [],
    };

    $rootScope.$watch('todos', function(val) {
      vm.view.todos = val;
    });

    vm.openTodo = function() {
      
    };
  }]);
