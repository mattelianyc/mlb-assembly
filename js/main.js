// $(document).ready(function () {
	
// 	setTimeout(function () {
// 		$('#blue').addClass('fadeInUpBig');
// 		setTimeout(function () {
// 			$('#diamond-blue').addClass('fadeIn');
// 			$('body').removeClass('overflow-hidden');
// 		}, 1000);
// 	}, 500);

// 	$(window).scroll(function() {
// 		var hTone = $('#one').offset().top,
// 				hHone = $('#one').outerHeight(),
// 				hTtwo = $('#two').offset().top,
// 				hHtwo = $('#two').outerHeight(),
// 				hTthree = ($('#three').offset().top-420),
// 				hHthree = $('#three').outerHeight(),
// 				hTfour = $('#four').offset().top,
// 				hHfour = $('#four').outerHeight(),
// 				wH = $(window).height(),
// 				wS = $(this).scrollTop();
// 				// console.log((hT-wH) , wS);

// 		if (wS > (hTone+hHone-wH)){
// 			$('#yellow').addClass('fadeInDownBig');
// 		}
// 		if (wS > (hTtwo+hHtwo-wH)){
// 			$('#green').addClass('rotateInDownLeft');
// 		}
// 		if (wS > (hTthree+hHthree-wH)){
// 			$('#pink').addClass('fadeInLeftBig');
// 		}
// 		if (wS > (hTfour+hHfour-wH)){
// 			$('#pink-splash').addClass('fadeInLeftBig');
// 		}
// 	});
// })

$(document).ready(function(){
	$('#nav').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.1);
	$('#second').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.4);
	$('.bg2').parallax("50%", 0.2);
	$('.bg3').parallax("50%", 0.3);
	$('.bg4').parallax("50%", 0.7);
	$('.bg5').parallax("50%", 0.1);
	$('.bg6').parallax("50%", 0.3);
	$('#third').parallax("50%", 0.3);

});