'use strict';

require('angular');

require('angular-ui-router');
require('./controllers');
// console.log(controllers.name);


var app = angular.module('poem', [
	'ui.router',
	'poem.controller'
]).run(function($state) {
	"ngInject";
	console.log('running app');

	$state.go('home');

});

app.config(
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		"ngInject";
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		}).hashPrefix('!');
	});
