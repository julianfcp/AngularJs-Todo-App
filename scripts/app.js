angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
  $scope.todos = [
    {"name": "Clean the house"},
    {"name": "Study english"},
    {"name": "Get some food"},
    {"name": "Make the CV file"},
    {"name": "other todo"},
    {"name": "Make love"},
    {"name": "Drink more beer"},
  ]
  
});