const userService = require("../services/user");

async function getUser(req, res) {
  // console.log(req.params.id);
  try {
    const { id: userId } = req.params;
    console.log(userId);
    const user = await userService.getUserById(userId);
    res.status(200).json({
      user,
      message: "найденный юзер",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

// async function changeUser(req, res) {
//   try {
//     const { userId } = req;
//     await userService.updateUser(userId, req.body);
//     const user = await userService.getUserById(userId);
//     res.status(200).json({
//       user,
//       message: "данные юзера обновлены",
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

module.exports = {
  getUser,
  // changeUser,
};
