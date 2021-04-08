$(document).ready(function () {

	// Open Submenu
    $('.menu .has-child').on('click', function(){
    	if($(this).hasClass('active')){
	    	$(this).removeClass('active');
    	}else{
    		$('.menu .has-child').removeClass('active');
	    	$(this).toggleClass('active');
    	}
    });


    // Close Main menu
    $('.btn-menu-close').on('click', function(){
    	$('.btn-menu').show();
    	$('.main-menu').toggleClass('close');
    	$('body').toggleClass('menu-close');
    });

    // Open Main menu
    $('.btn-menu').on('click', function(){
    	$('.btn-menu').hide();
    	$('.main-menu').toggleClass('close');
    	$('body').toggleClass('menu-close');
    });

    // Switch Language Button
    $('.btn-lang').on('click', function(){
        $('body').toggleClass('ar');
        if($('body').hasClass('ar')){
            $(this).html('EN');
        }else{
            $(this).html('AR');
        }
    });
});