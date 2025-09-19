const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Post = sequelize.define(
    "Post",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      author: { type: DataTypes.STRING, allowNull: true },
      tags: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
      published: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      tableName: "posts",
      timestamps: true,
    }
  );
  return Post;
};
