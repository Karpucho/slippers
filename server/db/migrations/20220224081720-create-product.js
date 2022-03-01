module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
<<<<<<< HEAD
        allowNull: false,
        type: Sequelize.TEXT,
      },
      categoryId: {
        allowNull: false,
=======
        type: Sequelize.TEXT,
      },
      categoryId: {
>>>>>>> 5b49821df5d4bef19398b224c3699b53538b8778
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
        },
      },
      price: {
<<<<<<< HEAD
        allowNull: false,
=======
>>>>>>> 5b49821df5d4bef19398b224c3699b53538b8778
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Products');
  },
};
