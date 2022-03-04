module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'ROSSI', gender: 'female', description: 'Шлепанцы бежевые', photo: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80', rating: 4, price: 1990, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GIANVITO', gender: 'male', description: 'Шлепанцы чёрные', photo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', rating: 5, price: 5440, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GABBANA', gender: 'female', description: 'Сланцы SAIЫВАПРОNT BIRTH', photo: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 1, price: 3900, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE&GABBANA', gender: 'male', description: 'Сланцы BIRTH белые', photo: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', rating: 2, price: 21240, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'KTON', gender: 'female', description: 'Сандалии чернЫВАПРОЛо-белые на липучке', photo: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80', rating: 3, price: 20870, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'STO', gender: 'male', description: 'Сандалии чернВАПРОЛДые с клёпками', photo: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', rating: 3, price: 11340, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ROВВАДВТАSSI', gender: 'female', description: 'Шлепанцы бежевые', photo: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80', rating: 5, price: 1590, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'NVITO', gender: 'male', description: 'Шлепанцы чёрные', photo: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', rating: 4, price: 2000, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GAB ANA', gender: 'female', description: 'СлаВАПРОнцы SAINT BIRTH', photo: 'https://images.unsplash.com/photo-1602033693387-3531914e7185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80', rating: 1, price: 3900, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE', gender: 'male', description: 'Сланцы BIФЫВАПРОRTH белые', photo: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', rating: 2, price: 2140, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'KTON?? ММ', gender: 'female', description: 'СандаЫВАПРОЛлии черно-белые на липучке', photo: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80', rating: 3, price: 2070, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ВВВВВВВO', gender: 'male', description: 'Сандалии черные с клёпками', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 4, price: 1140, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'OBYV', gender: 'kid', description: 'Сандалии серо-буро-малиновые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 4, price: 990, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'FROMKIDS', gender: 'kid', description: 'Шлепанцы детские', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 2, price: 2120, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'NIKE', gender: 'kid', description: 'Сланцы с липучкой', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 3, price: 666, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ABIBAS', gender: 'kid', description: 'Сандалии с заклепками', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 5, price: 1488, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'SREEBOK', gender: 'kid', description: 'Шлепанцы шлепковые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 1, price: 3510, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'BOLSCHEVICHKA', gender: 'kid', description: 'Сланцы голубоватые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 5, price: 1560, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products');
  },
};
