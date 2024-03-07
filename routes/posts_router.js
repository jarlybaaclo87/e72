const express = require("express");
const router = express.Router();

//controller
const postController = require("../controller/post.controller.js");

//routes
router.get("/", postController.getALL);
router.post("/", postController.create);
router.get("/:id", postController.getById);
router.get("/:id", postController.update);
router.delete("/:id", postController.delete);
module.exports = router;