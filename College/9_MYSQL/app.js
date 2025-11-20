const express = require("express");
const app = express();
const dbConnect = require("./dbConnect4mongo");

const port = 3000;
  
dbConnect();

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//http://localhost:3000/contacts/3
app.use("/contacts", require("./routes/contactRoutes"));


app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
}); 
