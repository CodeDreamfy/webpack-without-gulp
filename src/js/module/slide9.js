export default {
  mounted() {
    const $title = $('.slide9 .conw-common-title'),
      $titleTxt = $('.slide9 .conw-common-title .text'),
      $cont1 = $('.slide9 .cont-1'),
      $cont2 = $('.slide9 .cont-2'),
      $cont3 = $('.slide9 .cont-3'),
      $apply = $('.slide9 .apply-btn');
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
    tl.addLabel('time1');
    tl.from(
      $cont1,
      0.5,
      {
        opacity: 0,
        x: '100%',
      },
      'time1',
    )
      .from($cont2, 0.5, {
        opacity: 0,
        x: '100%',
      })
      .from($cont3, 0.5, {
        opacity: 0,
        x: '100%',
      })
      .from($apply, 1, {
        opacity: 0,
        y: 30,
      });
    tl.pause();
  },
  replay() {
    if (this.timeline) {
      this.timeline.restart();
    }
  },
};
