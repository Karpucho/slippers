const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({
      Cart, RatingFromUser, Category, SizesOfProduct, Comment,
    }) {
      Product.hasMany(Cart, { foreignKey: 'productId' });
      Product.hasMany(RatingFromUser, { foreignKey: 'productId' });
      Product.belongsTo(Category, { foreignKey: 'categoryId' });
      Product.hasMany(SizesOfProduct, { foreignKey: 'productId' });
      Product.hasMany(Comment, { foreignKey: 'productId' });
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
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
