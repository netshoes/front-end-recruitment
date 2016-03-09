(function() {
	'use strict';

	angular
	.module('test')
	.directive('ngElevateZoom', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				attrs.$observe('zoomImage',function(){
					linkElevateZoom();
				});
				function linkElevateZoom(){
					if (!attrs.zoomImage) return;
					element.attr('data-zoom-image',attrs.zoomImage);
					$(element).elevateZoom({ zoomType:"inner", lensFadeIn : 700, lensFadeOut : 700, zoomWindowFadeIn : 700, zoomWindowFadeOut : 700 });
				};
				linkElevateZoom();
			}
		};
	});

})();
