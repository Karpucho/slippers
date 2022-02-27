const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({
      Cart, Category, SizesOfProduct,
    }) {
      Product.hasMany(Cart, { foreignKey: 'productId' });
      Product.belongsTo(Category, { foreignKey: 'categoryId' }, {
        onDelete: 'cascade',
      });
      Product.hasMany(SizesOfProduct, { foreignKey: 'productId' }, {
        onDelete: 'cascade',
      });
    }
  }
  Product.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
      },
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
