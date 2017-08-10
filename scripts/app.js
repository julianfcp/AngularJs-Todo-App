angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {

  $scope.helloConsole = dataService.helloConsole;

  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
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
  
})

.service('dataService', function($http) {
    this.helloConsole = function () {
        console.log('this is the hello console service!');
    }
    // receive callback function  after loading data
    this.getTodos = function(callback) {
        $http.get('mock/todos.json').then(callback)
    };
    this.deleteTodo = function(todo){
        console.log("The " + todo.name + " todo has been deleted!");
    };
    this.saveTodo = function(todo){
            console.log("The " + todo.name + " todo has been saved!");
        };


});