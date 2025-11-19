// 버퍼 : 파일을 읽어올때 한번에 버퍼 하나 크기만큼만 쪼개서 가져오고 버퍼가 가득차면 전달한다 
// 노드의 버퍼는 처음부터 고정되어 있고 내용이 이진값으로 저장

const fs = require("fs");

fs.readFile("example.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);   // 이진 데이터 표시
    console.log("\n");
    console.log(data.toString());   // 문자열로 변환해서 표시
  }
});
