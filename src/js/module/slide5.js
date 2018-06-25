export default {
  mounted() {
    const $title = $('.slide5 .conw-common-title'),
      $titleTxt = $('.slide5 .conw-common-title .text'),
      $center = $('.slide5, .content1 .ct-center'),
      $line1 = $('.slide5, .content1 .ct-center .ct-line1'),
      $line2 = $('.slide5, .content1 .ct-center .ct-line2'),
      $line3 = $('.slide5, .content1 .ct-center .ct-line3'),
      $line4 = $('.slide5, .content1 .ct-center .ct-line4'),
      $line5 = $('.slide5, .content1 .ct-center .ct-line5'),
      $diangong = $('.slide5, .content1  .ct-diangong'),
      $huanjing = $('.slide5, .content1  .ct-huanjing'),
      $anfang = $('.slide5, .content1  .ct-anfang'),
      $chuandai = $('.slide5, .content1  .ct-chuandai'),
      $jiadian = $('.slide5, .content1  .ct-jiadian');

    this.timeline = new TimelineLite();
    const tl = this.timeline;
    tl.addLabel('start');
    // tl.from(
    //   $title,
    //   1.2,
    //   {
    //     opacity: 0,
    //   },
    //   'start',
    // ).from($titleTxt, 1.4, {
    //   opacity: 0,
    //   y: 10,
    // });
    // tl.from($center, 1.6, {
    //   opacity: 0,
    // }).from($line1, 0.5, {
    //   opacity: 0,
    // });
    //   .from($diangong, 1, {
    //     opacity: 0,
    //   })
    //   .from($line2, 0.5, {
    //     opacity: 0,
    //   })
    //   .from($huanjing, 1, {
    //     opacity: 0,
    //   })
    //   .from($line3, 0.5, {
    //     opacity: 0,
    //   })
    //   .from($anfang, 1, {
    //     opacity: 0,
    //   })
    //   .from($line4, 0.5, {
    //     opacity: 0,
    //   })
    //   .from($chuandai, 1, {
    //     opacity: 0,
    //   })
    //   .from($line5, 0.5, {
    //     opacity: 0,
    //   })
    //   .from($jiadian, 1, {
    //     opacity: 0,
    //   });
    this.addEvent();
  },
  addEvent() {
    const $el = $('.slide5 .ct-out-item');
    $el.on('click', function() {
      if ($(this).hasClass('active')) {
        return false;
      }
      $el
        .removeClass('active')
        .next()
        .fadeOut();
      $(this)
        .addClass('active')
        .next()
        .fadeIn();
    });
  },
  replay() {
    if (this.timeline) {
      this.timeline.restart();
    }
  },
};
