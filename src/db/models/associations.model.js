
const initAssociations = (User, Comment) => {
  User.hasMany(Comment);
  Comment.belongsTo(User);
  Comment.hasMany(Comment, {
    as: "subComments",
    foreignKey: "parentCommentId",
  });
  Comment.belongsTo(Comment, {
    as: "parentComment",
    foreignKey: "parentCommentId",
  });
  return { User, Comment };
};

export default initAssociations;
