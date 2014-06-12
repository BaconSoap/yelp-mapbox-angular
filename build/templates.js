angular.module('templates-main', ['templates/index.tpl.html', 'templates/overview/overview.tpl.html']);

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
