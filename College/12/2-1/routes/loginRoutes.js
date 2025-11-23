const express = require("express");
const router = express.Router();

// getLogin  : loginController-1.js
// loginUser : loginController-2.js
const { getLogin, loginUser } = require("../controllers/loginController4mongo");

router.route("/").get(getLogin).post(loginUser);

module.exports = router;
