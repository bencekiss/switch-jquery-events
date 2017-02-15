$(function(){
  var lightText = "Now it is light";
  var darkText = "Now it is dark";
  $('body').addClass('light');
  $('.switch button').on('click', function(){
    $(this).toggleClass('off on');
    $('body').toggleClass('light dark')
    $('.status').text($('body').attr('class') === 'light' ? lightText : darkText)
  });
  $('.status').html(lightText)
});
