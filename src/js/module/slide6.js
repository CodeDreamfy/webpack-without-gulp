export default {
  mounted() {
    const $title = $('.slide6 .conw-common-title'),
      $titleTxt = $('.slide6 .conw-common-title .text'),
      $content1 = $('.slide6 .cont-1'),
      $item1 = $('.slide6 .item1'),
      $item2 = $('.slide6 .item2'),
      $item3 = $('.slide6 .item3'),
      $item4 = $('.slide6 .item4');
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
    tl.from($content1, 0.8, {
      opacity: 0,
      y: -10,
    })
      .addLabel('time1')
      .from(
        $item1,
        1.2,
        {
          opacity: 0,
          y: 12,
        },
        'time1',
      )
      .from(
        $item2,
        1.2,
        {
          opacity: 0,
          y: 12,
          delay: 0.6,
        },
        'time1',
      )
      .from(
        $item3,
        1.2,
        {
          opacity: 0,
          y: 12,
          delay: 1.2,
        },
        'time1',
      )
      .from(
        $item4,
        1.2,
        {
          opacity: 0,
          y: 12,
          delay: 1.8,
        },
        'time1',
      );
    // tl.pause();
  },
  replay() {
    if (this.timeline) {
      this.timeline.restart();
    }
  },
};
