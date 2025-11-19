// 파일에 기록
const fs = require("fs");

// 동기처리
const data = fs.readFileSync("example.txt", "utf8");
fs.writeFileSync("text-1.txt", data);



// 비동기 처리 
fs.readFile("./example.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    fs.writeFile("./text-2.txt", data, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("text-2.txt is saved!");
    });
  });




// 파일 존재 여부 체크
const data2 = fs.readFileSync("example.txt", "utf8");
if (fs.existsSync("text-1.txt")) {
  console.log("file already exist");
} else {
  writeFileSync("text-1.txt", data2);
}




// 기존 파일에 내용 추가
let content = `
============================
새로운 내용을 추가해 보겠습니다. 
============================
`;

fs.writeFileSync("text-1.txt", content, { flag: "a" });



// 기존 파일에 내용추가 2 보통 이거 사용
fs.appendFile("./test-2.txt", "₩n₩n 새로운 내용 추가", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("appending to file");
});

