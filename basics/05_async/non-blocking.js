// 논블로킹 I/O   
// 네트워크르르 통해 클라이언트와 서버 간에 자료를 주고받아야 하는 작업에서는
// 시간 지연을 항상 고려해야함 -> 비동기 처리 

const fs = require("fs");

const data = fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
console.log("코드 끝!"); // 파일 읽기 전에 실행
