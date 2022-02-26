const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Product }) {
      Category.hasMany(Product, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
