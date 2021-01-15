angular
  .module('TodoApp', [
    'ngRoute',
  ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/templates/dashboard.view.html',
        controller: 'DashboardController',
        controllerAs: 'vm',
      })
      .when('/new', {
        templateUrl: 'assets/templates/new.view.html',
        controller: 'NewController',
        controllerAs: 'vm',
      })
      .when('/todo/:id', {
        templateUrl: 'assets/templates/todo.view.html',
        controller: 'TodoController',
        controllerAs: 'vm',
      })
      .otherwise('/');
  }]);
