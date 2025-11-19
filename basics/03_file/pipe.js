// 파이프 (pipe)
// 리더블 스트림으로 읽어 와서 라이터블 스트림으로 파일에 기록
// 파이프를 사용하면 이벤트가 발생했을 때 따로 가져오고 기록하던 것을 한꺼번에 처리

const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt", "utf8");
const writeStream = fs.createWriteStream("./writePipe.txt");

readStream.pipe(writeStream);
