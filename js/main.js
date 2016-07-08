$(document).ready(function(){

  $('.signin').on('click', function(){
    $('.modal').fadeIn().css("display", "block");
  });
  $('.close').on('click', function(){
    $('.modal').fadeOut();
  });


});
