'use strict';

angular.module('angularFullstackApp')
	.factory('ContextService', ['Auth',
		function(Auth){
	
		var factory = {},
				user,
				pageTitle;
		
		//User existance context
		factory.hasUser = function () {
			return user !== undefined;
		};
		factory.saveUser = function (pUser) {
			user = pUser;
		};
		factory.getUser = function () {
			return user;
		};
		factory.clearUser = function () {
			user = undefined;
		};
	
		//Page title adjuster
		factory.hasPageTitle = function(){
			return pageTitle !== undefined;
		};
		factory.savePageTitle = function(pPageTitle){
			pageTitle = pPageTitle;
		};
		factory.getPageTitle = function(){
			return pageTitle;
		};
		factory.clearPageTitle = function(){
			pageTitle = undefined;
		};
			
		return factory;
}]);