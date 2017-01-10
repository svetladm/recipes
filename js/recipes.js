'use strict';
(function() {
  var app = angular.module("recipesApp", []);
  app.controller('recipesController', function($scope, $http) {
    $http.get("/data/recipes.json").then(function(response) {
      $scope.recipes = response.data.recipes;
    })

    $scope.selectRecipe = function(recipe) {
      $scope.selected = recipe;
    }
  });
})();
