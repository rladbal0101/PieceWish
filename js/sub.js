// Handtied 수평슬라이드
new Swiper('.order__contents .handtied .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
  pagination: { // 페이지 번호 사용
    el: '.order__contents .handtied .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.order__contents .handtied .swiper-button-next',
    prevEl: '.order__contents .handtied .swiper-button-prev',
  },
});
// Basket 수평슬라이드
new Swiper('.order__contents .basket .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
  pagination: { // 페이지 번호 사용
    el: '.order__contents .basket .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.order__contents .basket .swiper-button-next',
    prevEl: '.order__contents .basket .swiper-button-prev',
  },
});
// Bouquet 수평슬라이드
new Swiper('.order__contents .bouquet .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
  pagination: { // 페이지 번호 사용
    el: '.order__contents .bouquet .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.order__contents .bouquet .swiper-button-next',
    prevEl: '.order__contents .bouquet .swiper-button-prev',
  },
});
// Moneybox 수평슬라이드
new Swiper('.order__contents .moneybox .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
  pagination: { // 페이지 번호 사용
    el: '.order__contents .moneybox .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.order__contents .moneybox .swiper-button-next',
    prevEl: '.order__contents .moneybox .swiper-button-prev',
  },
});
// Vase 수평슬라이드
new Swiper('.order__contents .vase .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
  pagination: { // 페이지 번호 사용
    el: '.order__contents .vase .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.order__contents .vase .swiper-button-next',
    prevEl: '.order__contents .vase .swiper-button-prev',
  },
});