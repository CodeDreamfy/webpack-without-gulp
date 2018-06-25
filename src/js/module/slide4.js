export default {
  mounted() {
    const $title = $('.slide4 .conw-common-title'),
      $titleTxt = $('.slide4 .conw-common-title .text'),
      $content1 = $('.slide4 .content-1'),
      $contentArrow_1 = $('.slide4 .ct-arr-1'),
      $content2 = $('.slide4 .content-2'),
      $contentArrow_2 = $('.slide4 .ct-arr-2'),
      $content3 = $('.slide4 .content-3');
    this.timeline = new TimelineLite();
    const tl = this.timeline;
    tl.addLabel('start');
    tl.from(
      $title,
      1.2,
      {
        opacity: 0,
      },
      'start',
    ).from($titleTxt, 1.4, {
      opacity: 0,
      y: 10,
    });
    tl.from($content1, 1.4, {
      opacity: 0,
      y: -10,
    })
      .from($contentArrow_1, 0.5, {
        opacity: 0,
        y: -10,
      })
      .from($content2, 1.4, {
        opacity: 0,
        y: -10,
      })
      .from($contentArrow_2, 0.5, {
        opacity: 0,
        y: -10,
      })
      .from($content3, 1.4, {
        opacity: 0,
        y: -10,
      });
    tl.pause();
  },
  replay() {
    if (this.timeline) {
      this.timeline.restart();
    }
  },
};
