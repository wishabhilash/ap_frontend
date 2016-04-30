'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '../../templates/index.html'
			
		})
};