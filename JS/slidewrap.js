$(function () {

    var page = 0;

    $('.prev').click(function () {

        page--;

        if (page < 0) {
            page = 0;
            return;
        }

        $('#slide').stop().animate({ marginLeft: -336 * page }, 800);

    });

    $('.next').click(function () {

        page++;

        if (page > $('#slide li').length - 3) {
            page = $('#slide li').length - 3;
            return;
        }

        $('#slide').stop().animate({ marginLeft: -336 * page }, 800);
    });


});