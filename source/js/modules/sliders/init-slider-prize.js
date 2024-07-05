const Swiper = global.Swiper;
let init = false;
function initPrizeSwiper() {
  let mobile = 768;
  let allWorks = document.querySelectorAll('[data-validate="slider"]');

  const buildSlider = (element) => {
    return new Swiper(element, {
      speed: 300,
      slidesPerView: 2,
      slidesPerColumn: 1,
      loop: true,
    });
  };


  if (document.body.clientWidth <= mobile) {
    if (!init) {
      init = true;
      allWorks.forEach((item) => {
        buildSlider(item);
      });
    }
  }
  if (document.body.clientWidth > mobile) {
    allWorks.forEach(function (item) {
      if (item.swiper) {
        item.swiper.destroy(true, true);
      }
    });
    init = false;
  }
}

export {initPrizeSwiper};
