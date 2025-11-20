// 비동기 처리
console.log("첫번째 작업");
setTimeout(() => {
  console.log("두번째 작업");
}, 3000);
console.log(`세번째 작업`);




// 콜백 함수를 사용해 비동기 처리
// 파일 이름을 표시하는 함수가 아무리 빨리 끝나더라도 디렉터리를 읽은 후에 실행
// reddir 함수를 실행한 후에 이어서 실행하도록 콜백 형태로 작성
const fs = require("fs");

let files = fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
  }
  console.log(files);
});

console.log("Code is done.");
