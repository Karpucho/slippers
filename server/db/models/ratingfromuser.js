const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RatingFromUser extends Model {
    static associate({ Product, User }) {
      // RatingFromUser.belongsTo(Product, { foreignKey: 'productId' });
      // RatingFromUser.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  RatingFromUser.init({
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
      },
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    grade: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'RatingFromUser',
  });
  return RatingFromUser;
};
