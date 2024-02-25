import Comment from "../db/models/comment.model.js";

class CommentService {
  static async addComment(data) {
    return Comment.create(data);
  }
  static async addSubComment(data) {
    return Comment.create(data);
  }
  static async getCommentById(data) {
    return Comment.findByPk(data.id, {
      include: [
        {
          model: Comment,
          as: "comment",
        },
      ],
    });
  }
  static async getAllComments() {
    return Comment.findAll({
      include: [
        {
          model: Comment,
          as: "comment",
        },
      ],
    });
  }
  static async getSubCommentsByCommentId(data) {
    return Comment.findAll(comment, {
      where: { parentCommentId: data.id },
    });
  }
}

export default CommentService;
