// ONEDAY CLASS 수평슬라이드
new Swiper('.class--oneday .inner .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 4, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
});
// MASTER CLASS 수평슬라이드
new Swiper('.class--master .inner .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 4, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
});