'use strict';

var module = 'poem.directives';

angular.module(module, [])
	.directive('simpleEditor', require('./editor'));
