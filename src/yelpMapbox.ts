///<reference path="../def/definitions.d.ts" />
///<reference path="references.d.ts" />

module yelpAngularMapbox {
	var app = angular.module('yelpMapbox', ['ui.router']);
	app.config(
		['$stateProvider', '$urlRouterProvider', '$locationProvider',
		 ($stateProvider, $urlRouterProvider, $locationProvider) => {
		$urlRouterProvider.otherwise('/overview');
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('overview', {
				url: '/overview',
				templateUrl: 'templates/overview/overview.tpl.html',
				controller: 'overviewCtrl'
			});
	}]);

	//hack to make ui-view work when it is ng-included
	app.run(['$state', ($state) => angular.noop($state)]);

	app.controller('overviewCtrl', ['$scope', ($scope) => {
		angular.noop();
	}]);
}
