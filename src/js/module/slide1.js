import { TimelineLite } from "gsap/TweenMax";

export default {
  mounted() {
    const $imgb = $(".imgb");
    const $imgt = $(".imgt");
    const $firstTit = $(".first-title");
    const $hewuLogo = $(".hewu-logo");
    const $chinaLogo = $(".logo");

    var tl = new TimelineLite();
    tl
      .from($imgb, 2, {
        opacity: 0
      })
      .from($imgb, 4, {
        rotation: 360,
        repeat: -1
      });
  }
};
