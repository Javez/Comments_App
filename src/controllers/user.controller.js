import { validationResult } from 'express-validator';
import userService from '../service/user.service.js';

class UserController {
  static async addUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

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

  static async getUserById(req, res) {
    try {
      const id = req.params.id;
      console.log(id);

      res.send(await userService.getUserById(id));
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