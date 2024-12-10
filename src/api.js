const API_KEY = "ttbjzgucome2011001";
// const BASE_URL = "http://www.aladin.co.kr/ttb/api";
const BASE_URL = "/ttb/api";

// 1. 베스트셀러 도서 데이터 가져오기
export const fetchBestSellers = async () => {
  const API_URL = `${BASE_URL}/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=10&Start=1&SearchTarget=Book&Output=JS&Version=20131101`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.item || []; // 반환된 데이터 중 item 배열만 반환
  } catch (error) {
    console.error("Error fetching bestsellers:", error);
    return [];
  }
};

// 2. 특정 검색어로 도서 검색
export const fetchBooks = async (query, searchTarget = "Book") => {
  const API_URL = `${BASE_URL}/ItemSearch.aspx?ttbkey=${API_KEY}&Query=${encodeURIComponent(
    query
  )}&SearchTarget=${searchTarget}&MaxResults=10&Output=JS&Version=20131101`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.item || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

// 3. 카테고리 목록 가져오기
export const fetchCategories = async () => {
  const API_URL = `${BASE_URL}/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Category&MaxResults=12&Output=JS&Version=20131101`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.item || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
