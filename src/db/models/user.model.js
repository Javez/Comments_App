import Sequelize from "sequelize";

const initUserModel = (sequelize) => {
const newUser = sequelize.define("user", {
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
});
  return newUser;
}

export default initUserModel;
