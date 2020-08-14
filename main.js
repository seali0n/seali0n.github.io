$(document).ready(function() {
	$('a[href^="#"]').click(function(e) {
		e.preventDefault();
		var id = this.hash;
		$('html, body').animate({scrollTop : $(id).offset().top}, 200);
	});	
	
	$(function() {
		if(window.location.hash){
			$('html, body').animate({scrollTop : $(window.location.hash + "-section").offset().top}, 1000);
			return false;
		}
	});
	
	//Checks if window is at top if not display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').css("visibility", "visible");
			$('.scrollToTop').fadeIn(300);
		} else {
			$('.scrollToTop').fadeOut(300);
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},350);
		return false;
	});
	
    
	//lightbox function
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
	});
    
    //carousel adjustments
    $('.carousel').carousel({
        interval: false
    });

});