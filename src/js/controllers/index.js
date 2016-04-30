'use strict';

var module = 'poem.controllers';

angular.module(module, [])
	.controller('poem.controller.wall', require('./wall'));
	.config('poem.controller.routes', require('./routes'));

