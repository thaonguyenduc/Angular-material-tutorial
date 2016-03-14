///<reference path="_all.ts"/>

module ContactManagerApp{
	var app= angular.module("myContactApp",['ngMaterial']).service('userService',UserServiceImpl)
	.controller("mainController",MainController)
	.controller("demoWatchController",DemoWatchController);

}
