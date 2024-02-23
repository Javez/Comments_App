import { Sequelize } from "sequelize";
import { User } from "./models/user.model";
import { Comment } from "./models/comment.model";
import dotenv from "dotenv";

dotenv.config();
const env = process.env.NODE_ENV || "development";

User.hasMany(Comment);
Comment.belongsTo(User);

Comment.hasMany(Comment, { as: "subComments", foreignKey: "parentId" });
Comment.belongsTo(Comment, { as: "parentComment", foreignKey: "parentId" });

const options = {
  dialect: process.env[`${env.toUpperCase()}_DIALECT`] || "",
  host: process.env[`${env.toUpperCase()}_HOST`] || "",
  port: process.env[`${env.toUpperCase()}_PORT`] || "",
  username: process.env[`${env.toUpperCase()}_USERNAME`] || "",
  password: process.env[`${env.toUpperCase()}_PASSWORD`] || "",
  database: process.env[`${env.toUpperCase()}_DATABASE`] || "",
};

const sequelize = new Sequelize(options);

export { User, Comment, sequelize };
