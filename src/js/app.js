'use strict';

require('angular');

require('angular-ui-router');
require('./controllers');

require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');
// console.log(controllers.name);


var app = angular.module('poem', [
	'ui.router',
	'poem.controller',
	'ngMaterial',
	'ngMessages'
]).run(function($state) {
	"ngInject";
	console.log('running app');

	$state.go('wall');

});

app.config(
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		"ngInject";
		
		$urlRouterProvider.otherwise('/index');
		
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
