$(function() {

	/*
	 * =====  CACHED ELEMENTS  =====
	 */
	var elHeader = $('header'),
		mobileToggle = $('.sidebar-toggle');


	/*
	 * =====  GLOBAL VARIABLES  =====
	 */
	var stickyLimit = $('#top-bar').is(':visible') ? $('#top-bar').height() : 0,
		lastScrollTop = 0,
		delta = 5,
		didScroll;


	/*
	 * =====  GET URL PARAMETERS  =====
	 */
	function urlParam(name) {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

		if ( results == null ) {
			return null;
		} else {
			return results[1] || 0;
		}
	}


	/*
	 * =====  INITIALIZE HOMEPAGE  =====
	 */
	function init() {
		hasScrolled();

		if ( $('#image-slider').length ) {
			new Splide('#image-slider', {
				type   : 'loop',
				fixedWidth: '60%',
				padding: {
					right: '20%',
					left : '20%',
				},
			}).mount();
		}
	};


	$(window).on('scroll', function(e) {
		didScroll = true;
	});


	$(window).on('resize', function(e) {
		stickyLimit = ( $(window).width() <= 980 ) ? 0 : 80;

		if ( $(window).width() > 980 ) {
			menuClose();
		}
	});


	setInterval(function() {
		if ( didScroll ) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);


	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if ( Math.abs(lastScrollTop - st) <= delta ) {
			return;
		}

		// If user scrolls down past the sticky limit
		if ( st <= stickyLimit ) {
			elHeader.removeClass('sticky');
		} else {
			elHeader.addClass('sticky');
		}

		lastScrollTop = st;
	}


	function menuClose() {
		$('body').removeClass('sidebar-open');

		$('#overlay').fadeOut('fast', function() {
			$('body').on('touchmove', function(e) {
				e.preventDefault();
			});
		});
	}


	function menuOpen() {
		$('#overlay').fadeIn('fast', function() {
			$('body').addClass('sidebar-open');
			$('body').off('touchmove');
		});
	}


	mobileToggle.on('click', function(e) {
		var main = document.getElementsByTagName('main')[0];

		if ( $('body').hasClass('sidebar-open') ) {
			menuClose();
		} else {
			menuOpen();
		}
	});


	init();
});