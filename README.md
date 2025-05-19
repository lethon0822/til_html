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
