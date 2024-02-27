import CommentController from "../controllers/comment.controller.js";
const commentRoutes = (socket) => {
  socket.on("addComment", async (commentDataString) => {
    try {
      console.log(commentDataString);
      const newComment = await CommentController.addComment(socket, commentDataString);

      socket.emit("commentAdded", { success: true, comment: newComment });
    } catch (error) {
      console.error(error);
      socket.emit("commentAdded", {
        success: false,
        error: error.message || "Failed to add comment",
      });
    }
  });

  socket.on("addSubComment", async (subCommentData) => {
    try {
      const { image, file } = await handleFileUpload(subCommentData);

      const newSubComment = await CommentController.addSubComment({
        ...subCommentData,
        image,
        file,
      });
      socket.emit("subCommentAdded", {
        success: true,
        subComment: newSubComment,
      });
    } catch (error) {
      console.error(error);
      socket.emit("subCommentAdded", {
        success: false,
        error: error.message || "Failed to add sub-comment",
      });
    }
  });

  socket.on("getCommentById", async (commentId) => {
    try {
      const comment = await CommentController.getCommentById(commentId);
      socket.emit("commentById", { success: true, comment });
    } catch (error) {
      console.error(error);
      socket.emit("commentById", {
        success: false,
        error: "Failed to get comment by ID",
      });
    }
  });

  socket.on("getAllComments", async () => {
    try {
      const comments = await CommentController.getAllComments();
      socket.emit("allComments", { success: true, comments });
    } catch (error) {
      console.error(error);
      socket.emit("allComments", {
        success: false,
        error: "Failed to get all comments",
      });
    }
  });

  socket.on("getSubCommentsByCommentId", async (commentId) => {
    try {
      const subComments = await CommentController.getSubCommentsByCommentId(
        commentId
      );
      socket.emit("subCommentsByCommentId", { success: true, subComments });
    } catch (error) {
      console.error(error);
      socket.emit("subCommentsByCommentId", {
        success: false,
        error: "Failed to get sub-comments by comment ID",
      });
    }
  });
};

export default commentRoutes;
