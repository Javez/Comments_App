const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comment.controller");

router.post("/addUser", CommentController.addUser);
router.get("/getUser/:userId", CommentController.getUser);
router.get("/getUsers", CommentController.getUsers);

export default router
