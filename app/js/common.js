$(function() {

	carouselSettingsMain = {
		loop:false,
		items: 1,
		dots: true,
		nav: false,
		dotsContainer: '.main-page .block1 .slider-dots',
		animateOut: 'fadeOut',
		onInitialized  : counterMain, //When the plugin has initialized.
		onTranslate : counterMain //When the translation of the stage has finished.
	};

	carouselSettingsAboutClinic = {
		loop: false,
		items: 1,
		dots: true,
		nav: false,
		dotsContainer: '.main-page .block3 .slider-dots',
		onInitialized  : counterAboutClinic, //When the plugin has initialized.
		onTranslate : counterAboutClinic //When the translation of the stage has finished.
	};

	carouselSettingsDocs = {
		loop: false,
		items: 1,
		dots: true,
		nav: false,
		dotsContainer: '.main-page .block5 .slider-dots',
		onInitialized  : counterDocs, //When the plugin has initialized.
		onTranslate : counterDocs //When the translation of the stage has finished.
	};

	carouselSettingsSale = {
		loop: false,
		items: 1,
		dots: true,
		nav: false,
		dotsContainer: '.main-page .block7 .slider-dots',
		onInitialized  : counterSale, //When the plugin has initialized.
		onTranslate : counterSale //When the translation of the stage has finished.
	};

	carouselSettingsReview = {
		loop: false,
		items: 1,
		dots: true,
		nav: false,
		dotsContainer: '.main-page .block10 .slider-dots',
		onInitialized  : counterReview, //When the plugin has initialized.
		onTranslate : counterReview //When the translation of the stage has finished.
	};

	carouselSettingsActionsPage = {
		loop: false,
		items: 1,
		dots: true,
		nav: false,
		dotsContainer: '.actions-page .block1 .slider-dots',
		onInitialized  : counterActionsPage, //When the plugin has initialized.
		onTranslate : counterActionsPage //When the translation of the stage has finished.
	};

	$owl = $('body').find('.slider-main');
	$owl2 = $('body').find('.slider2');
	$owl3 = $('body').find('.slider_docs');
	$owl4 = $('body').find('.slider_sale');
	$owl5 = $('body').find('.slider_review');
	$owl6 = $('body').find('.slider_actions-page');

	// set the owl-carousel otions
	initialize();

	// Custom Navigation Events
	$('.main-page .block1 .slider-prev').click(function(){
			$owl.trigger('prev.owl.carousel');
	});
	$('.main-page .block1 .slider-next').click(function(){
			$owl.trigger('next.owl.carousel');
	});

	// Custom Navigation Events
	$('.main-page .block3 .slider-prev').click(function(){
			$owl2.trigger('prev.owl.carousel');
	});
	$('.main-page .block3 .slider-next').click(function(){
			$owl2.trigger('next.owl.carousel');
	});

	// Custom Navigation Events
	$('.main-page .block5 .slider-prev').click(function(){
			$owl3.trigger('prev.owl.carousel');
	});
	$('.main-page .block5 .slider-next').click(function(){
			$owl3.trigger('next.owl.carousel');
	});

	// Custom Navigation Events
	$('.main-page .block7 .slider-prev').click(function(){
			$owl4.trigger('prev.owl.carousel');
	});
	$('.main-page .block7 .slider-next').click(function(){
			$owl4.trigger('next.owl.carousel');
	});

	// Custom Navigation Events
	$('.main-page .block10 .slider-prev').click(function(){
			$owl5.trigger('prev.owl.carousel');
	});
	$('.main-page .block10 .slider-next').click(function(){
			$owl5.trigger('next.owl.carousel');
	});

		// Custom Navigation Events
	$('.actions-page .block1 .slider-prev').click(function(){
			$owl6.trigger('prev.owl.carousel');
	});
	$('.actions-page .block1 .slider-next').click(function(){
			$owl6.trigger('next.owl.carousel');
	});

	$('.procedure-list__item').click(function() {
		if(!$(this).hasClass('procedure-list__item_active')) {
			$('.procedure-list__item').removeClass('procedure-list__item_active').find('.procedure-list__extended-wrap').slideUp('slow');
			$(this).addClass('procedure-list__item_active').find('.procedure-list__extended-wrap').slideDown('slow');
		}
	});

	function initialize() {
		$owl.owlCarousel( carouselSettingsMain ).addClass('owl-carousel owl-theme');
		$owl2.owlCarousel( carouselSettingsAboutClinic ).addClass('owl-carousel owl-theme');
		$owl3.owlCarousel( carouselSettingsDocs ).addClass('owl-carousel owl-theme');
		$owl4.owlCarousel( carouselSettingsSale ).addClass('owl-carousel owl-theme');
		$owl5.owlCarousel( carouselSettingsReview ).addClass('owl-carousel owl-theme');
		$owl6.owlCarousel( carouselSettingsActionsPage ).addClass('owl-carousel owl-theme');
		$('.procedure-list__item').first().addClass('procedure-list__item_active').find('.procedure-list__extended-wrap').slideDown('slow');
	}

	function counterMain(event) {
		var items     = event.item.count;     // Number of items
		var item      = event.item.index + 1;     // Position of the current item
		$('.main-page .block1 .slider-counter').html("<div class='slider-counter__current'>" + item + "</div>"+"/"+ "<div class='slider-counter__all'>" +items + "</div>");
		if (item === 1) {
			$('.main-page .block1 .slider-prev').addClass('disabled');
		}
		else {
			$('.main-page .block1 .slider-prev').removeClass('disabled');
		}
		if (item === items) {
			$('.main-page .block1 .slider-next').addClass('disabled');
		}
		else {
			$('.main-page .block1 .slider-next').removeClass('disabled');
		}
	}

	function counterAboutClinic(event) {
		var items     = event.item.count;     // Number of items
		var item      = event.item.index + 1;     // Position of the current item
		$('.main-page .block3 .slider-counter').html("<div class='slider-counter__current'>" + item + "</div>"+"/"+ "<div class='slider-counter__all'>" +items + "</div>");
		if (item === 1) {
			$('.main-page .block3 .slider-prev').addClass('disabled');
		}
		else {
			$('.main-page .block3 .slider-prev').removeClass('disabled');
		}
		if (item === items) {
			$('.main-page .block3 .slider-next').addClass('disabled');
		}
		else {
			$('.main-page .block3 .slider-next').removeClass('disabled');
		}
	}

	function counterDocs(event) {
		var items     = event.item.count;     // Number of items
		var item      = event.item.index + 1;     // Position of the current item
		$('.main-page .block5 .slider-counter').html("<div class='slider-counter__current'>" + item + "</div>"+"/"+ "<div class='slider-counter__all'>" +items + "</div>");
		if (item === 1) {
			$('.main-page .block5 .slider-prev').addClass('disabled');
		}
		else {
			$('.main-page .block5 .slider-prev').removeClass('disabled');
		}
		if (item === items) {
			$('.main-page .block5 .slider-next').addClass('disabled');
		}
		else {
			$('.main-page .block5 .slider-next').removeClass('disabled');
		}
	}

	function counterSale(event) {
		var items     = event.item.count;     // Number of items
		var item      = event.item.index + 1;     // Position of the current item
		$('.main-page .block7 .slider-counter').html("<div class='slider-counter__current'>" + item + "</div>"+"/"+ "<div class='slider-counter__all'>" +items + "</div>");
		if (item === 1) {
			$('.main-page .block7 .slider-prev').addClass('disabled');
		}
		else {
			$('.main-page .block7 .slider-prev').removeClass('disabled');
		}
		if (item === items) {
			$('.main-page .block7 .slider-next').addClass('disabled');
		}
		else {
			$('.main-page .block7 .slider-next').removeClass('disabled');
		}
	}

	function counterReview(event) {
		var items     = event.item.count;     // Number of items
		var item      = event.item.index + 1;     // Position of the current item
		$('.main-page .block10 .slider-counter').html("<div class='slider-counter__current'>" + item + "</div>"+"/"+ "<div class='slider-counter__all'>" +items + "</div>");
		if (item === 1) {
			$('.main-page .block10 .slider-prev').addClass('disabled');
		}
		else {
			$('.main-page .block10 .slider-prev').removeClass('disabled');
		}
		if (item === items) {
			$('.main-page .block10 .slider-next').addClass('disabled');
		}
		else {
			$('.main-page .block10 .slider-next').removeClass('disabled');
		}
	}

	function counterActionsPage(event) {
		var items     = event.item.count;     // Number of items
		var item      = event.item.index + 1;     // Position of the current item
		$('.actions-page .block1 .slider-counter').html("<div class='slider-counter__current'>" + item + "</div>"+"/"+ "<div class='slider-counter__all'>" +items + "</div>");
		if (item === 1) {
			$('.actions-page .block1 .slider-prev').addClass('disabled');
		}
		else {
			$('.actions-page .block1 .slider-prev').removeClass('disabled');
		}
		if (item === items) {
			$('.actions-page .block1 .slider-next').addClass('disabled');
		}
		else {
			$('.actions-page .block1 .slider-next').removeClass('disabled');
		}
	}
});
