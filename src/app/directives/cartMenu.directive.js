(function() {
	'use strict';

	angular
	.module('test')
	.directive('sidebarDirective', function() {
		return {
			link : function(scope, element, attr) {
				scope.$watch(attr.sidebarDirective, function(newVal) {
					if(newVal){
						element.addClass('show'); 
						return;
					}
					element.removeClass('show');
				});
			}
		};
	}); 

})();
