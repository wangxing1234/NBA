angular.module('myApp')
//服务$routeParams保存了地址栏中的参数
.controller('detailsController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$http.get('src/data/players.json')
	.success(function(data){
		// parseInt() 函数可解析一个字符串，并返回一个整数;
		var i = parseInt($routeParams.playerId)-1;  //这里的i代表的是获取到地址栏中的参数，也就是当前对象的id
		$scope.player = data[i]; //这里的i代表的是请求到数据的数组的下标,所以上面的i-1才是视图要展示的球员的信息
		console.log(i);
	})
}])
