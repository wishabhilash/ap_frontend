'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
	"ngInject";

	$stateProvider
	.state('base', {
		url: '/',
		templateUrl: '/src/templates/base.html',
		controller: 'poem.controller.base',
		controllerAs: 'baseCtrl'
	})
	
	.state('base.wall', {
		url: 'wall',
		templateUrl: '/src/templates/wall.html',
		controller: 'poem.controller.wall',
	})

	.state('base.read', {
		url: '/read',
		templateUrl: '/src/templates/read.html',
		controller: 'poem.controller.read'
	})

	.state('base.create', {
		url: '/create',
		templateUrl: '/src/templates/create.html',
		controller: 'poem.controller.create'
	})

	.state('base.bookmarks', {
		url: '/bookmarks',
		templateUrl: '/src/templates/bookmarks.html',
		controller: 'poem.controller.bookmarks'
	})

	.state('auth', {
		url: '/auth',
		templateUrl: '/src/templates/auth.html',
		controller: 'poem.controller.auth',
		controllerAs: 'authCtrl'
	});
}