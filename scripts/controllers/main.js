'use strict';
angular.module("todoListApp") // not adding second parameter ( [] )
.controller('mainCtrl', function($scope, dataService) {

  $scope.helloConsole = dataService.helloConsole;

  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
  // add new task to the list using push function
  $scope.addTodo = function() {
    var todo = {name: "This is a new Todo"};
    //$scope.todos.push(todo); // this adds todos to the end of the list
    $scope.todos.unshift(todo); // this adds todos to the beginning of the list
  };

  // sends callback function so scope.todos loads its values after
  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });
  // delete functions receive index from ng-repeat to delete the item
  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    //splice function removes 1 item from the todos list starting from index
    $scope.todos.splice($index, 1);
  };
  $scope.saveTodo = function(todo){
    dataService.saveTodo(todo);
  };
  $scope.saveTodos = function(todo){
    var filteredTodos = $scope.todos.filter(function(todo) {
        if(todo.edited){
            return todo; // returns todos which has been edited
        }
    });
    $scope.todosSaved = filteredTodos;
    dataService.saveTodos(filteredTodos);
  };


});