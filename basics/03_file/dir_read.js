// 디렉터리 읽기
// 동기 처리
const fs = require("fs");

let files = fs.readdirSync("./");
console.log(files);


// 비동기 처리
const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
    return;   // 오류 발생시 즉시 반환
  }
  console.log(files);
});
