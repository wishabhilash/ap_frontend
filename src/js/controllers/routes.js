'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
	"ngInject";

	$stateProvider
	.state('wall', {
		url: '/',
		templateUrl: '/src/templates/wall.html',
		controller: 'poem.controller.wall',
		resolve: {
			authVerification: function($state) {
				"ngInject";
				$state.go('auth');
			}
		}
	})

	.state('auth', {
		url: '/',
		templateUrl: '/src/templates/auth.html',
		controller: 'poem.controller.auth'
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
	})

	.state('bookmarks', {
		url: '/bookmarks',
		templateUrl: '/src/templates/bookmarks.html',
		controller: 'poem.controller.bookmarks'
	});
}