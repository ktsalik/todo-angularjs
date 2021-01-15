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
      if (vm.view.title.trim().length) {
        let todoId = $rootScope.todos.length + 1;
        $rootScope.todos.push({
          id: todoId,
          title: vm.view.title,
          text: vm.view.text,
        });
        vm.view.title = vm.view.text = '';
        localStorage.setItem('last-seen', todoId);
        vm.goBack();
      }
    };
  }]);
