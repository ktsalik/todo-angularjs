angular
  .module('TodoApp')
  .controller('DashboardController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    let vm = this;

    vm.view = {
      todos: [],
    };

    $rootScope.$watch('todos', function(val) {
      vm.view.todos = val;

      if (localStorage['last-seen']) {
        vm.view.todos.forEach((todo) => todo.lastSeen = false);
        let lastSeenTodo = vm.view.todos.find((todo) => todo.id == localStorage['last-seen']);
        lastSeenTodo.lastSeen = true;
        localStorage.removeItem('last-seen');
        setTimeout(() => {
          lastSeenTodo.lastSeen = false;
          $scope.$apply();
        }, 100);
      }
    });

    vm.openTodo = function(id) {
      $location.path('/todo/' + id)
    };
  }]);
