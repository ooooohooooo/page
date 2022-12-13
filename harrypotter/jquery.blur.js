(function ( $ ) {
	$.fn.blurOut = function(ms) {
		var ms = ms || 1000;		
		color = '#b2a69b';
		
		return this.each(function() {
			var shadow = $(this).height() + "px ";
			var color = $(this).attr("bColor");	
			if ($(this).attr("bColor")  === undefined) {
				var color = "#b2a69b";
			}			
			$(this).css({
				color: '#b2a69b',
				'text-shadow': '0 0 0 ' + color
			}).transition({
				color: '#b2a69b',
				'text-shadow': '0 0 '+ shadow + color ,
				opacity: 0
			},ms);
		});
	}
}( jQuery ));


(function ( $ ) {
	$.fn.blurIn = function(ms) {
		var ms = ms || 1000;		
		
		return this.each(function() {
			var shadow = $(this).height() + "px ";
			var color = $(this).attr("bColor");	
			if ($(this).attr("bColor")  === undefined) {
				var color = "#b2a69b";
			}				
				
			$(this).transition({
				color: '#b2a69b',
				'text-shadow': '0 0 0 ' + color,
				opacity: 1
			},ms);
			
		});
	}
}( jQuery ));