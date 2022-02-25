module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'ROSSI', categoryId: 1, gender: 'female', description: 'Шлепанцы бежевые', photo: '', rating: 0, price: 15990, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GIANVITO', categoryId: 1, gender: 'male', description: 'Шлепанцы чёрные', photo: '', rating: 0, price: 25000, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GABBANA', categoryId: 3, gender: 'female', description: 'Сланцы SAINT BIRTH', photo: '', rating: 0, price: 39000, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE&GABBANA', categoryId: 3, gender: 'male', description: 'Сланцы BIRTH белые', photo: '', rating: 0, price: 210240, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'KTON', categoryId: 2, gender: 'female', description: 'Сандалии черно-белые на липучке', photo: '', rating: 0, price: 20870, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'STO', categoryId: 2, gender: 'male', description: 'Сандалии черные с клёпками', photo: '', rating: 0, price: 11340, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products');
  },
};
