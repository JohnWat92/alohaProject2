$(function () {
	$('#submit').on('click', function () {
		var email = $('#email').val();
		var valid = isValidEmailAddress(email);
		if (email != ' ') {
			if (valid == true) {
				alert("Thank you for subscribing");
			} else {
				alert("Invalid email");
			}
		} else {
			alert('Please submit a valid email address');
		}
	});

	$('#email').on('focus', function () {
		$('#email').val('');
	})

	function isValidEmailAddress(emailAddress) {
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(emailAddress);
	};
	$('.carousel').flickity({
		cellAlign: 'center',
		contain: true,
		percentPostition: true,
		imagesLoaded: true,
		autoPlay: true,
		prevNexButtons: false
	});

	function scrollNav() {
		$('.navBar a').click(function () {
			$(".active").removeClass("active");
			$(this).closest('li').addClass("active");
			var theClass = $(this).attr("class");
			$('.' + theClass).parent('li').addClass('active');
			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 95
			}, 1000);
			return false;
		});
		$('.scrollTop a').scrollTop();
	}
	scrollNav();
});
