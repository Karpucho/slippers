module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'GIANVITO ROSSI', categoryId: 1, gender: 'female', description: 'Шлепанцы бежевые через палец', photo: '', rating: 0, price: 45990, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GIANVITO ROSSI', categoryId: 1, gender: 'male', description: 'Шлепанцы чёрные через палец', photo: '', rating: 0, price: 55990, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE&GABBANA', categoryId: 3, gender: 'female', description: 'Сланцы SAINT BIRTH бело-красные', photo: '', rating: 0, price: 39640, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE&GABBANA', categoryId: 3, gender: 'male', description: 'Сланцы SAINT BIRTH белые', photo: '', rating: 0, price: 20240, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'STOKTON', categoryId: 2, gender: 'female', description: 'Сандалии черно-белые с клёпками на липучке', photo: '', rating: 0, price: 14870, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'STOKTON', categoryId: 2, gender: 'male', description: 'Сандалии черные с клёпками на липучке', photo: '', rating: 0, price: 21340, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products');
  },
};
