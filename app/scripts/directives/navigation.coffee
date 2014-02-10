# Copyright (C) 2014 marigan.net
#
# This file is part of elzoido-navigation.
#
# elzoido-navigation is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# elzoido-navigation is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with elzoido-navigation. If not, see <http://www.gnu.org/licenses/>.
#
# Authors: Michal Mocnak <michal@marigan.net>

angular.module('elzoido.navigation').directive 'elzoidoNavigation', ->
  restrict: 'A'
  transclude: true
  scope: {}
  controller: ($scope, $location, elzoidoNavigationModule) ->
    # setun navigation tree
    $scope.navigation = elzoidoNavigationModule.config.navigationTree
    # help function for selection identification
    $scope.selected = (item) ->
      (_.isEqual($location.path(), item.url)) ? true : (_.isEqual(item.url, "/") ? false : $location.path().indexOf(item.url) > -1)
  templateUrl: 'partials/navigation.html'
  replace: false