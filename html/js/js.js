$(document).ready(function(){


	$('.header__player__popup__x').click(function () {
		$(this).parent().addClass('dn');
		return false;
	});

	$(document).keyup(function(event){
		if (event.keyCode == 27) {
			$('#overlay').css('display', 'none');
			$('.popup').css('display', 'none');
		}
	});
	$('#overlay').click(function(){
		$('#overlay').css('display', 'none');
		$('.popup').css('display', 'none');
	});

	$('.footer__sots5').click(function(){
		$('#overlay').css('display', 'block');
		$('.popup__ask').css('display', 'block');
	});

	$('.header__enter').click(function(){
		$('#overlay').css('display', 'block');
		$('.popup__login').css('display', 'block');
	});

	$('.popup__login .reg').click(function(){
		$('.popup__login').css('display', 'none');
		$('.popup__reg').css('display', 'block');
	});

	if($('.datepicker').length>0){
		$( ".datepicker" ).datepicker({
			showOn: "button",
			buttonImage: "images/calendar.png",
			buttonImageOnly: true
		});
	}

	jQuery('input[placeholder], textarea[placeholder]').placeholder();
});
