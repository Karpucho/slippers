module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      {

        name: 'шлепки', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'сандалии', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'тапки', createdAt: new Date(), updatedAt: new Date(),

      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories');
  },
};
