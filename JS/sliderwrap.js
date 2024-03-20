$(function(){

        let i = 0;

        $('#next').click(function(){
            i++;
            if (i > $('.slide_1 li:last').index()) {
                i = 0;
            }
            $('.slide_1 li').eq(i).stop().fadeIn('slow').css('display','flex');
            $('.slide_1 li').eq(i - 1).stop().fadeOut();
        }
            
        )

        $('#prev').click(function(){
            i--;
            if (i > $('.slide_1 li:first').index()) {
                i = 0;
            }
            $('.slide_1 li').eq(i).stop().fadeIn('slow').css('display','flex');
            $('.slide_1 li').eq(i - 1).stop().fadeOut();
        }
            
        )
});