"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user.hasMany(models.post);
      user.hasMany(models.comment);
      user.belongsToMany(models.post, { through: models.like });
    }
  }
  user.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username must not be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email must not be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password must not be empty",
          },
        },
      },
      image: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.image =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
