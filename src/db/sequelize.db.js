import Sequelize from "sequelize";
import dotenv from "dotenv";
import initUserModel from "./models/user.model.js";
import initCommentModel from "./models/comment.model.js";
import initAssociations from "./models/associations.model.js";

dotenv.config();
const env = process.env.NODE_ENV || "development";

class Database {
  constructor(options) {
    this.sequelize = new Sequelize(options);
  }

  async openConnection() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
      return true;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      return false;
    }
  }

  async closeConnection() {
    try {
      await this.sequelize.close();
      console.log("Connection has been closed successfully");
      return true;
    } catch (error) {
      console.error("Unable to close the database connection:", error);
      return false;
    }
  }

  async createTable() {
    try {
      const user = initUserModel(this.sequelize);
      const comment = initCommentModel(this.sequelize);
      const { newUser, newComment } = initAssociations(user, comment);

      await this.sequelize.sync({ force: true });
      console.log("The tables were just (re)created!");
      return true;
    } catch (error) {
      console.error("Unable to recreate models:", error);
      return false;
    }
  }
}

const options = {
  dialect: process.env[`${env.toUpperCase()}_DIALECT`] || "",
  host: process.env[`${env.toUpperCase()}_HOST`] || "",
  port: process.env[`${env.toUpperCase()}_PORT`] || "",
  username: process.env[`${env.toUpperCase()}_USERNAME`] || "",
  password: process.env[`${env.toUpperCase()}_PASSWORD`] || "",
  database: process.env[`${env.toUpperCase()}_DATABASE`] || "",
};

const database = new Database(options);

export default database;