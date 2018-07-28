
$(window).on('load',function(){
	var Body = $('body');
    Body.addClass('preloader-site');
});
$(document).ready(function() {
  	$('.preloader-wrapper').fadeOut(3000);
   	$('body').removeClass('preloader-site');
});