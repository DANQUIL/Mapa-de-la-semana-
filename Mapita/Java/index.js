$(document).ready(function(){
  $('.main-btn').click(function(){
    $(this).closest('.social-btn').toggleClass('open');
  });
});