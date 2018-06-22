export default {
  name: "slide2",
  mounted() {
    const videoElem = $(
      '<video loop="loop" controls width="1" height="1" webkit-playsinline autobuffer></video>'
    );
    const video = videoElem.get(0);
    this.video = video;
    video.src = require("../../assets/hewu.mp4");
    $(".slide2").append(videoElem);
    const ref = this;
    videoElem.on("loadstart", function() {
      video.pause();
      ref.duration = video.duration;
      ref.loadEnd(video);
    });
  },
  getEnd(video) {
    let end = 0;
    try {
      end = video.buffered.end(0) || 0;
      end = parseInt(end * 1000 + 1) / 1000;
      console.log("video.buffered", end, this.duration);
    } catch (e) {}
    return end;
  },
  loadEnd(video) {
    const ref = this;
    const timer = setInterval(() => {
      let end = ref.getEnd(video),
        duration = ref.duration;
      if (end < duration) {
        return;
      }
      $(video).addClass("video");
      ref.play();
      clearInterval(timer);
    }, 1000);
  },
  play() {
    this.video.play();
  },
  pause() {
    this.video.pause();
  }
};
