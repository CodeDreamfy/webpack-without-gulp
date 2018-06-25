export default {
  mounted() {
    const $title = $('.slide3 .title'),
      $cont1Bg = $('.slide3 .con-bg'),
      $cont1Txt = $('.slide3 .con-info'),
      $cont2c2_1 = $('.slide3 .content-2 .c2-1'),
      $cont2c2_2 = $('.slide3 .content-2 .c2-2'),
      $cont2c2_3 = $('.slide3 .content-2 .c2-3'),
      $cont2line1 = $('.slide3 .content-2 .line1'),
      $cont2line2 = $('.slide3 .content-2 .line2');

    this.timeline = new TimelineLite();
    const tl = this.timeline;
    tl.addLabel('start');
    tl.from($title, 1.2, {
      opacity: 0,
      y: 30,
    })
      .addLabel('time1')
      .from(
        $cont1Bg,
        1,
        {
          opacity: 0,
        },
        'time1',
      )
      .from($cont1Txt, 1.4, {
        opacity: 0,
      });
    tl.from($cont2c2_1, 0.8, {
      opacity: 0,
    })
      .from($cont2line1, 0.6, {
        opacity: 0,
        width: 0,
      })
      .from($cont2c2_2, 0.8, {
        opacity: 0,
      })
      .from($cont2line2, 0.6, {
        opacity: 0,
        width: 0,
      })
      .from($cont2c2_3, 0.8, {
        opacity: 0,
      });
    tl.pause();
  },
  replay() {
    if (this.timeline) {
      this.timeline.restart();
    }
  },
};
