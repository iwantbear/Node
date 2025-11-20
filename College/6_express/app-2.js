const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello Node!");
});

// Home
app.post("/home", (req, res) => {
  res.status(200).send("Home Page");
});

// About
app.put("/about", (req, res) => {
  res.status(201).send("About Page");
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
