///<reference path="../_all.ts"/>
module ContactManagerApp{
	export class MainController {
		static $inject= ['userService'];
		constructor (private userService: UserServiceInterface){
			var self = this;
			this.userService.loadAllUsers().then((users:User[])=>{
				self.users = users;
				console.log(self.users);
			})
		}

		users: User[]= [];
		message: string = "Our first controller";
	}
	
}