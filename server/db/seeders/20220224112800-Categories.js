module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'cfylfk', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories');
  },
};
