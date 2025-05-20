# JS 적용

- JS는 2가지로 크게 분류됨
  - Node용, Web(웹 브라우저)용

## JS 코딩 좋은 위치

- 가장 좋은 위치는 html 이 완료되는 시점

```javascript
// document = html
// 여기서 this = window
// html의 document가 모두 로드 되면 실행
// html의 이미지, 파일 등 리소스가 준비되면 실행

// 이쪽이 표준
// 콜백 함수를 사용함
window.addEventListener("load", function () {});

// html만 로드 완료 여부를 체크함.
// html 형태만 나오면 실행
window.addEventListener("DOMContentLoaded", function () {});
```

## 요소(Element) 선택법

```javascript
// DOM(html)만 완성하면 실행됨. 기준으로 코드를 진행함.
window.addEventListener("DOMContentLoaded", function () {
  // 우리가 원하는 요소(Element)를 선택하는 법

  // Tag 선택(Tag Element)
  this.document.getElementsByTagName("header");
  this.document.getElementsByClassName("header");

  // CSS 선택자 이용 및 선택(CSS Element)
  // CSS로 선택하는 법을 알면 사용할 수 있음(CSS 안다는 전제 하에)
  this.document.querySelector(".header");
  this.document.querySelectorAll(".header");

  // ID 선택자 이용 및 선택(ID)
  this.document.getElementById();
});
```

- 예제

```javascript
// DOM만 완성하면 실행됨. 기준으로 코드를 진행함.
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  console.log(header);

  const logo = this.document.querySelector(".logo");
  console.log(logo);

  // 되도록 영역을 잘 잡으면 좋음
  // div 클래스 이름으로 잡도록 (form, ul보다)
  const search = this.document.querySelector(".search");
  console.log(search);

  const headerBottomEventmenu = this.document.querySelector(
    ".header_bottom_eventmenu"
  );
  console.log(headerBottomEventmenu);

  const headerTopRight = this.document.querySelector(".header_top_right");
  console.log(headerTopRight);
});
```

## 다양한 이벤트의 이해

- 웹 브라우저가 체크하는 변화를 `이벤트` 라고 함.
- 이벤트 작성법 3가지

### 1. 태그에 직접 이벤트 작성하기

- html을 다 열어서 확인해야 함
- 이벤트는 소문자명

```javascript
<header class="header" on이벤트명="alert('안녕')"><header>
```

### 2. 요소에 속성으로 이벤트 작성하기

- 값을 덮어쓰므로 가장 추천하지 않는 방법

```javascript
const header = this.document.querySelector(".header");
header.onclick = function () {
  alert("반가워");
};
```

### 3. 요소에 핸들러로 이벤트 작성하기(표준)

```javascript
요소.addEventListener("이벤트", function () {});

const header = this.document.querySelector(".header");
header.addEventListener("click", function () {
  alert("표준 반가워");
});
```

### 4. 활용빈도가 높은 `윈도우 이벤트`

- `load` :
- `DOMContentLoaded` :
- `resize` : 웹 브라우저 너비, 높이 변경시 발생
- `scroll` : 웹 브라우저에 스크롤이 일어나면 발생

### 5. 활용빈도가 높은 `마우스 이벤트`

- `click` : 마우스 왼쪽 클릭
- `mouseenter` : 마우스 커서가 요소에 걸쳐질 시
- `mouseleave` : 마우스 커서가 요소에서 벗어날 시

### 6. 활용빈도가 높은 `키보드 이벤트`

- `keyup` : 키보드에서 키 입력 후에
- `keydown` : 키보드에서 키 입력 시
- `keypress` : 키보드에서 키 누르고 있을 시

### 7. 활용빈도가 높은 `Form 관련 이벤트` (추후 정리)

## CSS 제어법

### 1. inline 형태로 적용하기 (가끔 활용함)

- `대상.sytle.css속성 = "값";`

```javascript
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
    } else {
      // console.log("일부");
      // logo를 css로 제어
      logo.style.display = "none";
      eventmenu.style.display = "none";
      search.style.position = "absolute";
      search.style.left = "350px";
      search.style.top = "48px";
    }
  });
});
logo.style.display = "none";
```

### 2. css 클래스 활용하기 (적극 활용함)

- `대상.classList.add("클래스명")`
- `대상.classList.remove("클래스명")`
- `대상.classList.toggle("클래스명")`
- `대상.classList.contain("클래스명")`

```javascript
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
```

## 슬라이드 외부 라이브러리 활용하기

- 절대 직접 만들지 않기
- `Swiper` : 가장 추천 (https://swiperjs.com/) (사용)
- `Slick` : 추천 (https://kenwheeler.github.io/slick/)
- `bxSlide : 비추천 (https://bxslider.com/)
