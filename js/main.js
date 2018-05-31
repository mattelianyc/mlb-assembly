$(document).ready(function(){
	$('#nav').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#second').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.6);
	$('.bg2').parallax("50%", 0.2);
	$('.bg3').parallax("50%", 0.8);
	$('.bg4').parallax("50%", 0.4);
	$('.bg5').parallax("50%", 0.5);
	$('.bg6').parallax("50%", 0.3);

	setTimeout(function () {
		$('#diamond-blue').addClass('fadeIn');
	}, 500);

});