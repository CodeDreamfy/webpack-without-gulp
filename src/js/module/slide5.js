export default {
  mounted() {
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
  }
};
