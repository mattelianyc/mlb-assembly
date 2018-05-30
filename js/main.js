$(document).ready(function () {
	
	setTimeout(function () {
		$('#blue').addClass('fadeInUpBig');
		setTimeout(function () {
			$('#diamond-blue').addClass('fadeIn');
			$('body').removeClass('overflow-hidden');
		}, 1000);
	}, 500);

	$(window).scroll(function() {
		var hTone = $('#one').offset().top,
				hHone = $('#one').outerHeight(),
				hTtwo = $('#two').offset().top,
				hHtwo = $('#two').outerHeight(),
				hTthree = ($('#three').offset().top-450),
				hHthree = $('#three').outerHeight(),
				hTfour = $('#four').offset().top,
				hHfour = $('#four').outerHeight(),
				wH = $(window).height(),
				wS = $(this).scrollTop();
				// console.log((hT-wH) , wS);

		if (wS > (hTone+hHone-wH)){
			$('#yellow').addClass('fadeInDownBig');
		}
		if (wS > (hTtwo+hHtwo-wH)){
			$('#green').addClass('rotateInDownLeft');
		}
		if (wS > (hTthree+hHthree-wH)){
			$('#pink').addClass('fadeInLeftBig');
		}
		if (wS > (hTfour+hHfour-wH)){
			$('#pink-splash').addClass('fadeInLeftBig');
		}
	});
})