const { Sequelize } = require("sequelize");

class User extends Sequelize.Model {};

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    avatar: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;