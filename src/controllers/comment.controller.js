const { Comment } = require("../models/comment.model");

class CommentController {
  static async createComment(req, res) {
    // TODO: Validate request using middleware
    // TODO: Save comment to the database
  }

  static async getComments(req, res) {
    // TODO: Fetch comments from the database
    // TODO: Return comments with cascade view
  }
}

export default CommentController;
