const express = require("express");
const router = express.Router();

router
  .route("/")
  // 모든 연락처 가져오기
  .get((req, res) => {
    // res.status(200).send("Contacts Page");
    const result = {
	    '1': { 'name': '홍길동', 'email': 'hong@abc.com', 'phone': '0101234' },
	    '2': { 'name': '이순신', 'email': 'lees@def.com', 'phone': '0104567' },
	    '3': { 'name': '강감찬', 'email': 'kang@ghp.com', 'phone': '0106789' }
    }

    res.status(200).send(result);
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
    // 연락처 상세보기
    const result = {
	    '2': { 'name': '이순신', 'email': 'lees@def.com', 'phone': '0104567' }
    }

    //res.status(200).send(`View Contact for ID: ${req.params.id}`);
    res.status(200).send(result);
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
