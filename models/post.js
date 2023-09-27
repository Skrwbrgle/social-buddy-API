"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // post.belongsTo(models.user);
      post.hasMany(models.comment);
      post.belongsToMany(models.user, { through: models.like });
    }
  }
  post.init(
    {
      textPost: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Post must not be empty",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Id user must not be empty",
          },
        },
      },
      image: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (post, options) => {
          post.image =
            "https://media.istockphoto.com/id/1452662817/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=bGI_FngX0iexE3EBANPw9nbXkrJJA4-dcEJhCrP8qMw=";
        },
      },
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
