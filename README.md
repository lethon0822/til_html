# CSS 정리

## 1. 추천 라이브러리(팀에서 협의하여 한가지를 사용)

- reset.css (https://meyerweb.com/eric/tools/css/reset/)
- normalize.css (https://necolas.github.io/normalize.css/)

- 반드시 최상위에 적어야 함
- 예제) normalize

```html
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
```

## 2. 작업 중 개선사항

- header.css는 z-index: 999 이상(z축상으로 가장 위로 올라오게, 권장사항)
- header_top 영역에서 margin의 오류로 인해 padding으로 변경

```
margin-top의 오류.
==> padding-top 혹은 테두리를 주어서 해결함.
```

- header 영역이 스크롤시 `높이가 반영 안됨.`

```
`position:fixed` 되었기 때문
==> main 영역의 상단 공간에 padding-top으로 적용 해결
```

- 투어 슬라이드는 단방향, 즉 무한 루프가 아니라 버튼 출력 수정 필요

## 3. CSS 자동 정리 도구 활용

- 필수 사항은 아님
- https://h-owo-ld.tistory.com/184
- `postCSS Sorting` 설치

```json
"postcssSorting.config": {
    "properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",

      "display",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-items",
      "align-content",
      "order",

      "float",
      "clear",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "padding",
      "overflow",
      "overflow-x",
      "overflow-y",

      "font",
      "font-family",
      "font-size",
      "font-weight",
      "line-height",
      "letter-spacing",
      "text-align",
      "text-decoration",
      "text-transform",
      "color",

      "background",
      "background-color",
      "background-image",
      "background-size",
      "background-position",
      "background-repeat",

      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-radius",

      "box-shadow",
      "opacity",
      "transition",
      "transform",

      "cursor",
      "visibility",
      "content"
    ]
  }
```

- 단축키 설정 : 설정 > Keyboard Shortcuts (바로가기 키) 선택
- 검색어로 `postcss sorting run`: shift + CapsLock

## 4. 반응형 작업

### 4.1. 필수 체크 사항

- 아래 구문이없으면 화면 체크를 못해서 반응형 작업 곤란

```html
<meta name="viewport" content="width-device-width, initial-scale=1.0" />
```

- 포토샵 또는 Figma 로 디자인 제공됨(PC, 타블렛, 모바일)
- 가능하면 큰 화면에 모두 배치한 후 점점 줄여가면서 배치하기를 권장
- 필요하면 브레이크 포인트(@media)를 작업하면서 계속 추가

```css
/* 최대 크기 */
@media all and (max-width: 1280) {
}
@media all and (max-width: 1024) {
}
@media all and (max-width: 960) {
}
@media all and (max-width: 760) {
}
@media all and (max-width: 540) {
}
```

### 4.2. 작업시 참조

- `웹 브라우저 F12번` 을 활용
  - Dock 위치를 조절하거나 디바이스 아이콘으로 화면을 띄우고 진행

### 4.3. css작업

- layout 클래스를 작업(common.css)
- header 영역 css 작업 : header와 반응형 header를 분리해서 만들기
