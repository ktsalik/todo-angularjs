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
      .otherwise('/');
  }]);
