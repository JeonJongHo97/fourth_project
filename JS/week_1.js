$(function(){
    $('.week_1').mouseover(function () {
    $(this).find('.part_img').css('opacity','1').css('transform', 'translateX(0)');
  }).mouseout(function () {
    $(this).find('.part_img').css('opacity','0').css('transform', 'translateX(-40px)');
  });
})
