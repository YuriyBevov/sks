import { Swiper, Navigation, Pagination } from "swiper";

const sliders = document.querySelectorAll(".main-slider");

if (sliders) {
  sliders.forEach((slider) => {
    const btnNext = slider
      .closest("section")
      .querySelector(".main-slider-button-next");
    const btnPrev = slider
      .closest("section")
      .querySelector(".main-slider-button-prev");

    const maxSlidesCount = slider.dataset.maxSlidesCount;
    const tabletSlidesCount = slider.dataset.tabletSlidesCount;
    const mobileSlidesCount = slider.dataset.mobileSlidesCount;

    new Swiper(slider, {
      modules: [Navigation, Pagination],

      slidesPerView: "auto",
      spaceBetween: 15,
      preloadImages: true,

      navigation: {
        nextEl: btnNext ? btnNext : null,
        prevEl: btnPrev ? btnPrev : null,
      },

      pagination: {
        el: ".main-slider-pagination",
        dynamicBullets: true,
      },

      breakpoints: {
        480: {
          slidesPerView: mobileSlidesCount ? mobileSlidesCount : 2,
          spaceBetween: 20,
        },

        668: {
          slidesPerView: tabletSlidesCount ? tabletSlidesCount : 3,
          spaceBetween: 20,
        },

        960: {
          slidesPerView: maxSlidesCount ? maxSlidesCount : 4,
          spaceBetween: 30,
        },

        1140: {
          slidesPerView: maxSlidesCount ? maxSlidesCount : 5,
          spaceBetween: 30,
        },
      },
    });
  });
}
