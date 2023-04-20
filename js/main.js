// 프로모션 수평 슬라이드 기능
new Swiper('.slide .swiper', {
  // direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: {
    delay: 3000 // 5초마다 슬라이드 바뀜(기본값: 3000)
  }, // 자동 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용
    el: '.slide .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.slide .swiper-button-next',
    prevEl: '.slide .swiper-button-prev',
  },
});
