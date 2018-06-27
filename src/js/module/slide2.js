import enableInlineVideo from "iphone-inline-video";
export default {
  name: "slide2",
  mounted() {
    const videoElem = $(
      '<video width="1" height="1" webkit-playsinline playsinline autobuffer preload></video>' // autoplay
    );
    const video = videoElem.get(0);
    this.video = video;
    video.src = require("../../assets/hewu.mp4");
    video.className = "video";
    video.style.width = window.screen.width + "px";
    video.style.height = window.screen.height + "px";
    if (window.utils.isAndroid()) {
      console.log("android", video.style.width)
      video.style.width = window.innerWidth + "px";
      video.style.height = window.innerHeight + "px";
    }

    $(".slide2").append(videoElem);
    video.addEventListener("x5videoenterfullscreen", function () { });
    video.addEventListener("x5videoexitfullscreen", function () { });
  },
  video: $(".slide2 .video"),
  play() {
    this.video.play();
  },
  pause() {
    this.video.pause();
  }
};
