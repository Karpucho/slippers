module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Comments', [
      {
        productId: 1, authorName: 'IVAn', text: 'Мне очень понравились! Советую всем!', photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 2, authorName: 'svetVkonce', text: 'А мне не оч! Дорого и неудобно!', photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 3, authorName: 'vov', text: 'Супер класс', photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 4, authorName: 'хэй', text: 'хэй хэй хэй', photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 5, authorName: 'хэй', text: 'хоп хэй', photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 6, authorName: 'предвестник', text: 'очень удобно', photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Comments');
  },
};
