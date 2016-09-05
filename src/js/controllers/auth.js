'use strict';

module.exports = function ($scope, $auth) {
	"ngInject";
	var authCtrl = this;
	
	authCtrl.authenticate = function() {
		$auth.authenticate('facebook');
	}
}