angular.module('myApp')
.controller('listController',['$scope','$http',function($scope,$http){
	$http.get('src/data/players.json')
	.success(function(data){
//		console.log(data)
		$scope.players = data;
	})
	$scope.orderProp = "-votes"
	
	
	$scope.removePlayer = function(ev,id){
		//取消事件的默认动作。
		ev.preventDefault(); 
		//这里打印的是9也就是当前点击的对象的id
		console.log("当前点击的对象id:"+id);
		angular.forEach($scope.players,function(val,key){
			console.log("遍历数组的下标"+key);
			console.log("当前点击的对象"+val);
			if(id == val.id){
				/*
				 * splice是js中从数组中添加删除项目，会改变原始数组，key代表删除项目的下表，1删除项目的个数
					 三个参数
					 1.必需。整数，规定添加/删除项目的位置
					 2.必需。要删除的项目数量。如果设置为 0，则不会删除项目。
					 3.可选。向数组添加的新项目。(item1, ..., itemX)
				 * */
				$scope.players.splice(key,1); 
			}
		})
	}
}])