export default {
  mounted() {
    const $imgb = $(".imgb");
    const $imgt = $(".imgt");
    const $firstTit = $(".first-title");
    const $hewuLogo = $(".hewu-logo");
    const $chinaLogo = $(".logo");

    var tl = new TimelineLite();
    tl
      .from([$imgb, $imgt], 1.8, {
        opacity: 0,
        scaleX: 0.8,
        scaleY: 0.8
      })
      .addLabel("rotation")
      .from(
        $imgb,
        10,
        {
          rotation: 360,
          repeat: -1
        },
        "rotation"
      )
      .from(
        $imgt,
        10,
        {
          rotation: -360,
          repeat: -1
        },
        "rotation"
      );
    tl.from(
      $firstTit,
      3,
      {
        opacity: 0,
        scaleX: 0.8,
        scaleY: 0.8
      },
      "rotation"
    );
    tl.from(
      $hewuLogo,
      2,
      {
        opacity: 0,
        y: -60
      },
      "rotation"
    );
    tl.from(
      $chinaLogo,
      2,
      {
        opacity: 0,
        y: -40,
        onComplete() {
          $(".g-arrow").addClass("active");
        }
      },
      "rotation"
    );
  }
};
