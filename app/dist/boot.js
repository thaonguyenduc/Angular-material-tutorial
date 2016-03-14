///<reference path="_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var app = angular.module("myContactApp", ['ngMaterial']).service('userService', ContactManagerApp.UserServiceImpl)
        .controller("mainController", ContactManagerApp.MainController)
        .controller("demoWatchController", ContactManagerApp.DemoWatchController);
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map