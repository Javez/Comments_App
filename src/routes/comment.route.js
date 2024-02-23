const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comment.controller");

router.post("/addComment", CommentController.addComment()); 
router.post("/addSubcoment", CommentController.addSubcomment());
router.get("/getCommentById", CommentController.getCommentById());
router.get("/getAllComments", CommentController.getAllComments());
router.get("/getSubCommentsByCommentId", CommentController.getSubCommentsByCommentId());

export default router
