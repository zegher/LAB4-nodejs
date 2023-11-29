// require express
const express = require("express");
// create a new router
const router = express.Router();

// import controller
const messagesController = require("../../../controllers/api/v1/messages");

//get the messages
router.get("/", messagesController.index);
//create a new message
router.post("/", messagesController.create);
//get message by id
router.get("/:id", messagesController.getMessageById);

//delete message by id
router.delete("/:id", messagesController.deleteMessageById);

module.exports = router;
