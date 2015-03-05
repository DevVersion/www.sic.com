function scrollNumber(number) {
	$('html, body').animate({ scrollTop: ($(window).height() * number) }, 500);
}
