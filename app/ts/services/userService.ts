module ContactManagerApp{
	export interface UserServiceInterface{
		loadAllUsers(): ng.IPromise<User[]>;
		selectedUser: User;
	}
	export class UserServiceImpl implements UserServiceInterface{
		static $inject= ['$q'];
		constructor(private $q: ng.IQService){
		}
		private users: User[]=[{
			name: "Erick Riley",
			avatar: "svg-1",
			bio: "asdfsaffs",
			notes:  [{title: "first note", date: new Date("2016-01-12")

			}] 
		}];
		selectedUser: User = null;
		loadAllUsers(): ng.IPromise<User[]>{
			return this.$q.when(this.users);
		}
	}
}