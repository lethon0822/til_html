// DOM만 완성하면 실행됨. 기준으로 코드를 진행함.
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");

  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const headerBottomEventmenu = this.document.querySelector(
    ".header_bottom_eventmenu"
  );
  const headerTopRight = this.document.querySelector(".header_top_right");
  // 1. const headerTopH = this.document.querySelector(".header_top");  // 바깥에 두면 성능을 생각?한 것.

  this.window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    // 2. 반응형은 높이값이 계속 변하므로 스크롤 안에. 1번에 둬도 괜찮음.
    const headerTopH = this.document.querySelector(".header_top");
    // offsetHeight : 높이가 바뀌어도 상관없이 현재 높이값
    console.log(headerTopH.offsetHeight);

    if (scrollY <= headerTopH.offsetHeight) {
      console.log("모두");
    } else {
      console.log("일부");
    }
  });
});
