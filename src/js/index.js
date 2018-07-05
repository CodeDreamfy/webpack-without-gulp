import { TimelineLite } from "gsap/TweenMax";

import utils from "./utils/index";
import configShareConfig from "./utils/share";

window.utils = utils;
window.TimelineLite = TimelineLite;
let lastIndex = false;
$(function() {
  const globalSwiper = new Swiper("#globalSwiper", {
    direction: "vertical",
    keyboard: true
  });

  document.addEventListener(
    "WeixinJSBridgeReady",
    function() {
      const video = document.querySelector("video");
      video.play();
      video.pause();
      video.addEventListener("ended", function(e) {
        // 播放结束时触发
        if (utils.isiOS()) {
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
