import CommentController from "../controllers/comment.controller.js";
const commentRoutes = (socket) => {
  socket.on("addComment", async (commentDataString) => {
    try {
      const newComment = await CommentController.addComment(
        socket,
        commentDataString
      );
      socket.emit("getAllComments", { success: true, comment: newComment });
    } catch (error) {
      console.log(error);
      socket.emit("Error", {
        success: false,
        error: error.message || "Failed to add comment",
      });
    }
  });

  socket.on("addSubComment", async (commentDataString) => {
    try {
      const newComment = await CommentController.addSubComment(
        socket,
        commentDataString
      );
      socket.emit("getAllComments", { success: true, comment: newComment });
    } catch (error) {
      console.log(error);
      socket.emit("Error", {
        success: false,
        error: error.message || "Failed to add comment",
      });
    }
  });

  socket.on("getCommentById", async (data) => {
    try {
      const comment = await CommentController.getCommentById(socket, data);
      socket.emit("returnComment", { success: true, comment });
      console.log(comment);
      return comment;
    } catch (error) {
      console.log(error);
      socket.emit("Error", {
        success: false,
        error: "Failed to get comment by ID",
      });
    }
  });

  socket.on("getAllComments", async () => {
    try {
      const comments = await CommentController.getAllComments(socket);
      socket.emit("allComments", { success: true, comments });
      console.log(comments);
      return comments;
    } catch (error) {
      console.log(error);
      socket.emit("Error", {
        success: false,
        error: "Failed to get all comments",
      });
    }
  });

  socket.on("getSubCommentsByCommentId", async (id) => {
    try {
      const subComments = await CommentController.getSubCommentsByCommentId(
        socket,
        id
      );
      socket.emit("subCommentsByCommentId", { success: true, subComments });
      console.log(subComments);
      return subComments;
    } catch (error) {
      console.log(error);
      socket.emit("Error", {
        success: false,
        error: "Failed to get sub-comments by comment ID",
      });
    }
  });
};

export default commentRoutes;
