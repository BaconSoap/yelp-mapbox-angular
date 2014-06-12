
var yelpAngularMapbox;
(function (yelpAngularMapbox) {
    var app = angular.module('yelpMapbox', ['ui.router']);
    app.config([
        '$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/overview');
            $locationProvider.html5Mode(true);
            $stateProvider.state('overview', {
                url: '/overview',
                templateUrl: 'templates/overview/overview.tpl.html',
                controller: 'overviewCtrl'
            });
        }]);

    app.run(['$state', function ($state) {
            return angular.noop($state);
        }]);

    app.controller('overviewCtrl', [
        '$scope', function ($scope) {
            angular.noop();
        }]);

    app.controller('mapCtrl', [
        '$scope', 'mapService', function ($scope, mapService) {
            mapService.init().then(function () {
                console.log('map initialized');
            });
        }]);

    var MapService = (function () {
        function MapService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        MapService.prototype.init = function () {
            var deferred = this.$q.defer();
            var map = L.mapbox.map('map', credentials.mapbox.mapKey);
            map.on('ready', function () {
                return deferred.resolve();
            });
            return deferred.promise;
        };
        return MapService;
    })();

    app.service('mapService', ['$http', '$q', MapService]);
})(yelpAngularMapbox || (yelpAngularMapbox = {}));
;angular.module('templates-main', ['templates/index.tpl.html', 'templates/overview/overview.tpl.html']);

angular.module("templates/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/index.tpl.html",
    "<div ui-view></div>");
}]);

angular.module("templates/overview/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/overview/overview.tpl.html",
    "<div class=\"container-fluid\" id=\"main\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-8\">\n" +
    "			<div ng-controller=\"overviewCtrl\">\n" +
    "				Hello there\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-4 map-container\" ng-controller=\"mapCtrl\">\n" +
    "			<div id=\"map\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
