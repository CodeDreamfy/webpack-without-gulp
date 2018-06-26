export default {
  mounted() {
    const $title = $(".slide5 .conw-common-title"),
      $titleTxt = $(".slide5 .conw-common-title .text");

    this.timeline = new TimelineLite();
    const tl = this.timeline;
    tl.addLabel("start");
    tl
      .from(
        $title,
        1.2,
        {
          opacity: 0
        },
        "start"
      )
      .from($titleTxt, 1.4, {
        opacity: 0,
        y: 10
      });
    tl
      .from($(".ct-center"), 0.5, {
        opacity: 0
      })
      .from($(".line1"), 0, {
        width: 0
      })
      .from($(".line1>i"), 0.3, {
        width: 0
      })
      .from($(".ct-diangong"), 0.5, {
        opacity: 0
      })
      .from($(".line2"), 0, {
        width: 0
      })
      .from($(".line2>i"), 0.3, {
        width: 0
      })
      .from($(".ct-huanjing"), 0.5, {
        opacity: 0
      })
      .from($(".line3"), 0, {
        width: 0
      })
      .from($(".line3>i"), 0.3, {
        width: 0
      })
      .from($(".ct-anfang"), 0.5, {
        opacity: 0
      })
      .from($(".line4"), 0, {
        width: 0
      })
      .from($(".line4>i"), 0.3, {
        width: 0
      })
      .from($(".ct-chuandai"), 0.5, {
        opacity: 0
      })
      .from($(".line5"), 0, {
        width: 0
      })
      .from($(".line5>i"), 0.3, {
        width: 0
      })
      .from($(".ct-jiadian"), 0.5, {
        opacity: 0,
        onComplete() {
          $(".slide5 .ct-jiadian").addClass("active");
          $(".slide5 .tip-jiadian").fadeIn();
        }
      });

    this.addEvent();
  },
  addEvent() {
    const $el = $(".slide5 .ct-out-item");
    $el.on("click", function() {
      if ($(this).hasClass("active")) {
        return false;
      }
      $el
        .removeClass("active")
        .next()
        .fadeOut();
      $(this)
        .addClass("active")
        .next()
        .fadeIn();
    });
  },
  replay() {
    if (this.timeline) {
      this.timeline.restart();
    }
  }
};
