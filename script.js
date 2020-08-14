$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 100,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

// parallax
// about
$(window).on("load", function () {
  $(".pKiri").addClass("Muncul");
  $(".pKanan").addClass("Muncul");
});

// parallax jumbotron
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h4").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1 + "%)",
  });

  $(".jumbotron .btn").css({
    transform: "translate(0px, " + wScroll / 1 + "%)",
  });
});
