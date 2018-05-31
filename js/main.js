$(document).ready(function(){
	$('#nav').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#wrap').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.7);
	$('.bg2').parallax("50%", 0.2);
	$('.bg3').parallax("50%", 0.5);
	$('.bg4').parallax("50%", 0.4);
	$('.bg5').parallax("50%", 0.5);
	$('.bg6').parallax("50%", 0.3);

	$.fn.animateRotate = function(angle, duration, easing, complete) {
		var args = $.speed(duration, easing, complete);
		var step = args.step;
		return this.each(function(i, e) {
			args.step = function(now) {
			  $.style(e, 'transform', 'rotate(' + now + 'deg)');
			  if (step) return step.apply(this, arguments);
			};

			$({deg: 0}).animate({deg: angle}, args);
		});
	};

	// $('.bg3').animateRotate(1080, 300000);
	

	setTimeout(function () {
		$('#diamond-blue').addClass('fadeIn');
	}, 500);

	var totalHeight=0;

	$('section').each(function () {
		var height = ($(this).height()+parseInt($(this).css('margin-top'))+parseInt($(this).css('margin-bottom')));
		totalHeight += height;
	});

	$('#wrap').css('height', ''+totalHeight+'');
	$('.bg').css('height', ''+totalHeight+'');
	$('.bg2').css('height', ''+totalHeight+'');
	$('.bg3').css('height', ''+totalHeight+'');
	$('.bg4').css('height', ''+totalHeight+'');
	$('.bg5').css('height', ''+totalHeight+'');
	$('.bg6').css('height', ''+totalHeight+'');

	$(window).resize(function () {

		var totalHeight=0;
		
		$('section').each(function () {
			var height = ($(this).height()+parseInt($(this).css('margin-top'))+parseInt($(this).css('margin-bottom')));
			totalHeight += height;
		});

		$('#wrap').css('height', ''+totalHeight+'');
		$('.bg').css('height', ''+totalHeight+'');
		$('.bg2').css('height', ''+totalHeight+'');
		$('.bg3').css('height', ''+totalHeight+'');
		$('.bg4').css('height', ''+totalHeight+'');
		$('.bg5').css('height', ''+totalHeight+'');
		$('.bg6').css('height', ''+totalHeight+'');

	});
});