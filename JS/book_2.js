$(function () {


    let search = ["인생", "동물", "성장", "아이돌"];

    for (let i = 0; i < search.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i] },
            async: false,
            headers: { Authorization: "KakaoAK 9abc882f6b8d746d0677f13389a7a193" }
        })
            .done(function (msg) {

                console.log(msg);

                // const divs = $('.book');

                $('.week_1').eq(i).append("<img src='" + msg.documents[1].thumbnail + "'/>");
                $('.week_1').eq(i).append("<h3>" + msg.documents[1].title + "</h3>");
                $('.week_1').eq(i).append("<h6>" + msg.documents[1].authors + "</h6>");


                let str = msg.documents[1].contents;
                let str2 = str.substring(0, 60);

                $('.week_1').eq(i).append("<p>" + str2 + "</p>");
            });
    }
});