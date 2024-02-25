import express from "express";
import CommentController from "../controllers/comment.controller.js";
import imageFileUploadMiddleware from "../middleware/imageOrFileUploadMiddleware.js";

const router = express.Router();

router.post(
  "/addComment",
  imageFileUploadMiddleware,
  CommentController.addComment
);
router.post(
  "/addSubcoment",
  imageFileUploadMiddleware,
  CommentController.addSubComment
);
router.get("/getCommentById", CommentController.getCommentById);
router.get("/getAllComments", CommentController.getAllComments);
router.get(
  "/getSubCommentsByCommentId",
  CommentController.getSubCommentsByCommentId
);

export default router;
