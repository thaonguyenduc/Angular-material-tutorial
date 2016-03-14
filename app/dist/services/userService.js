var ContactManagerApp;
(function (ContactManagerApp) {
    var UserServiceImpl = (function () {
        function UserServiceImpl($q) {
            this.$q = $q;
            this.users = [{
                    name: "Erick Riley",
                    avatar: "svg-1",
                    bio: "asdfsaffs",
                    notes: [{ title: "first note", date: new Date("2016-01-12")
                        }]
                }];
            this.selectedUser = null;
        }
        UserServiceImpl.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserServiceImpl.$inject = ['$q'];
        return UserServiceImpl;
    }());
    ContactManagerApp.UserServiceImpl = UserServiceImpl;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map