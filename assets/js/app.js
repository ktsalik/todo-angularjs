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
      .otherwise('/');
  }]);
