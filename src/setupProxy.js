const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/ttb", // 요청 URL 경로가 /ttb로 시작하는 경우 프록시가 적용됨
    createProxyMiddleware({
      target: "http://www.aladin.co.kr", // 실제 API 주소
      changeOrigin: true, // 프록시 요청의 출처를 변경
    })
  );
};
