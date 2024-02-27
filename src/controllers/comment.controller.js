import CommentService from "../service/comment.service.js";

class CommentController {
  static async addComment(socket, commentData) {
    try {
      const commentDataObject = JSON.parse(commentData);
      const { userId, parentCommentId, text, image, file } = commentDataObject;

      const data = {
        userId: userId,
        parentCommentId: parentCommentId,
        text: text,
      };
      const comment = await CommentService.addComment(data);
      socket.emit("commentAdded", { success: true, comment });
    } catch (error) {
      console.log(error);
      socket.emit("commentAdded", {
        success: false,
        error: error.message || "Failed to add comment",
      });
    }
  }
  static async addSubComment(socket, commentData) {
    try {
      const data = {
        parentCommentId: commentData.parentCommentId,
        text: commentData.text,
        image: commentData.image,
        file: commentData.file,
      };

      const comment = await CommentService.addSubComment(data);
      socket.emit("subCommentAdded", { success: true, comment });
    } catch (error) {
      console.error(error);
      socket.emit("subCommentAdded", {
        success: false,
        error: error.message || "Failed to add sub-comment",
      });
    }
  }

  static async getCommentById(socket, commentData) {
    try {
      const data = {
        id: commentData.id,
      };
      const comment = await CommentService.getCommentById(data);
      socket.emit("commentDetails", { success: true, comment });
    } catch (error) {
      console.error(error);
      socket.emit("commentDetails", {
        success: false,
        error: error.message || "Failed to get comment details",
      });
    }
  }

  static async getAllComments(socket) {
    try {
      const comments = await CommentService.getAllComments();
      socket.emit("allComments", { success: true, comments });
    } catch (error) {
      console.error(error);
      socket.emit("allComments", {
        success: false,
        error: error.message || "Failed to get all comments",
      });
    }
  }

  static async getSubCommentsByCommentId(socket, commentData) {
    try {
      const data = {
        parentCommentId: commentData.id,
      };
      const subComments = await CommentService.getSubCommentsByCommentId(data);
      socket.emit("subCommentsByCommentId", { success: true, subComments });
    } catch (error) {
      console.error(error);
      socket.emit("subCommentsByCommentId", {
        success: false,
        error: error.message || "Failed to get sub-comments",
      });
    }
  }
}

export default CommentController;
