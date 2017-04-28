angular.module('productsModule')
.controller('productsController', function($scope, mlabService){
	$scope.productModel = {
		name: '',
		model: '',
		price: 0,
		wifi: false,
		category: null
	};
	$scope.filterModel = {
		reverse:false
	}

	$scope.products = [];

	$scope.sortBy = function(){
		$scope.filterModel.reverse = !$scope.filterModel.reverse;
	}

	$scope.createProduct = function(){
		mlabService.createProduct($scope.productModel).then(function(data){
			$scope.products.push(data);
		})
	};

	$scope.getProducts = function(type){
		// type = 'Smartphones'
		mlabService.getProducts(type).then(function(data){
			$scope.products = data;
		})
	}
	$scope.getProducts();


});