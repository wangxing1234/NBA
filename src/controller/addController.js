angular.module('myApp')
.controller('addController',['$scope',function($scope){
//	初始化位置信息
	$scope.positions = ["PG","SG","SF","PF","C"];
	$scope.teams = ["骑士","勇士","尼克斯","快船","火箭","篮网","公牛","雷霆"];
}])