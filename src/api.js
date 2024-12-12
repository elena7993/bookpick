// const fetch = require("node-fetch");

// import axios from "axios";

// export const testapi = () => {
//   const testUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbjzgucome2011001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;
//   return fetch(testUrl).then((res) => res.json());
// };

// console.log(testapi());

// // ttbjzgucome2011001

// // export const testapi = () => {
// //   const testUrl = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbjzgucome2011001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;
// //   return fetch(testUrl).then((res) => res.json());
// // };

// // // 호출 후 결과 출력
// // testapi().then((data) => {
// //   console.log("API 호출 결과:", data);
// // });

// export const testapi = () => {
//   const testUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbjzgucome2011001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=JS&Version=20131101`;
//   // console.log(testapi());
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json;charset-utf-8",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Credentials": "true",
//     },
//   };

//   return fetch(testUrl, options)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`HTTP Error: ${res.status}`);
//       }
//       return res.json();
//     })
//     .catch((error) => {
//       console.error("Error fetching API:", error);
//     });
// };

// testapi().then((data) => {
//   console.log("API 호출 결과:", data);
// });

// const baseUrl = "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx";
// const ttbKey = "ttbjzgucome2011001"; // 너의 API 키
// const query = "javascript"; // 검색어
// const queryType = "Title"; // 제목 검색
// const searchTarget = "Book"; // 도서 검색
// const maxResults = 10; // 한 페이지에 최대 10개의 결과
// const output = "JS"; // JSON 형식으로 받기
// const version = "20131101"; // 최신 버전 사용

// const apiUrl = `${baseUrl}?ttbkey=${ttbKey}&Query=${encodeURIComponent(
//   query
// )}&QueryType=${queryType}&MaxResults=${maxResults}&SearchTarget=${searchTarget}&output=${output}&Version=${version}`;

// async function fetchBooks() {
//   try {
//     const response = await fetch(apiUrl); // API 호출
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json(); // JSON 형식으로 데이터 파싱
//     console.log(data); // 데이터 출력
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchBooks();

// import React, { useState } from "react";

// function BookSearch() {
//   const [query, setQuery] = useState(""); // 검색어 상태
//   const [books, setBooks] = useState([]); // 검색 결과 상태
//   const [error, setError] = useState(null); // 에러 상태

//   const fetchBooks = async () => {
//     const baseUrl = "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx";
//     const ttbKey = "ttbjzgucome2011001"; // 너의 API 키
//     const queryType = "Title"; // 제목 검색
//     const searchTarget = "Book"; // 도서 검색
//     const maxResults = 10; // 한 페이지 최대 10개
//     const output = "JS"; // JSON 출력
//     const version = "20131101";

//     // 요청 URL 구성
//     const apiUrl = `${baseUrl}?ttbkey=${ttbKey}&Query=${encodeURIComponent(
//       query
//     )}&QueryType=${queryType}&MaxResults=${maxResults}&SearchTarget=${searchTarget}&output=${output}&Version=${version}`;

//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json(); // JSON 데이터 파싱
//       setBooks(data.item); // 책 데이터 저장
//       setError(null); // 에러 초기화
//     } catch (err) {
//       console.error(err);
//       setError("책 정보를 불러오는 데 실패했습니다."); // 에러 메시지 저장
//     }
//   };
//   console.log("ff", fetchBooks());
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//       <h1>Aladin Book Search</h1>
//       <input
//         type="text"
//         placeholder="Enter book title"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)} // 검색어 업데이트
//         style={{ padding: "10px", width: "300px", marginRight: "10px" }}
//       />
//       <button
//         onClick={fetchBooks}
//         style={{ padding: "10px 20px", cursor: "pointer" }}
//       >
//         Search
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul style={{ marginTop: "20px", listStyleType: "none", padding: "0" }}>
//         {books.map((book) => (
//           <li
//             key={book.itemId}
//             style={{
//               marginBottom: "10px",
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           >
//             <strong>{book.title}</strong> - {book.author}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BookSearch;

// const getBooks = axios.create({
//   baseURL: "http://www.aladin.co.kr/ttb/api",
//   withCredentials: true,

//   params: {
//     ttbkey: "ttbjzgucome2011002",
//     output: "js",
//     Query: "aladdin",
//   },

//   // headers:{
//   //   Access-Control-Allow-Origin
//   // }
// });

// export const searchBooks = getBooks
//   .get("/ItemSearch.aspx")
//   .then((res) => res.data);
