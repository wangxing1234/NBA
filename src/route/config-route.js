angular.module('myApp')
.config(['$routeProvider',function($routeProvider){
//	服务$routeProvider用来定义一个路由表
	$routeProvider
		.when('/',{
			templateUrl:'src/view/list.html',
			controller: 'listController'
		})
		.when('/add',{
			templateUrl:'src/view/add.html',
			controller:'addController'
		})
		//:playerId
		.when('/details/:playerId',{
			templateUrl:'src/view/details.html',
			controller:'detailsController'
		})
		.when('/edit/:playerId',{
			templateUrl:'src/view/edit.html',
			controller:'editController'
		})
}])