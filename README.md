# header 영역 HTML 작업해 보기

```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>나의 til</title>
  </head>
  <body>
    <!-- 전체 레이아웃 -->
    <div>
      <!-- (시멘틱 태그로 영역을 나누기 -웹 브라우저가 앎) -->
      <!-- 상단 -->
      <header class="header">
        <div class="layout">
          <!-- 상단의 위 -->
          <div class="header_top">
            <div class="header_top_left">
              <!-- 로고 -->
              <div class="logo">
                <a href="https://www.interpark.com/" target="_blank">
                  <img src="images/logo.svg" alt="로고" title="인터파크" />
                </a>
              </div>
              <!-- 제품 검색 -->
              <div class="search">
                <!-- 제품 검색 API -->
                <form class="search_form">
                  <input type="text" placeholder="제품을 검색해주세요." />
                  <input type="submit" value="검색" />
                </form>
              </div>
            </div>
            <div class="header_top_right">
              <ul class="member">
                <li><a href="#">로그인</a></li>
                <li><a href="#">회원가입</a></li>
              </ul>
            </div>
          </div>
          <!-- 상단의 아래 -->
          <div class="header_bottom">
            <div class="header_bottom_nav">
              <ul class="nav">
                <li><a href="#">홈</a></li>
                <li><a href="#">투어</a></li>
                <li><a href="#">티켓</a></li>
              </ul>
            </div>
            <div class="header_bottom_eventmenu">
              <ul class="coupon">
                <li>
                  <a href="#">해외여행쿠폰</a
                  ><img
                    src="images/badge_hot.svg"
                    alt="해외여행쿠폰"
                    title="해외여행쿠폰"
                  />
                </li>
                <li>
                  <a href="#">국내여행쿠폰</a
                  ><img
                    src="images/badge_hot.svg"
                    alt="국내여행쿠폰"
                    title="국내여행쿠폰"
                  />
                </li>
                <li><a href="#">여행혜택존</a></li>
                <li><a href="#">여행준비</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <!-- 메인 -->
      <main>
        <!-- Event -->
        <div></div>
        <!-- Tour -->
        <div></div>
        <!-- Trip -->
        <div></div>
        <!-- Ticket -->
        <div></div>
        <!-- Live -->
        <div></div>
      </main>
      <!-- 하단 -->
      <footer>
        <div></div>
      </footer>
    </div>
  </body>
</html>

```

# CSS

- html을 꾸며주기
- `display, position` 중요함

## 1. css작성법 3가지

- 작성법 3가지 중 누가 최종적으로 적용되는가? (누가 힘이 강한가)

### 1.1. inline 방식

- html 태그에 직접 작성해 주는 방식

### 1.2. link 방식

- file로 작성해서 link하는 방식 (파일명.css)

### 1.3. @import 방식

- css 파일에서 또다른 css 파일을 참조하는 방식

## 2. 모든 태그에 초기화 진행하기

- 웹 브라우저마다 기본적인 css는 적용이 되어 있음.
- 그래서, 웹 브라우저마다 모양이 다르게 보임.
- 아래 내용은 기본값css 값으로 선생님 추천.

```css
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* outline-style: none; */
}
```

## 3. 선택하는 법 (selector)

### 3.1. 태그 선택법

```css
태그 {
}
```

- css/common.css 예제

```css
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none;
} /* 전부 선택 : * */

/* 태그 선택 : 추천하는 각 태그별 기본값 */
a {
  text-decoration: none;
  /* 디자인 보고 수정 */
  color: #000000;
}
ul {
  list-style: none;
}
html {
  width: 100%;
  /* 디자인 보고 수정 */
  font-size: 16px;
}
body {
  width: 100%;
  font-size: 1rem;
  /* 디자인 보고 수정 */
  color: #000000;
  /* 글꼴 필요 */
}
```

### 3.2. 클래스 선택법

```css
태그.클래스명 {
}
```

```css
.클래스명 {
}
```

### 3.3. 단계별 선택법

```css
태그 > 태그 > 태그 {
}
```

```css
.클래스 > 태그 > 태그 {
}
```

### 3.4. 범위 선택법

```css
태그 태그 {
}
```

```css
.클래스 태그 {
}
```

## 4. display의 이해

### 4.1. display: block

- 벽돌처럼 한 영역을 모두 차지함.
- 공간이 남더라도 절대 양보하지 않음. 한줄에 하나밖에 배치하지 못함.
- div, ul, h1~h6, p 태그 등은 기본(default)적으로 block 이 적용되어 있음.

### 4.2. display: inline

- 글자처럼 한 줄에 배치 가능.
- 너비(width), 높이(height) 등이 적용되지 않음.
- img, span, b 태그 등은 기본(default)적으로 inline 이 적용되어 있음.

### 4.3. display: inline-block;

- 글자처럼 한 줄에 배치 가능.
- 너비(width), 높이(height) 등이 적용됨.
- 엔터키에 의한 공백을 없애려면 font-size: 0 적용

### 4.4. block 을 유지하면서 inline 적용하기

- overflow: hidden과 float: left 조합

### 4.4.1. overflow:hidden 으로 레이아웃 유지

```css
@charset "utf-8";
.box_wrap {
  display: block;
  border: 3px solid red;
  overflow: hidden;
}
.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

### 4.4.2. clearboth 클래스 만들어서 레이아웃 유지

```css
.box_wrap {
  display: block;
  border: 3px solid red;
}
.clearboth::after {
  content: "";
  display: block;
  width: 100%;
  clear: both;
}
.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

### 4.4.3. height 주어서 레이아웃 유지

```css
box_wrap {
  display: block;
  border: 3px solid red;
  height: 100px;
}
.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

### 4.5 display: none

- 화면에 내용을 안보이게 함.
- 실제로 태그가 없는 것처럼 작동함.
- `js 에서 태그를 찾아서 기능을 부여 못할 수도 있음.`

### 4.6 가능하면 flex를 적극 도입

- https://studiomeal.com/archives/197

## 5. CSS 적용 우선 순위

### 5.1. 태그 CSS가 만약 중복이라면

- 1번 `inline(인라인) 스타일 시트는 가장 우선으로 적용됨.`

```css
/* '안녕' 부분은 orange로 */
<style>
      div {
        background-color: yellowgreen;
      }
    </style>
    <div class="box_wrap" style="background-color: orange">안녕</div>
```

- 2번 작성 순서가 마지막인 것이 적용됨.

```css
/* 아래에 작성된 orange가 적용됨(덮어씌움) */
div {
  background-color: yellowgreen;
}
div {
  background-color: orange;
}
```

- 3번 `클래스가 태그보다 우선순위가 높다`

```css
.box_wrap {
  background-color: hotpink;
}
div {
  background-color: yellowgreen;
}
```

- 4번 `클래스가 중복이라면 작성 순서가 나중인 것이 우선.`

- 5번 `아이디는 최우선권을 가진다(inline 제외)`

```css
#gogo {
  background-color: brown;
}
.box_wrap {
  background-color: hotpink;
}
.hi {
  background-color: yellowgreen;
}
```

- 6번 `단계 선택이 범위 선택보다 우선권을 가짐.`

```css
ul > li > a {
  background-color: green;
}
ul a {
  background-color: red;
}
```

### 5.2. 무조건 적용하기

- !important 적용

```css
<style>
      div {
        background-color: yellow !important;
      }
    </style>
    <div style="background-color: green">안녕</div>
```

### 5.3. 우선 순위 정리

`태그 < 클래스 < 아이디 < 인라인`

- 랜더링 과정을 고려함. `태그 => 태그 구조 => 태그 css => 클래스 css => 인라인 css`

- f12번을 믿기.

- ! important 는 정말 해결이 필요한 곳에만 활용.

## 6. 글꼴 설정

- 반드시 글꼴 설정 후 작업이 진행되어야 함.

- 글자의 종류와 글자 간의 간격, 행간, 글꼴 크기 등이 너비, 높이 등의 단위가 됨.

- body 셋팅을 위한 자료임.

### 6.1. 글꼴 구하기

- `웹 폰트`와 `로컬 폰트`의 구분 및 이해
- 구글 폰트 (https://fonts.google.com/)
- 눈누 (https://noonnu.cc/font_page/pick)
- 깃허브 (ex. 프리텐다드 https://github.com/orioncactus/pretendard)
- 아이콘폰트 (https://fontawesome.com/icons)

### 6.2. 글꼴 활용하기

- css/common.css 참조

## 7. CSS 살펴보기

- margin (영역 바깥으로의 여백)
  - margin-top 은 오류가 발생할 수 있음.

## 8. position을 꼭 기억하기

### 8.1. 정확하게 px로 지정하고 싶을 때

- 아래처럼 할 때 주의할 것
- 바깥 영역에 'position relative가 있어야 영역 안에 들어감

```css
position: absolute;
left 0px;
top 0px;
bottom 0px;
right 0px;
```

### 8.2. 웹 브라우저에 위치를 고정하고 싶을 때

```css
position: fixed;
left 0px;
top 0px;
bottom 0px;
right 0px;
```
