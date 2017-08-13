angular.module("todoListApp")
.directive('todos', function () {
    return {
        templateUrl: 'templates/todos.html',
        controller: 'mainCtrl',
        replace: true  // not showing the <todo></todo> tag
    }
});