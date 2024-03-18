$(function () {

  $('#booklist li').click(function () {
    let i = $(this).index();

    $('.list').eq(i).show().siblings('.list').hide();
  });


  $("#booklist li").click(function () {
    $("#titlelist").text($(this).text());
  });

});
