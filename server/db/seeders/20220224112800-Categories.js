module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'шлёпанцы', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'сандалии', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'сланцы', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories');
  },
};
