'use strict';

require('angular');

require('angular-ui-router');
var controllers = require('./controllers');
// console.log(controllers.name);


var app = angular.module('poem', [
	'ui.router',
	'poem.controllers'
]).run(function() {
	console.log('running app');
});

