'use strict';

require('angular');
require('angular-ui-router');
require('./controllers');
require('./directives');
require('./services');

require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');


var app = angular.module('poem', [
	'ui.router',
	'poem.controller',
	'ngMaterial',
	'ngMessages',
	'poem.directives',
	'poem.services'
]).run(function() {
	// CHECK TOKEN REFRESH AND SESSION EXPIRE
});

app.config(
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		"ngInject";
		
		$urlRouterProvider.otherwise('/');
		
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		}).hashPrefix('!');
	});

app.config(function($mdThemingProvider) {
	var customBlueMap = $mdThemingProvider.extendPalette(
		'light-blue', {
			'contrastDefaultColor': 'light',
			'contrastDarkColors': ['50'],
			'50': 'ffffff'
		});
	$mdThemingProvider.definePalette('customBlue', customBlueMap);
	$mdThemingProvider.theme('default')
	.primaryPalette('customBlue', {
		'default': '500',
		'hue-1': '50'
	})
	.accentPalette('pink');
	$mdThemingProvider.theme('input', 'default')
	.primaryPalette('grey')

});
