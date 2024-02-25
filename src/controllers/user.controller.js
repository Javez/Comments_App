import userService from "../service/user.service.js";

class UserController {
  static async addUser(req, res) {
    try {
      const data = {
        username: req.body.username,
        email: req.body.email,
        avatarUrl: req.body.avatarUrl,
      };
      res.send(await userService.addUser(data));
    } catch (error) {
      console.log(error);
    }
  }

  static async getUser(req, res) {
    try {
      const data = {
        id: req.body.id,
      };
      res.send(await userService.getUser(id));
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllUsers(req, res) {
    try {
      res.send(await userService.getAllUsers());
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserController;
