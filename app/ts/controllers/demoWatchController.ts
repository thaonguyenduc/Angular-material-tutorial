module ContactManagerApp{
	export class DemoWatchController{
		static $inject = ['$scope'];
		public users1: User[] =[];
		public whishListCount:number; 
		public addToWhishList:any;
		constructor($scope: ng.IScope){
			this.users1 = [{name:"a",
			avatar:"svg-2",
			bio: "nha trang",
			notes: [{title: "learn typescript",
					date: new Date("2016-03-14")}]}];

		this.whishListCount = 0;
	    $scope.addToWhishList = function(user: User){
	    	this.whishListCount++;
	    };

	    $scope.$watch('whishListCount',function(newValue:any,oldValue:any){
	    	console.log('Called '+ newValue + ' times');
	    	if(newValue ==2) {
	    		// code...
	    		alert("Great you have 2 new items in your wish list")
	    	}
	    });

		}

		}
}