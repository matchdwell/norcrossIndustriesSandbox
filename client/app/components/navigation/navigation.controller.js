'use strict';

angular.module('angularFullstackApp')
  .controller('NavbarCtrl', function ($scope, $location, $window, $mdSidenav, $log, Auth, NavService) {

    $scope.falseValue = false;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
		$scope.getCurrentUserFirstName = Auth.getCurrentUserFirstName;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

		$scope.fabButtonClick = function(){
			if($scope.isLoggedIn()){
				Auth.logout();
				$scope.falseValue = false;
				$location.path('/');
			} else {
				angular.noop;
			}
		};

    $scope.isActive = function(route) {
      return route === $location.path();
    };

		$scope.sideNavToggler = function(navID) {
			$mdSidenav(navID)
				.toggle()
				.then(function () {
					$log.debug("toggle " + navID + " is done");
				});
		};

		$scope.goToPage= function(page){
			$scope.sideNavToggler('left');
			NavService.changePage(page);
		};

		$scope.navPages = [
			{
				pageTitle: 'Example Page',
				imageTag: 'yeoman',
				pageUrl: '/'
			}
		];


  });
