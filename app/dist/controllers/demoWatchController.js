var ContactManagerApp;
(function (ContactManagerApp) {
    var DemoWatchController = (function () {
        function DemoWatchController($scope) {
            this.users1 = [];
            $scope.users1 = [{ name: "a",
                    avatar: "svg-2",
                    bio: "nha trang",
                    notes: [{ title: "learn typescript",
                            date: new Date("2016-03-14") }] }];
            $scope.whishListCount = 0;
            $scope.addToWhishList = function (user) {
                $scope.whishListCount++;
                $scope.watch('whishListCount', function (newValue, oldValue) {
                    console.log('Called ' + newValue + ' times');
                    if (newValue == 2) {
                        // code...
                        alert("Great you have 2 new items in your wish list");
                    }
                });
            };
        }
        return DemoWatchController;
    }());
    ContactManagerApp.DemoWatchController = DemoWatchController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=demoWatchController.js.map