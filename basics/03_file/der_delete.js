// 디렉터리 삭제 
const fs = require("fs");

// 빈 디렉터리 삭제 
if (fs.existsSync("./test")) {
  fs.rmdir("./test", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("folder deleted");
    }
  });
} else {
  console.log("folder does not exist");
}




// 내용이 있는 디렉터리 삭제
fs.rm("./test2", { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("folder deleted");
    }
  });
  