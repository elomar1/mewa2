$(document).ready(function () {
  var swiper = new Swiper(".swiperMainHome", {
    navigation: {
      nextEl: ".swiperMainHome .swiper-button-next",
      prevEl: ".swiperMainHome .swiper-button-prev",
    },
    pagination: {
      el: ".swiperMainHome .swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".swiperAds", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiperAds .swiper-button-next",
      prevEl: ".swiperAds .swiper-button-prev",
    },
  });
  var swiper = new Swiper(".swiperNews", {
    slidesPerView: 3,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: ".newsHome .swiper-button-next",
      prevEl: ".newsHome .swiper-button-prev",
    },
  });
  var swiper = new Swiper(".ourNumSwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: ".ourNum .swiper-button-next",
      prevEl: ".ourNum .swiper-button-prev",
    },
  });
  //   swiperNews
  $("#Map .clickable").click(function () {
    const area = $(this).attr("data-area");
    $(this).addClass("activeArea").siblings().removeClass("activeArea");
    console.log(area);
    $(".resultMap ul").each(function () {
      const list = $(this).attr("data-list");
      if (list.includes(area)) {
        $(this).addClass("activeList").siblings().removeClass("activeList");
      } else {
        $(this).removeClass("activeList");
      }
    });
  });

});

jQuery(function ($) {
  "use strict";

  var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

  var $counters = $(".counter");

  /* Start counting, do this on DOM ready or with Waypoints. */
  $counters.each(function (ignore, counter) {
    var waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 2000,
          delay: 10,
        });
        // this.destroy();
      },
      offset: "bottom-in-view",
    });
  });
});


/*
  
  
  
  class="clickable" data-area="Riyadh"
  class="clickable" data-area="Jouf"
  
  class="clickable" data-area="AlBaha"
  class="clickable" data-area="Makkah"
  class="clickable" data-area="Asir"
  class="clickable" data-area="northernBorderRegion"
  class="clickable" data-area="Najran"
  class="clickable" data-area="Jazan"
  class="clickable" data-area="easternRegion"
  */
