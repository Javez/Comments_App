const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comment.controller");

router.post("/", CommentController.createComment);
router.get("/:commentId", CommentController.getComments);

export default router
