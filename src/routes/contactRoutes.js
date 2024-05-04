const express = require("express");
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  editContact,
  deleteContact,
} = require("../controllers/contactController");
const { authGuard } = require("../middlewares/auth");

router.post("/", authGuard, createContact);

router.get("/", authGuard, getAllContacts);

router.get("/:contactId", authGuard, getContactById);

router.put("/:contactId", authGuard, editContact);

router.delete("/:contactId", authGuard, deleteContact);

module.exports = router;
