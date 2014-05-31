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
