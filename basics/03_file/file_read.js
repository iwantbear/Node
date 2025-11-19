// 파일 읽기
// 동기처리 
const fs = require("fs");

const data = fs.readFileSync("example.txt");
console.log(data);


const data2 = fs.readFileSync("example.txt", "utf8");
console.log(data2);



// 비동기 처리
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
