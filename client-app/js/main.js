var dreamSmilez = angular.module('dreamSmilez', ['ui.router']);

dreamSmilez.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('test', {
		url : '/test',
		template : "Test Page"
	})

	.state('login', {
		url : '/',
		templateUrl : 'views/account/login.html'
	})

	.state('home', {
		url : '/home',
		templateUrl : 'views/Home/index.html'
	})
}])