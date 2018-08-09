
$(document).ready(function() {
  $('#trigger').mouseover(function() {
    $('#overlay').fadeIn(300);  
  });
  $('#close').click(function() {
    $('#overlay').fadeOut(300);
  });
});
