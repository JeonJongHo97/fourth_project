$(function () {


    let search = ["현명", "연애", "마음", "아픔","주식","코인","행복","운동"];

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

                $('.week_1').eq(i).append("<img src='" + msg.documents[1].thumbnail + "'/>");
                $('.week_1').eq(i).append("<h3>" + msg.documents[1].title + "</h3>");

                let str = msg.documents[1].contents;
                let str2 = str.substring(0, 60);
                
            });
    }
});