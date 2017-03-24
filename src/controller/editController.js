angular.module('myApp')
.controller('editController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
//	初始化位置信息
	$scope.positions = ["大前锋(PF)","得分后卫(SG)","中锋(C)","控球后卫(PG)","控球后卫(PG)"];
	$scope.teams = ["骑士","勇士","尼克斯","快船","火箭","篮网","公牛","雷霆"];
	
	$http.get('src/data/players.json')
	.success(function(data){
		// parseInt() 函数可解析一个字符串，并返回一个整数;
		var i = parseInt($routeParams.playerId)-1;  //这里的i代表的是获取到地址栏中的参数，也就是当前对象的id
		$scope.player = data[i]; //这里的i代表的是请求到的数组的下标,所以上面的i-1才是视图要展示的球员的信息
		console.log(i);
	})
}])