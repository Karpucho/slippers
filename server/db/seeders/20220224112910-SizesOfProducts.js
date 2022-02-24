module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('SizesOfProducts', [
      {
        productId: 1, sizeNumber: 35, itemsLeft: 100, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 2, sizeNumber: 36, itemsLeft: 80, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 3, sizeNumber: 43, itemsLeft: 24, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 4, sizeNumber: 41, itemsLeft: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 5, sizeNumber: 37, itemsLeft: 49, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 6, sizeNumber: 38, itemsLeft: 79, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('SizesOfProducts');
  },
};
