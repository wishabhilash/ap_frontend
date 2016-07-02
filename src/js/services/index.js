'use strict';

var module = 'poem.services';

angular.module(module, [])
	.service('contentService', require('./content'));
