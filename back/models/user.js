module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define()(
    "User",
    {
      //mysql에는 users 테이블이 생성됨
      //mysql2 -> 노드랑 mysql이랑 연결하는
      //id가 기본적으로 들어있음 -> primary key가 됨?
      email: { type: DataTypes.STRING(100), allowNull: false, unique: true }, //우리는 email로 로그인함
      nickname: { type: DataTypes.STRING(30), allowNull: false },
      password: { type: DataTypes.STRING(100), allowNull: false }, //패스워드는 100자리까지는 필요없지만 암호화가 필요해서
      location: { type: DataTypes.STRING(100), allowNull: false }, // 주소필요하니까
      greeting: { type: DataTypes.STRING(100), allowNull: true }, //자기소개
      grade: { type: DataTypes.STRING(100), allowNull: false }, //회원등급
    },
    {
      charset: "utf8",
      collate: "utf8+general_ci", //한글저장
    }
  );
  User.associate = (db) => {};
  return User;
};
