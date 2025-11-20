// 앞서 두개로 쪼갠 app-2.js도 보기 힘드므로 파이썬에서 import 와 같이 
// 다른 파일의 모듈처럼 가져오도록 함

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

// 파이썬에서의 from ... import 부분이라고 생각하면 됨
app.use("/contacts", require("./routes/contactRoutes-1"));
app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
