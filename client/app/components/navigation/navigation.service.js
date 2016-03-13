'use strict';

angular.module('angularFullstackApp')
	.factory('NavService', function NavService($location){
		
		var factory = {};

		factory.urls = {
			pages: {
				main: '/main',
				admin: '/admin',
				pomodoro: '/pomodoro'
			},
			api: {
				pomodoro: '/pomodoro'
			}
		};

		factory.changePage = function (pPageURL) {
			$location.path(pPageURL);
		};
	
		factory.showMainPage = function () {
			factory.changePage(factory.urls.pages.main);
		};
	
		return factory;
		
});