$(function(){

    $('#gear_logo').mouseover(function(){
        $(this).children('#gear').stop().slideDown();
      }).mouseout(function(){
        $('#gear').stop().slideUp();
      });

});