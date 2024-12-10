const API_KEY = "apittbjzgucome2011001";
const BASE_URL = "https://www.aladin.co.kr/ttb/api";

export const fetchBooks = async (query, searchTarget = "Book") => {
  try {
    const response = await fetch(
      `${BASE_URL}/ItemSearch.aspx?ttbkey=${API_KEY}&Query=${encodeURIComponent(
        query
      )}&SearchTarget=${searchTarget}&Output=JS&Version=20131101`
    );

    // 응답 처리
    if (!response.ok) {
      throw new Error("API 요청에 실패했습니다.");
    }

    const data = await response.json(); // JSON 형태로 변환
    return data; // 호출한 곳으로 데이터 반환
  } catch (error) {
    console.error("Error fetching books:", error);
    return null; // 오류 발생 시 null 반환
  }
};
