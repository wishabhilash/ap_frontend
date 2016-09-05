'use strict';

module.exports = function ($scope, $auth, $state) {
	"ngInject";
	var baseCtrl = this;
	
	baseCtrl.goto = function(stateName) {
		$state.transitionTo(stateName);
	}
}