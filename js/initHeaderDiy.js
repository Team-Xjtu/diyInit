$(function(){

	$('.demo2').scroller({
		container: {
			easing: 'easeOutExpo'
		},
		options: {
			margin: 7,
			zoom: 2,
			easing: ['easeInSine', 'easeOutElastic'],
			duration: [200, 1000]
		},
		onclick: function(a, img){
            $('#img1').attr('src', img.attr('src'));
            //CanvasDemo();
			var alt = img.attr('alt'), h2 = $('.title');
			h2.text(alt);
            //$(a).css('border-color','#f00');
		}
	});
});
