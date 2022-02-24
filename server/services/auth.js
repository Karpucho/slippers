const bcrypt = require('bcrypt');
const { User } = require('../db/models');

async function createUser(data) {
  const { name, email, password } = data;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    email,
    password: hashPassword,
  };

  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    throw new Error({ message: 'Такой пользователь уже существует' });
  }
  // eslint-disable-next-line no-return-await
  return await User.create(newUser);
}

async function login(data) {
  // eslint-disable-next-line no-useless-catch
  const { email, password } = data;
  // console.log(data);
  // eslint-disable-next-line no-useless-catch
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    // console.log(11111, user);
    if (!user) {
      // console.log("AAAA");
      throw new Error('email некорректный!');
    }
    const isConfirmPassword = await bcrypt.compare(password, user.password);
    if (!isConfirmPassword) throw new Error('Пароль неверный');
    return user;
  } catch (error) {
    // console.log("11111", error);
    throw error;
  }
}

module.exports = {
  createUser,
  login,
};
