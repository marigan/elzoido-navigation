/**
 * @license
 * elzoido-navigation 0.1.5
 * (c) 2014 marigan.net
 * License: GPL-3.0+
 */
angular.module("elzoido.navigation",[]).constant("elzoidoNavigationModule",{config:{navigationTree:{name:"home",title:"Home",url:"/"}}}),angular.module("elzoido.navigation").run(["$templateCache",function(e){e.put("partials/navigation.html",'<!--\n# Copyright (C) 2014 marigan.net\n#\n# This file is part of elzoido-navigation.\n#\n# elzoido-navigation is free software: you can redistribute it and/or modify\n# it under the terms of the GNU General Public License as published by\n# the Free Software Foundation, either version 3 of the License, or\n# (at your option) any later version.\n#\n# elzoido-navigation is distributed in the hope that it will be useful,\n# but WITHOUT ANY WARRANTY; without even the implied warranty of\n# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n# GNU General Public License for more details.\n#\n# You should have received a copy of the GNU General Public License\n# along with elzoido-navigation. If not, see <http://www.gnu.org/licenses/>.\n#\n# Authors: Michal Mocnak <michal@marigan.net>\n-->\n\n<li ng-repeat="primary in navigation" ng-class="{active:selected(primary), dropdown:primary.items.length}"\n    elzoido-auth-access="{{primary.access.toString()}}">\n    <a ng-hide="primary.items.length" href="{{primary.url}}">{{primary.title}}</a>\n    <a ng-show="primary.items.length" href="{{primary.url}}" class="dropdown-toggle" data-toggle="dropdown">\n        {{primary.title}} <span class="caret"></span></a>\n    <ul ng-show="primary.items.length" class="dropdown-menu">\n        <li ng-repeat="secondary in primary.items" ng-class="{active:selected(secondary)}"\n            elzoido-auth-access="{{secondary.access.toString()}}">\n            <a href="{{secondary.url}}">{{secondary.title}}</a>\n        </li>\n    </ul>\n</li>')}]),angular.module("elzoido.navigation").directive("elzoidoNavigation",function(){return{restrict:"A",transclude:!0,scope:{},controller:["$scope","$location","elzoidoNavigationModule",function(e,n,i){return e.navigation=i.config.navigationTree,e.selected=function(e){var i,a;return null!=(i=_.isEqual(n.path(),e.url))?i:{"true":null!=(a=_.isEqual(e.url,"/"))?a:{"false":n.path().indexOf(e.url)>-1}}}}],templateUrl:"partials/navigation.html",replace:!1}});