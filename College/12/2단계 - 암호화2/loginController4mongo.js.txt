const asyncHandler = require("express-async-handler");
const crypto = require('crypto'); // npm i crypto
const User = require("../models/userModel");

//@desc Get login page
//@route GET /
const getLogin = (req, res) => {
  // loginController-1.js
  // res.status(200).send("home");
  res.render("home");
};

//@desc Login user
//@route POST /
const loginUser = asyncHandler(async (req, res) => {
  // loginController-2.js
  const { username, password } = req.body;
  // pw1 : 사용자가 입력한 비번을 암호화 한것
  // pw2 : 사용자가 처음 등록했을때 비번을 암호화 한것
  const pw1 = crypto.createHash('sha256').update(password).digest('hex');
  // const pw2 = crypto.createHash('sha256').update('1234').digest('hex');

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: "아이디 또는 비밀번호를 확인하기 바랍니다." });
  }

  if (pw1 === user.password) {
    res.redirect("/contacts");
  }
  else {
    res.status(401).json({ message: "아이디 또는 비밀번호를 확인하기 바랍니다." });
  }
});

//@desc Register Page
//@route GET /register
const getRegister = (req, res) => {
  res.render("register");
};

// @desc Register user
// @route POST /register
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;
  if (password === password2) {
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    console.log(hashedPassword);
    const user = await User.create({ username, password: hashedPassword });
    //res.status(201).json({ message: "Register successful", user });
    res.redirect("/contacts");
  } else {
    res.send("Register Failed");
  }
});

module.exports = { getLogin, loginUser, getRegister, registerUser };
