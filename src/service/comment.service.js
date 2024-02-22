const { Comment } = require("../models/comment.model");

class CommentService {
  static async createComment(comment) {
    return Comment.create(comment);
  }

  static async getComments() {
    return Comment.findAll({
      include: [
        {
          model: User,
          as: "user"
        }
      ]
    });
  }

  static async getCommentById(id) {
    return Comment.findByPk(id, {
      include: [
        {
          model: User,
          as: "user"
        }
      ]
    });
  }

  static async updateComment(id, comment) {
    return Comment.update(comment, {
      where: { id }
    });
  }

  static async deleteComment(id) {
    return Comment.destroy({
      where: { id }
    });
  }
}

export default CommentService;


