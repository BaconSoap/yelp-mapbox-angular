///<reference path="../def/definitions.d.ts" />
///<reference path="references.d.ts" />

declare var credentials: any;

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

	app.controller('mapCtrl', ['$scope', 'mapService', ($scope, mapService) => {
		mapService.init().then(() => {
			console.log('map initialized');
		});
	}]);

	class MapService {
		constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

		}

		public init(): ng.IPromise<void> {
			var deferred = this.$q.defer<void>();
			var map = L.mapbox.map('map', credentials.mapbox.mapKey);
			map.on('ready', () => deferred.resolve());
			return deferred.promise;
		}
	}

	app.service('mapService', ['$http', '$q', MapService]);
}
