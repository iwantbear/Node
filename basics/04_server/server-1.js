// HTTP 모듈로 서버 만들기
// cresteServer 함수
// req : 클라이언트 요청
// res : 서버에서 받는 응답
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request from client")
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});



//
