const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  createContact, 
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController4mongo");
//} = require("../controllers/contactController4mysql");

// http://localhost:3000/contacts/3
router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;