module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define()(
    "Post",
    {
      title: { type: DataTypes.STRING(50), allowNull: false },
      content: { type: DataTypes.STRING(500), allowNull: false },
      price: { type: DataTypes.STRING(100), allowNull: false },
      //필요한 컬럼들
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4+general_ci", //한글저장
    }
  );
  User.associate = (db) => {};
  return User;
};
