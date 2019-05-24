$(document).ready(function(){


// swiper.js configuration
$('.bxslider').bxSlider({
    speed: 80000,
    ticker: true,
    tickerHover: true,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 0,
  });

  $('.items__item').hover(function(){
    $(this).find('.item__info').fadeIn(500);
  }, function() {
    $(this).find('.item__info').fadeOut(500);
  });


});
