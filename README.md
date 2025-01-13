# 프로젝트명: BOOKPICK

### 도서검색및 관리앱👀

### 배포주소

북픽 바로가기: <https://elena7993.github.io/bookpick/>

### 1. 앱 이미지

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
<img src="./public/images/bookpick_home.png" alt="홈화면" width="300" height="500">
<img src="./public/images/bookpick_main.png" alt="홈화면" width="300" height="500">
<img src="./public/images/bookpick_add.png" alt="홈화면" width="300" height="500">
<img src="./public/images/bookpick_menu.png" alt="홈화면" width="300" height="500">
<img src="./public/images/bookpick_shelf.png" alt="홈화면" width="300" height="500">

<div>

<p style="margin: 20px 0;"></p>

### 2. 목적

- 다양한 도서를 한곳에서 검색할 수 있다.
- 책 정보를 찾고 저장하여 나만의 도서기록을 관리할 수 있다.
- 궁극적으로 책과 더 가까워지고 독서하는 습관을 기를 수 있다.

### 3. 기능

- 다양한 키워드로 도서를 검색(책 제목, 저자)
- 추천도서, 카테고리별 도서 보기
- 책장(읽은 책, 읽을 책)에 도서 정리

### 4. 스택

- HTML/CSS, JS, React, Localstorage, Node.js, Figma

### 5. 개발 스케줄

| 날짜     | 작업 내용                                                 |
| -------- | --------------------------------------------------------- |
| 월 12.09 | 프로젝트명 및 기획안 작성<br>코드 초기세팅 및 깃허브 연동 |
| 화 12.10 | 레퍼런스 조사 및 피그마로 디자인 작업                     |
| 수 12.11 | 공통 컴포넌트 작성 및 홈 화면 구현                        |
| 목 12.12 | 도서 검색 페이지 구현<br>(디테일 페이지 구현)             |
| 금 12.13 | 즐겨찾기 페이지 구현<br>(디테일 페이지2 구현)             |
| 토 12.14 | 각 페이지 코드 최종 수정<br>최종 테스트 및 배포 준비      |
| 일 12.15 | 배포                                                      |

### 6. 문제해결과정 및 느낀점 📍

#### (1)상황

도서 목록 데이터를 불러오기 위해, 알라딘사에서 제공하는 API를 사용하여 도서데이터를 검색하고 이를 렌더링하는 과정을 계획했다.

#### (2)발생한 문제

여기서 발생한 이슈😶‍🌫️ CORS문제로 요청이 차단되었고, 응답 상태 코드는 200으로 OK 였지만, 브라우저에서 데이터를 사용할 수가 없었다.

#### (3)문제 원인

문제원인은 크게 두가지였다.

1. 알라딘 API서버가 브라우저의 크로스 오리진 요청을 허용하지않는 것.
2. Access-Control-Allow-Origin에 헤더가 포함되지 않아 브라우저에 요청이 차단된 것.

#### (4)시도한 방법

fetch가 안되었기 때문에 axios로 전환했다. 간절한 마음으로 구성을 수정하고 헤더를 추가했지만 동일한 CORS문제가 발생하였다.
AxiosError: Network Error....
(대혼란의 api.js참고...😵)

#### (5)대안

백엔드없이, 브라우저에서 곧바로 알라딘 API를 사용해야한다는 제한적인 조건안에서, 이 문제를 해결해야했기에, MockData를 만들기로 결정했다.

#### (6)대안 구현 과정

알라딘 API 공식문서를보고, 응답형식을 참고해 json형식으로 MockData를 만들었다. 이 데이터로 검색 및 도서 정보를 표시하는 UI와 기능은 구현한 셈.

#### (7)개인 회고 및 향후 계획

API를 쓰는 법을 배우며 여지껏 큰 문제가 없었다. 그래서 제대로 확인하지 않고 작업을 시작한 부분이 패착이란 생각이 든다. API를 선정하고, 이를 활용한 기획을 기반으로 개발을 진행하는데, API 확인을 대충 한다면, 기획부터 흔들리는 것은 당연한 수순이다.

이번 작업에서 아쉬운 부분이 너무 많다. 알라딘에서 충분한 도서를 가져올 수 있었다면 더욱 완성도 있는 앱이 될 수 있었을 것이다.

향후, 프로젝트를 시작하기 전 기획이 진행되고 있을 때에도, 미리 개발단계에서는 필요한 과정들을 미리 조사해보고, 혹여나 문제상황이 될 수 있는 부분들을 사전에 점검하여, 예기치 못한 에러상황을 최소화하기 위해 노력을 진행해야겠다.

특히 우리 개발팀에서 컨트롤할 수 없는 외부개발리소스를 활용해야하는 영역이라면, 더더욱이나 개발자의 사전대비와 꼼꼼한 계획이 필요할 것이다.

앞으론 더블체크, 트리플 체크가 필수다!!
