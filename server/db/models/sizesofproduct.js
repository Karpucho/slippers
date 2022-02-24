const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SizesOfProduct extends Model {
    static associate({ Product }) {
      SizesOfProduct.hasMany(Product, { foreignKey: 'sizesId' });
    }
  }
  SizesOfProduct.init({
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
