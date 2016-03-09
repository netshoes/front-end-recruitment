(function() {
	'use strict';

	angular
	.module('test')
	.run(function($sessionStorage) {
		$sessionStorage.$default({
    		cart : []
		});
	});


})();
