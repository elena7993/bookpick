const mockBooks = [
  {
    id: 0,
    title: "불편한 편의점 2",
    cover:
      "https://image.aladin.co.kr/product/30370/64/cover500/s122834213_1.jpg",
    author: "김호연 (지은이)",
    pubDate: "2023-08-15",
    publisher: "나무옆의자",
    priceSales: 13500,
    priceStandard: 15000,
    description:
      "전편의 따뜻한 감동을 이어가는 소설. 편의점을 무대로 펼쳐지는 사람 냄새 나는 이야기.",
    categoryId: 509,
    categoryName: "국내도서>소설>한국소설",
  },
  {
    id: 1,
    title: "아버지의 해방일지",
    cover:
      "https://image.aladin.co.kr/product/30048/51/cover500/8936438832_2.jpg",
    author: "정지아 (지은이)",
    pubDate: "2023-06-20",
    publisher: "창비",
    priceSales: 14400,
    priceStandard: 16000,
    description:
      "한 가족의 역사와 아버지의 삶을 통해 한국 현대사를 되돌아보는 깊이 있는 소설.",
    categoryId: 510,
    categoryName: "국내도서>소설>현대문학",
  },
  {
    id: 2,
    title: "역행자",
    cover:
      "https://image.aladin.co.kr/product/31730/9/cover500/k162936876_1.jpg",
    author: "자청 (지은이)",
    pubDate: "2022-05-03",
    publisher: "웅진지식하우스",
    priceSales: 15300,
    priceStandard: 17000,
    description:
      "불확실한 시대에 자기만의 길을 개척하는 방법과 사고방식을 담은 자기계발서.",
    categoryId: 203,
    categoryName: "국내도서>자기계발>성공학",
  },
  {
    id: 3,
    title: "불편한 편의점",
    cover:
      "https://image.aladin.co.kr/product/29045/74/cover500/k192836746_2.jpg",
    author: "김호연 (지은이)",
    pubDate: "2021-04-20",
    publisher: "나무옆의자",
    priceSales: 13500,
    priceStandard: 15000,
    description:
      "평범한 편의점에서 벌어지는 소소한 사건과 사람들의 이야기를 따뜻하게 그린 소설.",
    categoryId: 509,
    categoryName: "국내도서>소설>한국소설",
  },
  {
    id: 4,
    title: "가불 선진국",
    cover:
      "https://image.aladin.co.kr/product/29102/87/cover200/k912837067_1.jpg",
    author: "박해천 (지은이)",
    pubDate: "2023-07-05",
    publisher: "휴머니스트",
    priceSales: 17100,
    priceStandard: 19000,
    description:
      "한국 사회의 구조적 문제를 예리하게 파헤치며, 미래를 위한 제언을 담은 사회비평서.",
    categoryId: 301,
    categoryName: "국내도서>사회과학>사회문제",
  },
  {
    id: 5,
    title: "채식주의자",
    cover:
      "https://image.aladin.co.kr/product/29137/2/cover200/8936434594_2.jpg",
    author: "한강 (지은이)",
    pubDate: "2007-10-30",
    publisher: "창비",
    priceSales: 11700,
    priceStandard: 13000,
    description:
      "세계적으로 주목받은 한강의 문제작, 인간의 본성과 폭력, 욕망을 그린 소설.",
    categoryId: 509,
    categoryName: "국내도서>소설>한국소설",
  },
  {
    id: 6,
    title: "우리가 빛의 속도로 갈 수 없다면",
    cover:
      "https://image.aladin.co.kr/product/19359/16/cover500/s152835852_1.jpg",
    author: "김초엽 (지은이)",
    pubDate: "2019-06-24",
    publisher: "현대문학",
    priceSales: 13500,
    priceStandard: 15000,
    description:
      "SF적인 상상력을 바탕으로 인간관계와 정체성을 그려낸 단편 소설집.",
    categoryId: 511,
    categoryName: "국내도서>소설>SF/판타지",
  },
  {
    id: 7,
    title: "달러구트 꿈 백화점",
    cover:
      "https://image.aladin.co.kr/product/24512/70/cover200/k392630952_2.jpg",
    author: "이미예 (지은이)",
    pubDate: "2020-07-08",
    publisher: "팩토리나인",
    priceSales: 13500,
    priceStandard: 15000,
    description:
      "잠들 때마다 찾아오는 신비한 꿈을 파는 가게를 무대로 한 감성 판타지.",
    categoryId: 511,
    categoryName: "국내도서>소설>판타지",
  },
  {
    id: 8,
    title: "당신이 옳다",
    cover:
      "https://image.aladin.co.kr/product/16938/73/cover200/s782534590_2.jpg",
    author: "정혜신 (지은이)",
    pubDate: "2018-10-10",
    publisher: "해냄출판사",
    priceSales: 13500,
    priceStandard: 15000,
    description: "공감과 치유의 힘을 강조하는 심리치유서.",
    categoryId: 305,
    categoryName: "국내도서>인문학>심리학",
  },
  {
    id: 9,
    title: "작은 것들의 신",
    cover:
      "https://image.aladin.co.kr/product/7586/21/cover200/8954639402_1.jpg",
    author: "아룬다티 로이 (지은이), xxx (옮긴이)",
    pubDate: "2000-05-10",
    publisher: "문학동네",
    priceSales: 14400,
    priceStandard: 16000,
    description: "인도 사회의 모순과 금기를 섬세하고 아름답게 그려낸 소설.",
    categoryId: 512,
    categoryName: "국내도서>소설>세계문학",
  },
  {
    id: 10,
    title: "미라클 모닝",
    cover:
      "https://image.aladin.co.kr/product/7747/73/cover200/s552532081_1.jpg",
    author: "할 엘로드 (지은이)",
    pubDate: "2016-12-07",
    publisher: "한빛비즈",
    priceSales: 13500,
    priceStandard: 15000,
    description: "아침을 활용해 인생을 바꾸는 습관 만들기 자기계발서.",
    categoryId: 203,
    categoryName: "국내도서>자기계발",
  },
  {
    id: 11,
    title: "해리 포터와 마법사의 돌",
    cover:
      "https://image.aladin.co.kr/product/35144/78/cover200/k852934815_1.jpg",
    author: "J.K. 롤링 (지은이), xxx (옮긴이)",
    pubDate: "2014-01-10",
    publisher: "문학수첩",
    priceSales: 12600,
    priceStandard: 14000,
    description: "전 세계적으로 사랑받는 판타지 시리즈의 시작점.",
    categoryId: 513,
    categoryName: "국내도서>소설>영미문학",
  },
  {
    id: 12,
    title: "참을 수 없는 존재의 가벼움",
    cover:
      "https://image.aladin.co.kr/product/34797/80/cover200/8937437562_1.jpg",
    author: "밀란 쿤데라 (지은이), 이재룡 (옮긴이)",
    pubDate: "2002-05-20",
    publisher: "민음사",
    priceSales: 11700,
    priceStandard: 13000,
    description: "인간 존재와 사랑, 자유에 대한 깊은 사유를 담은 명작.",
    categoryId: 512,
    categoryName: "국내도서>소설>세계문학",
  },
  {
    id: 13,
    title: "나미야 잡화점의 기적",
    cover:
      "https://image.aladin.co.kr/product/30768/99/cover200/k252830652_2.jpg",
    author: "히가시노 게이고 (지은이), 양윤옥 (옮긴이)",
    pubDate: "2012-12-10",
    publisher: "현대문학",
    priceSales: 13500,
    priceStandard: 15000,
    description: "수십 년 전의 잡화점 편지로 이어지는 기묘한 상담극.",
    categoryId: 512,
    categoryName: "국내도서>소설>일본문학",
  },
  {
    id: 14,
    title: "달러구트 꿈 백화점 2",
    cover:
      "https://image.aladin.co.kr/product/30258/81/cover200/k242839607_1.jpg",
    author: "이미예 (지은이)",
    pubDate: "2021-07-15",
    publisher: "팩토리나인",
    priceSales: 13500,
    priceStandard: 15000,
    description:
      "전편의 따뜻한 이야기들을 확장시키는 꿈 백화점 시리즈 두 번째 작품.",
    categoryId: 511,
    categoryName: "국내도서>소설>판타지",
  },
  {
    id: 15,
    title: "역사의 쓸모",
    cover:
      "https://image.aladin.co.kr/product/19433/93/cover200/k152635416_2.jpg",
    author: "최태성 (지은이)",
    pubDate: "2019-07-15",
    publisher: "다산초당",
    priceSales: 14400,
    priceStandard: 16000,
    description: "역사를 통해 현재와 미래를 통찰하는 법을 전하는 교양서.",
    categoryId: 601,
    categoryName: "국내도서>역사>한국사",
  },
  {
    id: 16,
    title: "페인트",
    cover:
      "https://image.aladin.co.kr/product/18958/95/cover200/893645689x_1.jpg",
    author: "이희영 (지은이)",
    pubDate: "2020-05-25",
    publisher: "창비",
    priceSales: 11700,
    priceStandard: 13000,
    description:
      "입양 제도를 소재로 한 청소년소설로, 독특한 상상력과 문제의식이 돋보이는 작품.",
    categoryId: 509,
    categoryName: "국내도서>소설>청소년소설",
  },
  {
    id: 17,
    title: "미드나잇 라이브러리",
    cover:
      "https://image.aladin.co.kr/product/26987/37/cover200/s622931315_1.jpg",
    author: "매트 헤이그 (지은이), xxx (옮긴이)",
    pubDate: "2021-04-30",
    publisher: "클레이하우스",
    priceSales: 13500,
    priceStandard: 15000,
    description:
      "삶과 죽음 사이 도서관에서 펼쳐지는 또 다른 인생 선택의 이야기.",
    categoryId: 512,
    categoryName: "국내도서>소설>영미문학",
  },
  {
    id: 18,
    title: "소년이 온다",
    cover:
      "https://image.aladin.co.kr/product/4086/97/cover500/8936434128_2.jpg",
    author: "한강 (지은이)",
    pubDate: "2014-05-19",
    publisher: "창비",
    priceSales: 13500,
    priceStandard: 15000,
    description:
      "인기 소설 '불편한 편의점'의 특별판으로 추가 에피소드 및 일러스트 수록.",
    categoryId: 509,
    categoryName: "국내도서>소설>한국소설",
  },
  {
    id: 19,
    title: "우리가 빛의 속도로 갈 수 없다면",
    cover:
      "https://image.aladin.co.kr/product/19359/16/cover200/s152835852_1.jpg",
    author: "김초엽 (지은이)",
    pubDate: "2019-06-24",
    publisher: "허블",
    priceSales: 12600,
    priceStandard: 14000,
    description:
      "다양한 SF 단편을 통해 새로운 세계관과 문제의식을 제시하는 단편소설집.",
    categoryId: 511,
    categoryName: "국내도서>소설>SF/판타지",
  },
];

export default mockBooks;
