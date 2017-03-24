angular.module('myApp')
.directive('valPlayerNum',function(){
	return{
		restrict:'A',
		//依赖ng-model
		require:'ngModel',
//		第四个属性就是ngModel中控制器
		link:function(scope,attr,elem,ngModelCtrl){
			function valPlayerNum(value){
				debugger;
				if(/^(100|[1-9]\d|\d)$/.test(value)){
					ngModelCtrl.$setValidity('playerNum',true);
				}else{
					ngModelCtrl.$setValidity('playerNum',false);
				}
				return value;
			}
			ngModelCtrl.$parsers.push(valPlayerNum);
			console.log(ngModelCtrl);
		}
	}
})
/*
	1.$viewValue 属性保存着更新视图所需的实际字符串，即显示在视图（页面）的实际值（就是上面例子中input输入框的值）
        
     $modelValue为模型值, 由数据模型持有。 $modelValue 和 $viewValue 可能是不同的，取决于 $parser
             流水线是否对其进行了操作
                    
    2.$parsers 的值是一个由函数组成的数组，其中的函数会以流水线的形式被逐一调用。
      ngModel 从DOM中读取的值会被传入 $parsers 中的函数，并依次被其中的解析器处理。
        
    3.
     $setValidity 来设置错误的标志
	* 
* * */