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
});

// 모바일용 메뉴 - 서브메뉴 클릭시 메뉴 닫힘
const menuClickEls = document.querySelectorAll('.m-nav .nav__menu--main .item ul li a');

// menuClickEls.forEach(function (menuClickEl) {
  
// });
// menuClickEls.addEventListener('click', function () {
//   mobileNavEl.classList.remove('active');
// });


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
