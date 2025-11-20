// 클라이언트에서 서버로 요청했을때 사용하는 객체 
// 터미널에 요청 객체가 표시됨

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req)
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});