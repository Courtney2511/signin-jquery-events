$(document).ready(function(){
  console.log('ready');
  $('.signin').on('click', function(){
    $('.modal').fadeIn().css("display", "block");
  });
});
