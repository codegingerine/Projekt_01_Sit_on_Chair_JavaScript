$(function() {

	// ----- Menu - scrolling down to a corresponding anchor down the page -----
	var $links = $('nav ol').children('li').children('a');
	// console.log($links);

	$links.on('click', function(event) {
		event.preventDefault();
		var $this = $(this);
		var cssOfElementToScrollTo = $this.attr('href');  //this anchor
		var $elementToScrollTo = $(cssOfElementToScrollTo); //wrapped anchor
		//scrolling down the window to an anchor
		$('html, body').animate({
			scrollTop: $elementToScrollTo.offset().top-60}, 2000);
		});
		//nav is fixed (nav height: 60px) so -60 so that top part of the anchor does not hide under fixed nav
});