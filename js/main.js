// 모달창
function showModal() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal-box").style.display = "block";

}
function hideModal() {
  document.getElementById("modal").style.display = "none";
  document.querySelector(".modal-box").style.display = "none";

}

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

// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.7 // 화면의 70% 지점에서 보여짐 여부 감시(0~1 사이 지정)
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!) - 라이브러리에서 지정한 문법으로 깊게 이해할 필요 X
});
