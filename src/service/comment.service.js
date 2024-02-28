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
    let result;
    try {
      result = await database.Comment.create(data);
    } catch (error) {
      console.log(error);
    }
    return result;
  }
  static async getCommentById(id) {
    try {
      return await database.Comment.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async getAllComments() {
    try {
      return await database.Comment.findAll();
    } catch (error) {
      console.log(error);
    }
  }
  static async getSubCommentsByCommentId(id) {
    try {
      return await database.Comment.findAll({
        where: { parentCommentId: id },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default CommentService;
