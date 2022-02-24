const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ Product, User }) {
      Cart.belongsTo(User, { foreignKey: 'userId' });
      Cart.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  Cart.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
      },
    },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
