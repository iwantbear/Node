// html 예시 

const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("요청 접속");
});

server.listen(3000, () => {
  console.log("서버 구동");
});
