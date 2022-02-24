const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Cart, RatingFromUser }) {
      User.hasMany(Cart, { foreignKey: 'userId' });
      User.hasMany(RatingFromUser, { foreignKey: 'userId' });
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
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
