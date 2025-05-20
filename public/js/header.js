// DOM만 완성하면 실행됨. 기준으로 코드를 진행함.
// DOM(Document Object Model) = html 태그 구조
// 아래 문장은 html이 완성되었다면 실행하기.
window.addEventListener("DOMContentLoaded", function () {
  // 아래 구문은 header 변수를 만들고 html(=document)에서 css 선택자로 값을 셋팅
  const header = this.document.querySelector(".header");
  const headerTop = this.document.querySelector(".header_top");
  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const eventmenu = this.document.querySelector(".header_bottom_eventmenu");
  const member = this.document.querySelector(".header_top_right");

  // 1. const headerTopH = this.document.querySelector(".header_top");  // 바깥에 두면 성능을 생각?한 것.

  // 윈도우에 스크롤이 일어나면 기능을 작동
  this.window.addEventListener("scroll", function () {
    // 스크롤이 되었을 대 스크롤 바의 Y축 상단 픽셀 위치값
    const scrollY = window.scrollY;
    // 2. 반응형은 높이값이 계속 변하므로 스크롤 안에. 1번에 둬도 괜찮음.
    const headerTopH = this.document.querySelector(".header_top");
    // offsetHeight : 높이가 바뀌어도 상관없이 현재 높이값
    console.log(headerTopH.offsetHeight); // 70px 출력

    // 만약 50 보다 작으면 전체 를 보이고, 그렇지 않으면 일부분을 숨기기
    if (scrollY <= headerTopH.offsetHeight) {
      // console.log("모두");
      logo.style.display = "block";
      eventmenu.style.display = "block";
      // class로 변경
      header.classList.remove("header_down");
      headerTop.classList.remove("header_top_down");
      search.classList.remove("search_down");
      member.classList.remove("member_down");
    } else {
      // console.log("일부");
      // logo를 css로 제어
      logo.style.display = "none";
      eventmenu.style.display = "none";
      header.classList.add("header_down");
      headerTop.classList.add("header_top_down");
      search.classList.add("search_down");
      member.classList.add("member_down");
    }
  });
});
