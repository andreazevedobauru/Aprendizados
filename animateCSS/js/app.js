
var animationName = 'animated bounce',
    animationEnds = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


$('#animacao').on('click', function(){
  $('#animacao').addClass(animationName).one(animationEnds, function(){
    $(this).removeClass(animationName);
  });
});
