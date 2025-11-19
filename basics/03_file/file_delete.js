// 파일 삭제 
const fs = require("fs");



// 동기 처리
fs.unlinkSync("./text-1.txt");
console.log("file deleted");





// 비동기 처리
if (!fs.existsSync("./text-2.txt")) {
  console.log("file does not exist");
  
} else {
  fs.unlink("./text-2.txt", () => {
    console.log("file deleted");
  });
}




// 파일 존재 여부 체크 후 삭제
if (!fs.existsSync("./text-1.txt")) {
    console.log("file does not exist");

  } else {
    fs.unlinkSync("./text-1.txt");
    console.log("file deleted");
  }
  