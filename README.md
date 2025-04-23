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
- display, position 중요함

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

### 3.2. 클래스 선택법

```css
태그.클래스명 {
}
```

```css
.클래스명 {
}
```
