module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Comments', [
      {
        authorName: 'IVAn', text: 'Мне очень понравились! Советую всем!', rating: 5, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        authorName: 'svetVkonce', text: 'А мне не оч! Дорого и неудобно!', rating: 5, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        authorName: 'vov', text: 'Супер класс', rating: 5, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        authorName: 'покупатель', text: 'буэ', rating: 1, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        authorName: 'лошадь', text: 'хоп хэй', rating: 4, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        authorName: 'предвестник', text: 'очень удобно', rating: 3, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        authorName: 'кто-то', text: '!!!!!!!!', rating: 5, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        authorName: '!!!!', text: 'хоп хэй', rating: 5, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        authorName: 'предвестник', text: 'rkfcc', rating: 2, photo: '', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Comments');
  },
};
