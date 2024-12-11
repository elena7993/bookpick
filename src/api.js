// export const testapi = () => {
//   const testUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbjzgucome2011001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;
//   return fetch(testUrl).then((res) => res.json());
// };

// console.log(testapi());

// ttbjzgucome2011001

// export const testapi = () => {
//   const testUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbjzgucome2011001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;
//   return fetch(testUrl).then((res) => res.json());
// };

// // 호출 후 결과 출력
// testapi().then((data) => {
//   console.log("API 호출 결과:", data);
// });

export const testapi = () => {
  const testUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbjzgucome2011001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset-utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };

  return fetch(testUrl, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching API:", error);
    });
};

// 호출 후 결과 출력
testapi().then((data) => {
  console.log("API 호출 결과:", data);
});
