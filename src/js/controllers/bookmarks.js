'use strict';

module.exports = function ($scope) {
	"ngInject";
	$scope.times = function(num) {
		return new Array(num);
	}

}