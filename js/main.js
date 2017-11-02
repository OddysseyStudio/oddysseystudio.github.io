$(document).ready(function(){
  var scrollTop = 0;
  var navbar = $('.navbar');
  var brand = $('.navbar .navbar-brand');
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100 && navbar.is('.navbar-light')) {
      navbar.removeClass('navbar-transparent');
	  navbar.removeClass('navbar-light');
	  brand.addClass('navbar-brand-black');
	  

    } else if (scrollTop < 100 && !navbar.is('.navbar-light')) {
		navbar.addClass('navbar-light');

		if(!$(".navbar-collapse").hasClass("show"))
		{
			navbar.addClass('navbar-transparent');
			brand.removeClass('navbar-brand-black');
		}
    } 
    
  }); 

  $("button.navbar-toggler").on('click', function(event) {
      // Prevent default anchor click behavior
		event.preventDefault();

		if(!$(".navbar-collapse").hasClass("show"))
		{
			navbar.removeClass('navbar-transparent');
			brand.addClass('navbar-brand-black');
		}else{
			if(navbar.hasClass('navbar-light')){
				navbar.addClass('navbar-transparent');
				brand.removeClass('navbar-brand-black');
			}
		}
  });
  
  $("a.js-scroll-trigger").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } 
  });

  window.sr = ScrollReveal();
  sr.reveal('#story .container', {
    duration: 1000,
    delay: 200
  }, 200);
  sr.reveal('#team .container', {
    duration: 1000,
    delay: 100
  });
  sr.reveal('#wip .container', {
    duration: 1000,
    scale: 0.3,
    distance: '0px'
  }, 200);

  
});
