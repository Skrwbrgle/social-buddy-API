"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      like.belongsTo(models.user);
      like.belongsTo(models.post);
    }
  }
  like.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Username must not be empty",
          },
        },
      },
      postId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Username must not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return like;
};
