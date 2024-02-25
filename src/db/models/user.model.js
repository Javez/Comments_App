import Sequelize from "sequelize";

const initUserModel = (sequelize) => {
  const User = sequelize.define("user", {
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
    avatarUrl: {
      type: Sequelize.STRING, 
      allowNull: true,
      validate: {
        isUrl: true, 
      },
    },
    avatarFile: {
      type: Sequelize.BLOB("long"), 
      allowNull: true,
    },
  });
  return User;
};

export default initUserModel;
