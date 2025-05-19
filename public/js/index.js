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
