'use strict';
angular.module("todoListApp") // not adding second parameter ( [] )
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