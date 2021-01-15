angular
  .module('TodoApp')
  .directive('todo', function() {
    return {
      scope: {
        title: '=',
        text: '=',
      },
      templateUrl: 'assets/templates/todo.template.html',
      link: function(scope, element, attrs) {
        
      },
    };
  });
