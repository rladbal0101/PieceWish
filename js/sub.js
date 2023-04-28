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

// 주문영역 select box 선택에 따른 두번째 box 변화
function categoryChange(e) {
  var size_handtied = ["미니 30,000원", "기본 50,000원", "중형 60,000 ~ 100,000원", "대형 100,000 ~ 300,000원"];
  var size_basket = ["미니 55,000원", "중형 75,000 ~ 85,000원", "대형 100,000원", "프리미엄 150,000원"];
  var size_bouquet = ["상담 후 결정 됩니다(최소 2주전 주문)"];
  var size_moneybox = ["사각 55,000원", "원형 55,000원"];
  var size_vase = ["미니 40,000 ~ 50,000원", "중형 55,000 ~ 80,000원"];
  var target = document.getElementById("size");

  if (e.value == "handtied") var d = size_handtied;
  else if (e.value == "basket") var d = size_basket;
  else if (e.value == "bouquet") var d = size_bouquet;
  else if (e.value == "moneybox") var d = size_moneybox;
  else if (e.value == "vase") var d = size_vase;

  target.options.length = 0;

  for (x in d) {
    var opt = document.createElement("option");
    opt.valur = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}

// document.querySelector()