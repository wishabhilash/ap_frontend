'use strict';

var module = 'poem.controller';

angular.module(module, ['ui.router'])
	.controller(module + '.wall', require('./wall'))
	.config(require('./routes'));
