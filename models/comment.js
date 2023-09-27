"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.post);
      comment.belongsTo(models.user);
    }
  }
  comment.init(
    {
      textComment: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Comment must not be empty",
          },
        },
      },
      postId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Id post must not be empty",
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
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
