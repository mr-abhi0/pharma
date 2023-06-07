$(window).scroll(function(){
   if($(this).scrollTop() > 1){
     $('nav').addClass("sticky");
   }
   else{
    $('nav').removeClass("sticky");
   }
})

// slick
$(document).ready(function(){
  $('.product-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
  });
});
	