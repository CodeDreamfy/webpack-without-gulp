import oSlide2 from "./module/slide2";
$(function() {
  const globalSwiper = new Swiper("#globalSwiper", {
    direction: "vertical"
  });
  oSlide2.mounted();
});
