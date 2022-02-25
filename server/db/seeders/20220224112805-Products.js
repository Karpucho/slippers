module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Products', [
      {

        name: 'ROSSI', categoryId: 1, gender: 'female', description: 'Шлепанцы бежевые', photo: '', rating: 4, price: 1990, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GIANVITO', categoryId: 1, gender: 'male', description: 'Шлепанцы чёрные', photo: '', rating: 5, price: 5440, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GABBANA', categoryId: 3, gender: 'female', description: 'Сланцы SAIЫВАПРОNT BIRTH', photo: '', rating: 1, price: 3900, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE&GABBANA', categoryId: 3, gender: 'male', description: 'Сланцы BIRTH белые', photo: '', rating: 2, price: 21240, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'KTON', categoryId: 2, gender: 'female', description: 'Сандалии чернЫВАПРОЛо-белые на липучке', photo: '', rating: 3, price: 20870, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'STO', categoryId: 2, gender: 'male', description: 'Сандалии чернВАПРОЛДые с клёпками', photo: '', rating: 3, price: 11340, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ROВВАДВТАSSI', categoryId: 1, gender: 'female', description: 'Шлепанцы бежевые', photo: '', rating: 5, price: 1590, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'NVITO', categoryId: 1, gender: 'male', description: 'Шлепанцы чёрные', photo: '', rating: 4, price: 2000, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GAB ANA', categoryId: 3, gender: 'female', description: 'СлаВАПРОнцы SAINT BIRTH', photo: '', rating: 1, price: 3900, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE', categoryId: 3, gender: 'male', description: 'Сланцы BIФЫВАПРОRTH белые', photo: '', rating: 2, price: 2140, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'KTON?? ММ', categoryId: 2, gender: 'female', description: 'СандаЫВАПРОЛлии черно-белые на липучке', photo: '', rating: 3, price: 2070, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ВВВВВВВO', categoryId: 2, gender: 'male', description: 'Сандалии черные с клёпками', photo: '', rating: 4, price: 1140, createdAt: new Date(), updatedAt: new Date(),

      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products');
  },
};
