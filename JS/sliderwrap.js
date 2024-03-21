$(function(){
    $(".maintext").css({transform: 'translate(0)',opacity:1})
    $("#slider1 img").css({transform: 'translate(0)',opacity:1})

        let i = 0;

        $('#prev_1').click(function(){
            i--;
            if (i < 0) {
                i = $('.slide_1 li:last').index();
            }
            $('.slide_1 li').eq(i).stop().fadeIn('slow').css('display','flex');
            $('.slide_1 li').eq(i - 1).stop().fadeOut();

            $('.slide_1 li').eq(i).find('.maintext').css({transform: 'translate(0)',opacity:1});
            $('.slide_1 li').eq(i).find('img').css({transform: 'translate(0)',opacity:1})
            $('.slide_1 li').eq(i-1).find('.maintext').css({transform: 'translate(-300px)',opacity:0});
            $('.slide_1 li').eq(i-1).find('img').css({transform: 'translate(300px)',opacity:0})
        }
            
        )

        $('#next_1').click(function(){
            i++;
            if (i > $('.slide_1 li:last').index()) {
                i = 0;
            }
            $('.slide_1 li').eq(i).stop().fadeIn('slow').css('display','flex');
            $('.slide_1 li').eq(i - 1).stop().fadeOut();

            $('.slide_1 li').eq(i).find('.maintext').css({transform: 'translate(0)',opacity:1});
            $('.slide_1 li').eq(i).find('img').css({transform: 'translate(0)',opacity:1})
            $('.slide_1 li').eq(i-1).find('.maintext').css({transform: 'translate(-300px)',opacity:0});
            $('.slide_1 li').eq(i-1).find('img').css({transform: 'translate(300px)',opacity:0})
        }
            
        )

        
});