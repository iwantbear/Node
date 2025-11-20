// 바디파서 미들웨어
// 서버로 요청을 보낼때 요청 본문에 담긴 것을 파싱하는 미들웨어
// 요청할때 전송한 자료를 프로그램에서 사용할 수 있는 형식으로 변환하는 것
// json() : Json 형식, urlencoded() : url로 인코딩된 본문을 파싱 

// POST 요청이 있을 떄 JSON 형식의 자료를 서버로 보낸다고 가정
const express = require("express");
const router = express.Router();

router
  .route("/")
  // 모든 연락처 가져오기
  .get((req, res) => {
    const result = {
        '1': { 'name': '홍길동', 'email': 'hong@abc.com', 'phone': '0101234' },
        '2': { 'name': '이순신', 'email': 'lees@def.com', 'phone': '0104567' },
        '3': { 'name': '강감찬', 'email': 'kang@ghp.com', 'phone': '0106789' }
    }
    res.status(200).send("Contacts Page");
  })
  .post((req, res) => {
    // 새 연락처 추가하기
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    res.status(201).send("Create Contacts");
  });

router
  .route("/:id")
  .get((req, res) => {
    const result = {
        '2': { 'name': '이순신', 'email': 'lees@def.com', 'phone': '0104567' }
    }
    // 연락처 상세보기
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
  })
  .put((req, res) => {
    // 연락처 수정하기
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    // 연락처 삭제하기
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
  });

module.exports = router;
