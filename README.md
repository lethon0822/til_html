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

## 2. 개선사항

- header.css는 무조건 z-index: 999 이상(z축상으로 가장 위로 올라오게)
- header 영역이 스크롤시 `position:fixed` 되면서 `높이가 반영 안됨.`
