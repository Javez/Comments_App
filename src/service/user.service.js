import database from "../db/sequelize.db.js";
class UserService {
  static async addUser(user) {
    let result;
    try {
      result = await database.User.create(user);
    } catch (error) {
      console.log(error)
    }
    return result;
  }

  static async getUser() {
    return User.findAll({
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    });
  }

  static async getUserById(id) {
    return User.findByPk(id, {
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    });
  }

  static async updateUser(id, user) {
    return User.update(user, {
      where: { id },
    });
  }

  static async deleteUser(id) {
    return User.destroy({
      where: { id },
    });
  }
}

export default UserService;
