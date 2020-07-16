
// Menu Burger

$('.header__burger').click(function(event) {

	$('.header__burger, .menu').toggleClass('active');
	$('body').toggleClass('lock');

});


// Spoiler menu for showcases filter

$('.showcase__filter-title').click(function(event) {
	$(this).toggleClass('activated').next().slideToggle(300);


});

// Scroll to top

$('.scroll__up').click(function() {

	$('html, body').animate({ scrollTop: 0 }, "slow");
});