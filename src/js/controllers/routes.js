'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
	"ngInject";

	$stateProvider.state('time', {
		url: '/time',
		templateUrl: '/src/templates/wall.html'
	})
	.state('home', {
		url: '/',
		templateUrl: '/src/templates/links.html'
	})
}