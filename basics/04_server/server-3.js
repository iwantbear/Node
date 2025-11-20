// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method); // 요청 메서드 확인 (CRUD 중)
  
  // 응답 헤더를 만들때 setHeader() 사용
  // 서버에서 텍스트 자료를 가져와서 처리
  res.setHeader("Content-Type", "text/plain"); 

  // 상태 코드(200)를 헤더와 함께 기록하려면 writeHead() 사용
  // res.writeHead(200, {"Content-Type": "test/plain"});

  // 응답 내용을 여러번 나눠서 화면에 표시한다면 write 함수 여러번 작성, 마지막에 end
  // 텍스트 문자열을 한 번만 보내고 연결 종료시에 
  // res.end("내용");   <<<<< 같이 end() 함수 안에 써도됨
  res.write("Hello Node"); 
  res.end(); // 응답 종료
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});
