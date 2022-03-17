//preloader
$(window).bind("load", function () {
  jQuery("#loader").fadeOut("slow");
  jQuery("#preloader").delay(0).fadeOut();
});

//scroll to top script
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

// Accordian script

$(".hide_box").hide();

// without arrow
// $(document).on('click', '.slide_box', function(){
//  $(this).find('.hide_box').slideToggle();
//  $(this).siblings().find('.hide_box').slideUp();

// });

//with arrow
$(document).on("click", ".slide_box", function () {
  $(this).find(".hide_box").slideToggle();
  if ($(this).hasClass("active")) {
    console.log("yes");
    $(this).removeClass("active");
  } else {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  }
  $(this).siblings().find(".hide_box").slideUp();
});

//sticky navbar
window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/*responsive slider*/
$(".seller").slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

/*Slider Syncing*/
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
});

// horizontalmenu
$(function () {
  $(".ah-tab-wrapper").horizontalmenu({
    itemClick: function (item) {
      $(".ah-tab-content-wrapper .ah-tab-content").removeAttr(
        "data-ah-tab-active"
      );
      $(
        ".ah-tab-content-wrapper .ah-tab-content:eq(" + $(item).index() + ")"
      ).attr("data-ah-tab-active", "true");
      return false; //if this finction return true then will be executed http request
    },
  });
});

//custom modal
function openModalBox() {
  let modal = $(".modal, #mask");
  $(".open-modal").on("click", function () {
    let selectImg = $(this).parent().find(".selected").attr("src");
    $(".setImg").attr("src", selectImg);
    modal.fadeIn(300);
  });
  $(".close-modal, #mask").on("click", function () {
    modal.fadeOut(800);
  });
}
openModalBox();
