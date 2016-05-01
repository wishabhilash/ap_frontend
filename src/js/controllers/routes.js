'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
	"ngInject";

	$stateProvider.state('wall', {
		url: '/',
		templateUrl: '/src/templates/wall.html',
		controller: 'poem.controller.wall'
	})

	.state('read', {
		url: '/read',
		templateUrl: '/src/templates/read.html',
		controller: 'poem.controller.read'
	})

	.state('create', {
		url: '/create',
		templateUrl: '/src/templates/create.html',
		controller: 'poem.controller.create'
	});
}