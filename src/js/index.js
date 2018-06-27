import { TimelineLite } from "gsap/TweenMax";
import oSlide1 from "./module/slide1";
import oSlide2 from "./module/slide2";
import oSlide3 from "./module/slide3";
import oSlide4 from "./module/slide4";
import oSlide5 from "./module/slide5";
import oSlide6 from "./module/slide6";
import oSlide7 from "./module/slide7";
import oSlide8 from "./module/slide8";
import oSlide9 from "./module/slide9";
import utils from "./utils/index";
import configShareConfig from "./utils/share";

window.utils = utils;
window.TimelineLite = TimelineLite;
let lastIndex = false;
$(function () {
  oSlide2.mounted();
  const globalSwiper = new Swiper("#globalSwiper", {
    direction: "vertical",
    keyboard: true,
    // initialSlide: 8,
    on: {
      slideChange() {
        switchAction(this.activeIndex);
      },
      slideChangeTransitionEnd() {
        if (this.isEnd) {
          if (!lastIndex) {
            lastIndex = true;
          } else {
            this.slideTo(0);
            lastIndex = false;
          }
        }
      },
      init() {
        oSlide1.mounted();
        oSlide3.mounted();
        oSlide4.mounted();
        oSlide5.mounted();
        oSlide6.mounted();
        oSlide7.mounted();
        oSlide8.mounted();
        oSlide9.mounted();
        configShareConfig();
      }
    }
  });



  document.addEventListener(
    "WeixinJSBridgeReady",
    function () {
      const video = document.querySelector("video");
      video.play();
      video.pause();
      $(".slide2").removeClass("first-bg");
      video.addEventListener("ended", function (e) {
        // 播放结束时触发
        if (utils.isiOS()) {
          globalSwiper.slideTo(2);
        }
      });
    },
    false
  );
  $("img").on("click", function (event) {
    event.preventDefault();
    return false;
  });
});
function switchAction(index) {
  const $video = $(".slide2 .video");
  const video = document.querySelector("video");
  if ($video.length != 0) {
    video.pause();
  }
  switch (index) {
    case 0:
      break;
    case 2:
      if ($video.length != 0) {
        video.play();
      }
      break;
    case 1:
      oSlide9.replay();
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      const o = [oSlide3, oSlide4, oSlide5, oSlide6, oSlide7, oSlide8];
      o[index - 3].replay();
      break;
    default:
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
