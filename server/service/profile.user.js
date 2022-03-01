const { User, Product } = require('../db/models');

async function getUserById(id) {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  if (!user) {
    throw new Error('запрашиваемого пользователя не существует');
  }
  return user;
}

async function updateUser(id, data) {
  const currentUser = await User.findOne({
    where: {
      id,
    },
  });
  currentUser.set(data);
  await currentUser.save();
}

async function getUserProduct(id) {

  const userProducts = await Product.findAll({
    where: {
      user_id: id,
    },
  });
  if (!userProducts) {
    throw new Error('id неверный');
  }
  return userProducts;
}


module.exports = {
  getUserById,
  updateUser,
  getUserProduct
};
