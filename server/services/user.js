const { User } = require("../db/models");

async function getUserById(id) {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  if (!user) {
    throw new Error("запрашиваемого пользователя не существует");
  }
  return user;
}

async function 
