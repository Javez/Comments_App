const Sequelize = require("sequelize");
const { User } = require("./user.model");
const { Comment } = require("./comment.model");

const options = {
  dialect: "postgres",
};

const sequelize = new Sequelize(options);

export {
  User,
  Comment,
  sequelize,
};
