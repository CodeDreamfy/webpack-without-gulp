import oSlide1 from "./module/slide1";
import oSlide2 from "./module/slide2";
import oSlide5 from "./module/slide5";
import utils from "./utils/index";

window.utils = utils;
$(function() {
  const globalSwiper = new Swiper("#globalSwiper", {
    direction: "vertical",
    // initialSlide: 5,
    on: {
      slideChange() {
        switchAction(this.activeIndex);
      },
      init() {
        oSlide1.mounted();
        oSlide2.mounted();
        oSlide5.mounted();
      }
    }
  });

  const video = document.querySelector("video");

  document.addEventListener(
    "WeixinJSBridgeReady",
    function() {
      video.play();
      $(".slide2").removeClass("first-bg");
      video.pause();
      video.addEventListener("ended", function(e) {
        // 播放结束时触发
        if (utils.isiOS) {
          globalSwiper.slideTo(2);
        }
      });
    },
    false
  );
  $("img").on("click", function(event) {
    event.preventDefault();
    return false;
  });
});
function switchAction(index) {
  const $video = $(".slide2 .video");
  switch (index) {
    case 2:
      if ($video.length != 0) {
        oSlide2.play();
      }
      return false;
    default:
      if ($video.length != 0) {
        oSlide2.pause();
      }
      return false;
  }
}

function lazyLoadImg() {
  const imgInfo = [
    {
      url: `./assets/slide0/indexbg.jpg`,
      class: `first-screen-bg`
    },
    {
      url: `./assets/logo.png`,
      class: "logo"
    },
    {
      url: `./assets/slide0/i-1.png`,
      class: "imgb iimg"
    },
    {
      url: `./assets/slide0/i-2.png`,
      class: "imgt iimg"
    },
    {
      url: `./assets/hewu.png`,
      class: "hewu-logo"
    }
  ];
}
