const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Product }) {
      // Comment.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  Comment.init({
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
      },
    },
    authorName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
