export default {
  mounted() {
    const $title = $('.slide8 .conw-common-title'),
      $titleTxt = $('.slide8 .conw-common-title .text'),
      $num1 = $('.slide8 .num1'),
      $num2 = $('.slide8 .num2'),
      $num3 = $('.slide8 .num3'),
      $num4 = $('.slide8 .num4'),
      $num5 = $('.slide8 .num5'),
      $line1 = $('.slide8 .line1'),
      $line2 = $('.slide8 .line2'),
      $line3 = $('.slide8 .line3'),
      $line4 = $('.slide8 .line4'),
      $contentext1 = $('.slide8 .content-text-1'),
      $contentext2 = $('.slide8 .content-text-2'),
      $contentext3 = $('.slide8 .content-text-3'),
      $contentext4 = $('.slide8 .content-text-4'),
      $contentext5 = $('.slide8 .content-text-5');
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
    tl.from($num1, 1, {
      opacity: 0,
    })
      .from($line1, 1.4, {
        height: 0,
      })
      .from(
        $contentext1,
        0.8,
        {
          x: '100%',
          opacity: 0,
        },
        'time1',
      )
      .addLabel('time2')
      .from($num2, 1, {
        opacity: 0,
      })
      .from($line2, 1.4, {
        height: 0,
      })
      .from(
        $contentext2,
        0.8,
        {
          x: '-100%',
          opacity: 0,
        },
        'time2',
      )
      .addLabel('time3')
      .from($num3, 1, {
        opacity: 0,
      })
      .from($line3, 1.4, {
        height: 0,
      })
      .from(
        $contentext3,
        0.8,
        {
          x: '100%',
          opacity: 0,
        },
        'time3',
      )
      .addLabel('time4')
      .from($num4, 1, {
        opacity: 0,
      })
      .from($line4, 1.4, {
        height: 0,
      })
      .from(
        $contentext4,
        0.8,
        {
          x: '-100%',
          opacity: 0,
        },
        'time4',
      )
      .addLabel('time5')
      .from($num5, 1, {
        opacity: 0,
      })
      .from(
        $contentext5,
        0.8,
        {
          x: '100%',
          opacity: 0,
        },
        'time5',
      );

    tl.pause();
  },
  replay() {
    if (this.timeline) {
      this.timeline.restart();
    }
  },
};
