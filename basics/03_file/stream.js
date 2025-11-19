// 리더블 스트림 
// 데이터를 읽기 위한 스트림
// 주로 서버에서 용량이 큰 데이터를 가져올 때 사용
const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt");
readStream.on("data", (chunk) => {
  console.log("new chunk received:");
  console.log(chunk);
});
readStream.on("end", () => {
  console.log("finished reading data");
});
readStream.on("error", (err) => {
  console.log(`Error reading the file: ${err}`);
});




// 라이터블 스트림
// 데이터를 기록하는 스트림
const readStream2 = fs.createReadStream("./readMe.txt", "utf8");
const writeStream = fs.createWriteStream("./writeMe.txt");

readStream2.on("data", (chunk) => {
  console.log("new chunk received:");
  writeStream.write(chunk);
});
