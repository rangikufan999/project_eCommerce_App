//====================[DEFINE GLOBALS]===================//
var shopApp = angular.module("shopApp", ["ngRoute"]);

//====================[DEFINE APP ROUTES]================//
shopApp.config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "routes/",
		controller: ""
	})
}]);

//====================[DEFINE SHOP CONTROLLER]===========//
shopApp.controller("")