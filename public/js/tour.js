// 이미지 등의 리소스가 부러들여지면 그때 슬라이드 처리가 자연스러움
// 이미지를 불러들여야하기 때문에 기다리기 위해 load 이벤트를 사용함

window.addEventListener("load", function () {
  // api 주소 (파일 주소)
  const apiUrl = "http://127.0.0.1:5500/public/api/tour.json";
  // 현재 출력한 카테고리 (변할 수 있어서 let으로 초기화)
  let cateFocusIndex = 0;
  // 카테고리 button 태그 DOM 보관 (코드 최적화)
  let cateButtonArr = [];
  // 카테고리 글자 배열
  let cateNameArr = [];
  // 리스트 목록 배열
  let cateListArr = [];
  // 투어 슬라이드 변수
  let swTour;

  // api 호출 함수
  // async ==> 외부 데이터 연동이라고 유추
  // 로딩 화면이나 에러 메세지를 띄워주는 것도 가능(여기서는 생략)
  async function getData(_url, _fn) {
    try {
      const res = await fetch(_url);
      const data = await res.json();
      _fn(data);
    } catch (error) {
      console.log(error);
    }
  }

  //데이터를 처리하는 함수
  const parseData = function (_data) {
    // 1. 카테고리 글자만 추출하기
    // 필요에 따라 index, arr 생략 가능
    const cateArr = _data.map(function (item, index, arr) {
      return item.cate;
    });
    cateNameArr = [...cateArr];

    // 2. 리스트 목록만 추출하기
    const listArr = _data.map(function (item) {
      return item.list;
    });
    cateListArr = [...listArr];
    // 화살표 함수로 고침
    // const cateArr2 = _data.map(item => item.cate);

    // 위에서 모든 파싱 처리를 마친 뒤에 실행
    tourStart();
  };

  function tourStart() {
    makeTourInit();
    activeCateFocus();
    addBtsEvent();
  }

  // 최초 데이터가 전달되면 1번만 실행
  // 카테고리 버튼은 1번만 만들어도 됨.
  function makeTourInit() {
    // 배치될 장소
    const cateBts = document.querySelector(".section_category_bts");
    // 최종 html 글자
    let html = "";
    // 수정한 것 (버튼 태그를 만들어냄)
    cateNameArr.forEach(function (item, index) {
      const tag = `<li><button>${item}</button></li>`;
      html = html + tag;
    });
    cateBts.innerHTML = html;

    // 버튼 태그 모음
    cateButtonArr = document.querySelectorAll(
      ".section_category_bts > li > button"
    );
  }

  // 실시간으로 생성된 버튼에 이벤트 연결하기
  function addBtsEvent() {
    cateButtonArr.forEach(function (item, index) {
      item.addEventListener("click", function () {
        // 동일한 버튼 클릭 시 작동 방지
        if (cateFocusIndex === index) {
          return;
        }
        cateFocusIndex = index;
        removeFocusAll();
        activeCateFocus();
      });
    });
  }

  // 포커스 모두 제거하기
  function removeFocusAll(_index) {
    cateButtonArr.forEach(function (item) {
      item.classList.remove("cate_focus");
    });
  }

  // 카테고리 버튼에 현재 포커스 표현하기
  function activeCateFocus() {
    cateButtonArr[cateFocusIndex].classList.add("cate_focus");
    makeTourListHtml();
  }

  // 목록 html 생성
  function makeTourListHtml() {
    // 1. html 태그만들기
    // 1.1. 어디다가 만들지? querySelector 찾아줌.
    //여기가 문제
    const swTourWrap = document.querySelector(".sw_tour .swiper-wrapper");

    // 1.2. html 만들기
    let html = "";
    const listArr = cateListArr[cateFocusIndex];
    listArr.forEach(function (item) {
      const tag = `
      <div class="swiper-slide">
        <div class="item">
          <a href="${item.link}">
            <div class="item_image">
              <img
                src="${item.image}"
                alt="${item.title}"
                title="${item.title}"
              />
            </div>
            <span class="item_name">${item.city}</span>
            <div class="item_text">
              <span class="item_cupon">
              ${item.title}
              </span>
              <p class="item_desc">
              ${item.content}
              </p>
              <span class="item_price"><b>${item.price}</b>원~</span>
            </div>
          </a>
        </div>
      </div>
      `;
      html = html + tag;
    });
    swTourWrap.innerHTML = html;

    // 2. 항상 슬라이드가 만들어져 있다면 삭제하기
    if (swTour) {
      // swiper를 제거함. (swiper의 사이트의 레퍼런스 참조)
      swTour.destroy(true, true);
    }
    // 3. 이후 슬라이드를 생성하기
    swTour = new Swiper(".sw_tour", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".tour_next",
        prevEl: ".tour_prev",
      },
    });

    // 2. swiper 생성하기
  }

  // 함수 호출 (여기서부터 동작 시작)
  getData(apiUrl, parseData);
}); // 반드시 전체 괄호 안에 작성
