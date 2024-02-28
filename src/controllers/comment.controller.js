import CommentService from "../service/comment.service.js";
import isCommentTextValid from "../middleware/commentTextValidation.middleware.js";
import isCommentImageValid from "../middleware/commentImageValidation.middleware.js";
import isCommentFileValid from "../middleware/commentFileValidation.midlleware.js";

class CommentController {
  static async addComment(socket, commentData) {
    let data;
    try {
      const commentDataObject = JSON.parse(commentData);
      const { userId, text, image, file } = commentDataObject;

      if (userId === null || userId === undefined || !/^\d+$/.test(userId)) {
        socket.emit("error", {
          success: false,
          error: "Invalid userId",
        });
        return;
      }

      const textValidationResult = isCommentTextValid(socket, text);
      if (!textValidationResult) return;
      data = { userId, text };

      const imageValidationResult = isCommentImageValid(socket, image);
      if (imageValidationResult) data.image = image;

      const fileValidationResult = isCommentFileValid(socket, file);
      if (fileValidationResult) data.file = file;

      const comment = await CommentService.addComment(data);
      socket.emit("getAllComments", { success: true, comment });
    } catch (error) {
      console.log(error);
      socket.emit("error", {
        success: false,
        error: error.message || "Failed to add comment",
      });
    }
  }
  static async addSubComment(socket, commentData) {
    let data;
    try {
      const commentDataObject = JSON.parse(commentData);
      const { userId, parentCommentId, text, image, file } = commentDataObject;

      if (userId === null || userId === undefined || !/^\d+$/.test(userId)) {
        socket.emit("error", {
          success: false,
          error: "Invalid userId",
        });
        return;
      }

      if (
        parentCommentId === null ||
        parentCommentId === undefined ||
        !/^\d+$/.test(userId)
      ) {
        socket.emit("error", {
          success: false,
          error: "Invalid userId",
        });
        return;
      }

      const textValidationResult = isCommentTextValid(socket, text);
      if (!textValidationResult) return;
      data = { userId, parentCommentId, text };

      const imageValidationResult = isCommentImageValid(socket, image);
      if (imageValidationResult) data.image = image;

      const fileValidationResult = isCommentFileValid(socket, file);
      if (fileValidationResult) data.file = file;

      const comment = await CommentService.addSubComment(data);
      socket.emit("getAllComments", { success: true, comment });
    } catch (error) {
      console.log(error);
      socket.emit("error", {
        success: false,
        error: error.message || "Failed to add sub-comment",
      });
    }
  }

  static async getCommentById(socket, commentData) {
    try {
      const commentDataObject = JSON.parse(commentData);
      const { id } = commentDataObject;

      if (isNaN(id) || Number(id) < 1 || Number(id) > 2147483647) {
        socket.emit("error", {
          success: false,
          error: "Invalid comment id",
        });
        return;
      }

      const data = {
        id: id,
      };

      const comment = await CommentService.getCommentById(id);
      socket.emit("getAllComments", { success: true, comment });
      return comment;
    } catch (error) {
      console.log(error);
      socket.emit("error", {
        success: false,
        error: error.message || "Failed to get comment details",
      });
    }
  }

  static async getAllComments(socket) {
    try {
      const comments = await CommentService.getAllComments();
      socket.emit("allComments", { success: true, comments });
      return comments;
    } catch (error) {
      console.log(error);
      socket.emit("error", {
        success: false,
        error: error.message || "Failed to get all comments",
      });
    }
  }

  static async getSubCommentsByCommentId(socket, commentData) {
    try {
      const commentDataObject = JSON.parse(commentData);
      const { id } = commentDataObject;

      if (isNaN(id) || Number(id) < 1 || Number(id) > 2147483647) {
        socket.emit("error", {
          success: false,
          error: "Invalid comment id",
        });
        return;
      }

      const subComments = await CommentService.getSubCommentsByCommentId(id);
      socket.emit("subCommentsByCommentId", { success: true, subComments });
      return subComments;
    } catch (error) {
      console.log(error);
      socket.emit("error", {
        success: false,
        error: error.message || "Failed to get sub-comments",
      });
    }
  }
}

export default CommentController;
