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
    let result;
    try { 
      result = await database.User.findAll({
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
    return result;
  }

  static async getUserById(id) {
    let result;
    try {
      result = await database.User.findByPk(id, {
        include: [
          {
            model: User,
            as: "user",
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
    return result;
  }

  static async updateUser(id, user) {
    let result;
    try {
      result = await database.User.update(user, {
        where: { id },
      });
    } catch (error) {
      console.log(error);
    }
    return result;
  }

  static async deleteUser(id) {
    let result;
    try {
      result = await database.User.destroy({
        where: { id },
      });
    } catch (error) {
      console.log(error);
    }
    return 
  }
}

export default UserService;
