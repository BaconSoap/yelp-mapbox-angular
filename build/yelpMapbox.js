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
    "		<div class=\"col-md-4\">\n" +
    "			map goes here\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
