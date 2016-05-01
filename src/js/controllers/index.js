'use strict';

var module = 'poem.controller';

angular.module(module, ['ui.router'])
	.controller(module + '.wall', require('./wall'))
	.controller(module + '.read', require('./read'))
	.controller(module + '.create', require('./create'))
	.controller(module + '.profile', require('./profile'))
	.controller(module + '.writes', require('./writes'))
	.controller(module + '.personal', require('./personal'))
	.config(require('./routes'));
