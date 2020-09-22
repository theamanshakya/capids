$(document).ready(function() {

	"use strict";

	/* ================= sliders =================  */
		/* =================  Owl Carousel top slider =============  */
			$("#top-slider").owlCarousel({
				loop: true,
				nav: true,
				animateOut: 'fadeOutDown',
				animateIn: 'fadeInUp',
				dots: false,
				autoplay:true,
				autoplayTimeout: 4000,
				autoplayHoverPause:true,
				smartSpeed:1000,
				margin : 0,
				items:1
			});

			/* =================  Owl Carousel for Logos =============  */

			$("#services").owlCarousel({
				loop: true,
				nav: false,
				animateOut: 'fadeOutLeft',
    			animateIn: 'bounceInRight',
				dots: false,
				autoplay:true,
		 	    autoplayTimeout: 4000,
				autoplayHoverPause:true,
		 	    smartSpeed:1000,
				margin : 50,
				responsiveClass: true,
				responsive: {
					0: {
							items: 1,
					},
					575: {
							items: 1,
					},
					767:{
						items: 1,
					},
					991:{
						items:1,
					}
				}
			});

			/* =================  Owl Carousel for Logos =============  */

			$("#logos").owlCarousel({
				loop: true,
				nav: false,
				animateOut: 'fadeOutLeft',
    			animateIn: 'bounceInRight',
				dots: false,
				autoplay:true,
		 	    autoplayTimeout: 4000,
				autoplayHoverPause:false,
		 	    smartSpeed:1000,
				margin : 50,
				responsiveClass: true,
				responsive: {
					0: {
							items: 3,
					},
					575: {
							items: 4,
					},
					767:{
						items: 5,
					},
					991:{
						items:7,
					}
				}
			});

			/* ============  Owl Carousel For clients ============== */

			$("#clients_slider").owlCarousel({
				autoplay: true,
				autoplayTimeout: 5000,
				items: 3,
				loop: true,
				margin: 20,
				nav: true,
				smartSpeed:1000,
				pagination: false,
				dots: false,
				responsiveClass: true,
				responsive: {
					0: {
							items: 1,
					},
					767: {
							items: 2,
					},
					1199: {
							items: 3,
					}
				}
			});

			/* ============  Owl Carousel For Team  ============== */

			$("#team_slider").owlCarousel({
				autoplay: true,
				autoplayTimeout: 5000,
				loop: true,
				margin: 18,
				nav: false,
				pagination: false,
				dots: true,
				smartSpeed:1000,
				responsiveClass: true,
				responsive: {
					0: {
							items: 1,
					},
					575: {
							items: 2,
					},
					767: {
							items: 3,
					},
					1199: {
							items: 4,
					}
		  	}
		  });

	// ============== counter ==================== //

	$(".counter-value").countimator();

	/* =================  mailChimp  =================  */

	var form = $('#subscribe_form');

		if (form.length) {
			form.ajaxChimp({
				callback: mailchimpCallback,
				// Replace the URL above with your mailchimp URL (put your URL inside '').
				url: 'https://ah-theme.us17.list-manage.com/subscribe/post?u=1deb8f74c591046810c8ac1ec&amp;id=ebe56afd26'
			});
		}

		// callback function when the form submitted, show the notification box
		function mailchimpCallback(resp) {

			if (resp.result === 'success') {
				$('.subscription_success').html(resp.msg).slideDown().addClass('active-message');
				$('.subscription_error').slideUp().removeClass('active-message');
			} else {
				$('.subscription_error').html(resp.msg).slideDown().addClass('active-message');
				$('.subscription_success').slideUp().removeClass('active-message');
			}
			setTimeout(function () {
				$('.active-message').slideUp('slow', 'swing');
			}, 4000);
		}
		/* =================  portfolio  =================  */

		$(function() {
			var selectedClass = "";
			$(".fil-cat").on('click',function(){
				$('.fil-cat').removeClass('active');
				$(this).addClass('active');
				selectedClass = $(this).attr("data-rel");
				$("#portfolio_items").fadeTo(100, 0.1);
				$("#portfolio_items .portfolio_item").not("."+selectedClass).fadeOut().removeClass('scale-anm');
				setTimeout(function() {
					$("."+selectedClass).fadeIn().addClass('scale-anm');
					$("#portfolio_items").fadeTo(300, 1);
				}, 300);
			});
		});
});

/* =================  window load =================  */

$(window).on('load',function(){
		/*----- loader ---------*/
		$('.loader').fadeOut();
    
    /*----- WoW Animations ---------*/
      wow = new WOW();
    	wow.init();
});

/* =================  window Scroll =================  */

$(window).on('scroll , load',function(){
		var window_top = $(window).scrollTop();

		/*---------- menu fixed ----------*/

		if(window_top > 50){
			$('.site_header').removeClass('position-absolute').addClass('header-scroll_bg_light fixed-top');
		}
		else {
			$('.site_header.fixed-top').removeClass('header-scroll_bg_light fixed-top').addClass('position-absolute');
		}

		/*---------- menu active item ----------*/

		$('section').each(function () {
			var currLink = $(this);
			var refElement = $(currLink).attr("id");
				if ($(this).position().top -100 <= window_top) {
					if($('.nav-item .nav-link[href*='+refElement+']').length>0){
						$('.nav-item.active').removeClass('active');
						$('.nav-item .nav-link[href*='+refElement+']').parent().addClass('active');
					}
				}
		});
	/*---------- go to top button ---------*/
    if(window_top > 600){
      $('.goto_top').fadeIn();
    }
    else {
      $('.goto_top').fadeOut();
	}
	
});
/*---------- go to top button Click ---------*/
$('.goto_top').on('click',function(e){
    e.preventDefault();
		$('body , html').animate({
			scrollTop: 0
		},1000);
})
/* =================  menu click animate =================  */

$('.nav-item .nav-link , .top-btn').on('click',function(){
		var $target = $(this).attr('href');
		if($target != '#'){
			$('body , html').animate({
				scrollTop: $($target).position().top
			},1000);
			$('.navbar-collapse').removeClass('show');
			$('.navbar-toggler svg').toggleClass('fa-times').toggleClass('fa-bars');
		}
});
$('.navbar-toggler').on('click',function(){
	$('.navbar-toggler svg').toggleClass('fa-times').toggleClass('fa-bars');
});
/* =================  play video popup =================  */

$('.watch_video').on('click',function(e){
		e.preventDefault();
		$('.video_popup').css('display','flex');
		setTimeout(function () {
			$('.video_popup').css({
				'transform':'scale(1,1)',
				'opacity':'1'
			});
		}, 50);
});
$('.video_popup').on('click',function(e){
		var $target = e.target.nodeName;
		var video_src = $(this).find('iframe').attr('src');
		if($target != 'IFRAME'){
			$('.video_popup').addClass('fadeOutRight').delay(1000).fadeOut();
			setTimeout(function () {
				$('.video_popup').removeClass('fadeOutRight');
			}, 1500);
			$('.video_popup iframe').attr('src'," ");
			$('.video_popup iframe').attr('src',video_src);
		}
});
// =================  portfolio popup  =================  //
$('.portfolio .zoom').on('click',function(e){
	e.preventDefault();
	var img_url = $(this).parents('.portfolio').find('img').attr('src');
	$('.photo_zoom').find('img').attr('src',img_url);
	$('.photo_zoom').css('display','flex');
});
$('.photo_zoom').on('click',function(e){
	var $target = e.target.nodeName;
	if($target != 'IMG'){
		$('.photo_zoom').addClass('fadeOutDown').delay(1000).fadeOut();
		setTimeout(function () {
			$('.photo_zoom').removeClass('fadeOutDown');
		}, 1500);
	}
});

// Service Section //

$("#technologies-button").on("click" , function(){
	$("#services-button").removeClass('bar-button-style')
	$("#technologies-button").addClass('bar-button-style');
	$("#services-content").removeClass('active').removeClass('bar-button-style');	
	$("#technologies-content").addClass('active').addClass('bar-button-style');
})

$("#services-button").on("click" , function(){
	$("#technologies-button").removeClass('bar-button-style');
	$("#services-button").addClass('bar-button-style');
	$("#technologies-content").removeClass('active').removeClass('bar-button-style');	
	$("#services-content").addClass('active').addClass('bar-button-style');	
})


$("#contact_form").submit(function (e) {
	e.preventDefault();
	var formData = {
		'name'              : $('input[name=cname]').val(),
		'email'             : $('input[name=cemail]').val(),
		'cphone'    : $('input[name=cmessage]').val(),
		'cphone'    : $('input[name=cmessage]').val()
	};

	$.ajax({
		type : 'POST',
		url : "https://amanshakyaa.000webhostapp.com/contact.php",
		data : formData,
		dataType : 'json',
		encode : true
	}).done(function (data) {
		console.log(data);
	})
})