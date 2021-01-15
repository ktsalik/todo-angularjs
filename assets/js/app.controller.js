angular
  .module('TodoApp')
  .controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    let vm = this;

    vm.theme = 'light';

    $rootScope.todos = [
      {
        title: 'foo',
        text: 'quxx',
      },
      {
        title: 'bar',
        text: 'quxxx',
      },
      {
        title: 'baz',
        text: 'quxxxx',
      },
    ];
  }]);
