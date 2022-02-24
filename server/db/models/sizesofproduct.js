const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SizesOfProduct extends Model {
    static associate({ Product }) {
      // SizesOfProduct.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  SizesOfProduct.init({
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
      },
    },
    sizeNumber: {
      type: DataTypes.INTEGER,
    },
    itemsLeft: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'SizesOfProduct',
  });
  return SizesOfProduct;
};
