import Sequelize from "sequelize";

const initCommentModel = (sequelize) => {
  const newComment = sequelize.define("comment", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    parentCommentId: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    file: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
  return newComment;
}

export default initCommentModel;
