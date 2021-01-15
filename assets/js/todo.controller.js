angular
  .module('TodoApp')
  .controller('TodoController', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {
    let vm = this;

    vm.view = {
      todo: $rootScope.todos.find((todo) => todo.id == $routeParams.id),
    };

    vm.goBack = function() {
      history.back();
    };

    vm.edit = function() {
      vm.goBack();
    };

    localStorage.setItem('last-seen', vm.view.todo.id);
  }]);
