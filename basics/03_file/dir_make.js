// 디렉터리 만들기 
const fs = require("fs");

// 일반 디렉터리 
if (fs.existsSync("./test")) {
  console.log("folder already exists");
} else {
  fs.mkdir("./test", (err) => {  // 비동기 
    if (err) {
      console.error(err);
    }
    console.log("folder created");
  });
}




// 여러 계층의 디렉터리 만들기
// mkdir 함수의 recursive = true로 지정하면 존재하지 않던 상위 폴더까지 만듬
const fs = require("fs");

if (fs.existsSync("./test2/test3/test4")) {
  console.log("folder already exists");
} else {
  fs.mkdir("./test2/test3/test4", { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("folder created");
  });
}