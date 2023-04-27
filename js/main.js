// 햄버거 버튼
const btnHamburger = document.querySelector('.btn-hamburger');
const navEl = document.querySelector('.nav');
const mobileNavEl = document.querySelector('.m-nav');
const btnClose = document.querySelector('.btn-close');

btnHamburger.addEventListener('click', function () {
  mobileNavEl.classList.add('active');
});
btnClose.addEventListener('click', function () {
  mobileNavEl.classList.remove('active');
})

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.6,
    opacity: 1    
  });
});

// 수평 슬라이드 기능
new Swiper('.slide .swiper', {
  // direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: {
    delay: 3000 // 3초마다 슬라이드 바뀜(기본값: 3000)
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

// 서브페이지 수평슬라이드
new Swiper('.order__contents .swiper', {
  loop: true,
  autoplay: {
    delay: 4000
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
  pagination: { // 페이지 번호 사용
    el: '.order__contents .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.order__contents .swiper-button-next',
    prevEl: '.order__contents .swiper-button-prev',
  },
});

// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1 사이 지정)
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!) - 라이브러리에서 지정한 문법으로 깊게 이해할 필요 X
});

// 현재 연도 표시
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 모달창
function showModal() {
  document.getElementById("modal").style.display = "block";
}
function hideModal() {
  document.getElementById("modal").style.display = "none";
}

// SCROLL TO TOP
const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.4, {
    scrollTo: 0 // 페이지의 0px 지점(최상단)으로 이동, ScrollToPlugin을 연결해야 사용 가능한 옵션
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(toTopEl, 0.4, {
      opacity: 1,
      x: 0
    });
  } else {
    gsap.to(toTopEl, 0.4, {
      opacity: 0,
      x: 100
    });
  }
})

// RECOMMEND
const recommedTitle = document.querySelector('.recommend-title');
const choiceBox = document.querySelector('.choice-box');
recommedTitle.addEventListener('click', function () {
  gsap.to(choiceBox, 0.4, {
    opacity: 1,
    display: 'block'
  });
});

// 꽃송이 만들기
const body = document.querySelector('body');
const MIN_DURATION = 10;

function makeFlowerflake() {
  const flowerflake = document.createElement('div');
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  flowerflake.classList.add('flowerflake');
  flowerflake.style.left = `${Math.random() * window.screen.width}px`;
  flowerflake.style.animationDelay = `${delay}s`;
  flowerflake.style.opacity = initialOpacity;
  flowerflake.style.animation = `fall ${duration}s linear`;

  body.appendChild(flowerflake);

  setTimeout(() => {
    body.removeChild(flowerflake);
    makeFlowerflake();
  }, (duration + delay) * 1000);
}

for (let index = 0; index < 50; index++) {
  setTimeout(makeFlowerflake, 500 * index);
}