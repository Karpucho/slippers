const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Cart, RatingFromUser, Token }) {
      User.hasMany(Cart, { foreignKey: 'userId' });
      User.hasMany(RatingFromUser, { foreignKey: 'userId' });
      User.hasOne(Token, { foreignKey: 'userId' });
    }
  }
  User.init({
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    activationLink: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
