// express server 만들기 
// 노드몬 사용시 터미널에 node app.js가 아닌 nodemon app.js로 실행
const express = require("express");
const app = express();
const port = 3000;

// get : 요청 방식 (GET)
// / : 요청 경로 
app.get("/", (req, res) => {   
    res.status(200);
    res.send("Hello Node!");
});
app.listen(port,() => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});