module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Nike Air Huarache', categoryId: 1, gender: 'female', description: '— перфорация в районе язычка — технология Dynamic Fit — мягкая амортизирующая подошва из пеноматериала', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/56b/1164_1748_1/56bca55b6cc9fe0ea1e8cf46fb5e4345.jpg', rating: 4, price: 1990, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GIANVITO', categoryId: 1, gender: 'male', description: 'Шлепанцы чёрные', photo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', rating: 5, price: 5440, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GABBANA', categoryId: 3, gender: 'female', description: 'Сланцы SAIЫВАПРОNT BIRTH', photo: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 1, price: 3900, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE&GABBANA', categoryId: 3, gender: 'male', description: 'Сланцы BIRTH белые', photo: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', rating: 2, price: 21240, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'KTON', categoryId: 2, gender: 'female', description: 'Сандалии чернЫВАПРОЛо-белые на липучке', photo: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80', rating: 3, price: 20870, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'STO', categoryId: 2, gender: 'male', description: 'Сандалии чернВАПРОЛДые с клёпками', photo: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', rating: 3, price: 11340, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ROВВАДВТАSSI', categoryId: 1, gender: 'female', description: 'Шлепанцы бежевые', photo: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80', rating: 5, price: 1590, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'NVITO', categoryId: 1, gender: 'male', description: 'Шлепанцы чёрные', photo: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', rating: 4, price: 2000, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'GAB ANA', categoryId: 3, gender: 'female', description: 'СлаВАПРОнцы SAINT BIRTH', photo: 'https://images.unsplash.com/photo-1602033693387-3531914e7185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80', rating: 1, price: 3900, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOLCE', categoryId: 3, gender: 'male', description: 'Сланцы BIФЫВАПРОRTH белые', photo: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', rating: 2, price: 2140, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'KTON?? ММ', categoryId: 2, gender: 'female', description: 'СандаЫВАПРОЛлии черно-белые на липучке', photo: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80', rating: 3, price: 2070, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ВВВВВВВO', categoryId: 2, gender: 'male', description: 'Сандалии черные с клёпками', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 4, price: 1140, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'OBYV', categoryId: 1, gender: 'kid', description: 'Сандалии серо-буро-малиновые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 4, price: 990, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'FROMKIDS', categoryId: 2, gender: 'kid', description: 'Шлепанцы детские', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 2, price: 2120, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'NIKE', categoryId: 3, gender: 'kid', description: 'Сланцы с липучкой', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 3, price: 666, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ABIBAS', categoryId: 1, gender: 'kid', description: 'Сандалии с заклепками', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 5, price: 1488, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'SREEBOK', categoryId: 2, gender: 'kid', description: 'Шлепанцы шлепковые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 1, price: 3510, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'BOLSCHEVICHKA', categoryId: 3, gender: 'kid', description: 'Сланцы голубоватые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 5, price: 1560, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products');
  },
};
// module.exports = {
//   up: async (queryInterface) => {
//     await queryInterface.bulkInsert('Products', [
//       {
//         name: 'Nike Air Huarache', categoryId: 1, gender: 'female', description: 'Сланцы — перфорация в районе язычка — технология Dynamic Fit — мягкая амортизирующая подошва из пеноматериала', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/774/1164_1748_1/7749201e93f2a57c53b9fdcf929cfe20.jpg', rating: 4, price: 1990, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'New Balance 997', categoryId: 1, gender: 'male', description: ' Сланцы— вставки из материала Cordura — пеноматериал EVA для мидсоля — прямая шнуровка', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/153/1164_1748_1/153ca4f01f7d9ff841a552df86e535f4.jpg', rating: 5, price: 5440, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'New Balance XC-72', categoryId: 3, gender: 'male', description: 'Сланцы Цвета: Белый  Страна: Китай Состав: Кожа, синтетика, текстиль, резина', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/6b9/1164_1748_1/6b9bfe7c3237c4e143e661ed443d00a9.jpg', rating: 1, price: 3900, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'Nike WMNS Icon Classic Sandal', categoryId: 3, gender: 'female', description: ' Сланцы Пол: Женское Цвета: Розовый Страна: Вьетнам', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/e80/1164_1748_1/e80bdd50c9c944856c5df0806395ee59.jpg', rating: 2, price: 21240, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'Crocs Classic Hiker Peace Out', categoryId: 2, gender: 'female', description: 'Сандалии Цвета: Белый / Разноцветный Страна: Китай', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/5c2/1164_1748_1/5c253e2a78d525d8a1e3cd728e45b5c4.jpg', rating: 3, price: 20870, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'Nike Free Terra Vista', categoryId: 2, gender: 'male', description: 'Сланцы — сетка, искусственная замша и канвас для верха кроссовок — петельчатая шнуровка — петля на заднике для удобства надевания', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/e24/1164_1748_1/e24c0e85cc80937ef90b6eb3db00b33f.jpg', rating: 3, price: 11340, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'adidas Originals Streetball II', categoryId: 1, gender: 'male', description: 'Сланцы — натуральная замша и текстиль для верха кроссовок— комбинированная шнуровка — пеноматериал LightStrike для амортизации', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/e0c/1164_1748_1/e0c90e221505fde3eb4afcf5d6badb0d.jpg', rating: 5, price: 1590, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'adidas Originals Streetball II ', categoryId: 1, gender: 'male', description: 'Сланцы — натуральная замша и текстиль для верха кроссовок— комбинированная шнуровка — пеноматериал LightStrike для амортизации', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/6d4/1164_1748_1/6d4a2dc26c24c65a7acae10afd9e7a0f.jpg', rating: 4, price: 2000, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'Nike Air Max Terrascape Plus', categoryId: 3, gender: 'female', description: 'Сланцы SAINT BIRTH', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/56b/1164_1748_1/56bca55b6cc9fe0ea1e8cf46fb5e4345.jpg, rating: 1, price: 3900, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'Nike Air', categoryId: 3, gender: 'male', description: 'Сланцы BIФЫВАПРОRTH белые', photo: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', rating: 2, price: 2140, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'adidas Originals', categoryId: 2, gender: 'female', description: 'Сланцы черно-белые на липучке', photo: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80', rating: 3, price: 2070, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'Nike', categoryId: 2, gender: 'male', description: 'Сандалии черные с клёпками', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 4, price: 1140, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'Nike', categoryId: 1, gender: 'kid', description: 'Сандалии серо-буро-малиновые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 4, price: 990, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'FROMKIDS', categoryId: 2, gender: 'kid', description: 'Шлепанцы детские', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 2, price: 2120, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'NIKE', categoryId: 3, gender: 'kid', description: 'Сланцы с липучкой', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 3, price: 666, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'ABIBAS', categoryId: 1, gender: 'kid', description: 'Сандалии с заклепками', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 5, price: 1488, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'SREEBOK', categoryId: 2, gender: 'kid', description: 'Шлепанцы шлепковые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 1, price: 3510, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//       {
//         name: 'BOLSCHEVICHKA', categoryId: 3, gender: 'kid', description: 'Сланцы голубоватые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 5, price: 1560, status: 'active', createdAt: new Date(), updatedAt: new Date(),
//       },
//     ]);
//   },

//   down: async (queryInterface) => {
//     await queryInterface.bulkDelete('Products');
//   },
// };
