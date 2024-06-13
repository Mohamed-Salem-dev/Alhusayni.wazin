// =================================================================================================================

let menu = document.querySelector(".box-menu");
let listNav = document.querySelector(".navbar-collapse-items ul");
menu.onclick = () => {
  listNav.classList.toggle("open");
};

// ---------------------------------------------------
var wstick = $(window);
wstick.on('scroll',function() {    
   var scroll = wstick.scrollTop();
   if (scroll < 150) {
	$("#sticky-header").removeClass("sticky");
   }else{
	$("#sticky-header").addClass("sticky");
   }
});




// =================================================================================================================

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    // center: true,

    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1.4,
        slideBy: 1,
        // center: true,
        nav: true,
      },
      500: {
   
        items: 1.9,
        slideBy: 1,
        // center: true,

        nav: true,
      },
      600: {
        items: 3,
        nav: true,
        slideBy: 2,
      },
      800: {
        items: 4,
        nav: true,
        slideBy: 2,
      },
      1000: {
        slideBy: 3,

        items: 5,
        nav: true,
        loop: true,
      },
    },
  });
});
