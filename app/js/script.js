$(document).ready(function() {

	$('.js-feedback-carousel').owlCarousel({
		items:2,
		margin:20,
		nav:true,
		dots:false
	});

	$('.js-index-carousel').owlCarousel({
		items:1,
		margin:0,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
	});

	// FORM SELECT

	$('.form_select').on('click', '.form_select-current', function(e){
		e.preventDefault();
		$(this).closest('.form_select').toggleClass('__is-open');
	});

	$('.form_select').on('click', '.form_select-val', function(e){
		e.preventDefault();

		var val = $(this).text(),
			attr = $(this).attr( 'data-val' );

		$(this).closest('.form_select').find('.form_select-current').text(val);
		$(this).closest('.form_select').find('.form_select-input').val(attr);
		$(this).closest('.form_select').removeClass('__is-open');
	});

	$(document).mouseup(function (e){
		var popup = $('.form_select');
		if(!popup.is(e.target) && popup.has(e.target).length === 0) {
			popup.removeClass('__is-open');
		};
	});

	// MODALS

	$('.mopen').wmodal();

	// SEARCH AT HEADER

	$('.js-search').on('click', function(e){
		e.preventDefault();
		$(this).addClass('__is-open');
		$(this).find('.search_field').focus();
	});

	$(document).mouseup(function (e){
		var popup = $('.js-search');
		if(!popup.is(e.target) && popup.has(e.target).length === 0) {
			popup.removeClass('__is-open');
		};
	});

});
