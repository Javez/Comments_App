import database from "../db/sequelize.db.js";

class CommentService {
  static async addComment(data) {
    let result;
    try {
      result = await database.Comment.create(data);
    } catch (error) {
      console.log(error);
    }
    return result;
  }
  static async addSubComment(data) {
    return database.Comment.create(data);
  }
  static async getCommentById(data) {
    return database.Comment.findByPk(data.id, {
      include: [
        {
          model: Comment,
          as: "comment",
        },
      ],
    });
  }
  static async getAllComments() {
    return database.Comment.findAll({
      include: [
        {
          model: Comment,
          as: "comment",
        },
      ],
    });
  }
  static async getSubCommentsByCommentId(data) {
    return database.Comment.findAll(comment, {
      where: { parentCommentId: data.id },
    });
  }
}

export default CommentService;
