$(function () {

  $('.infoMenu').click(function () {
    let idx = $(this).index()
    $('.infoMenu').removeClass('active')
    $(this).addClass('active')

    $('.bookInfo').eq(idx).show().siblings().hide()
  })

});


$(function () {

  $.get("./sub_txt/목차.txt", function (data) {
    $("#detail").html(data);

  });
  $.get("./sub_txt/작가정보.txt", function (data) {
    $("#bookIntro").html(data);

  });
  $.get("./sub_txt/책소개.txt", function (data) {
    $("#basicsInfo").html(data);

  });

});
