angular
  .module('TodoApp')
  .controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    let vm = this;

    vm.theme = 'light';

    $rootScope.todos = [
      {
        id: 1,
        title: 'foo',
        text: 'quxx',
      },
      {
        id: 2,
        title: 'bar',
        text: 'quxxx',
      },
      {
        id: 3,
        title: 'baz',
        text: 'quxxxx',
      },
      {
        id: 4,
        title: 'A big enough title',
        text: 'quxxxxx quxxxxxx quxxxxxxx quxxxxxxxx quxxxxxxxxx quxxxxxxxxxxx quxxxxxxxxxxxx quxxxxxxxxxxxxxx',
      }
    ];
  }]);
