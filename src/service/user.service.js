import database from "../db/sequelize.db.js";
class UserService {
  static async addUser(user) {
    try {
      let result;
      result = await database.User.create(user);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllUsers() {
    try {
      let result;
      result = await database.User.findAll();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserById(id) {
    try {
      const result = await database.User.findOne({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to retrieve user");
    }
  }
}

export default UserService;
