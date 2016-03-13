'use strict';

angular.module('angularFullstackApp').controller('TitleCtrl',
		['$scope', '$location', 'ContextService',
		 function ($scope, $location, ContextService) {
			
			$scope.title = {};
			 
			 
			$scope.title.getPageTitle = function () {
				var location = $location.path(),
						prefix = 'Norcross Industries',
						locationHash = {
							'/home': 'Home',
							'/pomodoro': 'Pomodoro',
							'/portfolio': 'Portfolio'
						};
				if(ContextService.hasPageTitle()){
					return ContextService.getPageTitle();
				} else if(!locationHash[location]) {
					return prefix;
				}	else {
					return locationHash[location] + ' | ' + prefix;
				}
			};
	}]);