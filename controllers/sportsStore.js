var app = angular.module('sportsStore',['customFilter']);

app.controller('sportsStoreController', function($scope){
  $scope.data={
	  products:[
		  {name : "product#1", description : "First Product", category: "Category #1",  price : 10.95},
		  {name : "product#2", description : "Second Product", category: "Category #2",  price : 11.95},
		  {name : "product#3", description : "Third Product", category: "Category #3", price : 15.95},
		  {name : "product#4", description : "Fourth Product", category: "Category #1", price : 19.95}]
	  };
});