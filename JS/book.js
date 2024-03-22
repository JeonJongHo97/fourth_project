$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "문학" },
    headers: { Authorization: "KakaoAK 9abc882f6b8d746d0677f13389a7a193" }
  })
    .done(function (msg) {

      const boxs = $('#list_a .box');

      for (let i = 0; i < boxs.length; i++) {

        $("#list_a >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#list_a >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


        let str = msg.documents[i].contents;
        let str2 = str.substring(0, 60);

        $("#list_a >.box").eq(i).append('<a href="#" class="btn">' + "Click" + "</a>");

      }

    });


  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유아" },
    headers: { Authorization: "KakaoAK 9abc882f6b8d746d0677f13389a7a193" }
  })
    .done(function (msg) {

      // for문 (8개)
      const boxs = $('#list_b .box');


      for (let i = 0; i < boxs.length; i++) {

        $("#list_b >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#list_b >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#list_b >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


        let str = msg.documents[i].contents;
        let str2 = str.substring(0, 60);

        $("#list_b >.box").eq(i).append('<a href="#" class="btn">' + "Click" + "</a>");

      }
    });


  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "경제" },
    headers: { Authorization: "KakaoAK 9abc882f6b8d746d0677f13389a7a193" }
  })
    .done(function (msg) {

      // for문 (8개)
      const boxs = $('#list_b .box');


      for (let i = 0; i < boxs.length; i++) {

        $("#list_c >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#list_c >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#list_c >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


        let str = msg.documents[i].contents;
        let str2 = str.substring(0, 60);

        $("#list_c >.box").eq(i).append('<a href="#" class="btn">' + "Click" + "</a>");

      }

    });