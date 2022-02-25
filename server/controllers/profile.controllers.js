const userService = require("../services/profile.user");

async function getUser(req, res) {
  try {
    const { id: userId } = req.params;
    const user = await userService.getUserById(userId);
    res.status(200).json({
      user,
      message: "найденный юзер",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function changeUser(req, res) {
  try {
    const { id: userId } = req.params;
    await userService.updateUser(userId, req.body);
    const user = await userService.getUserById(userId);
    res.status(200).json({
      user,
      message: "данные юзера обновлены",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  getUser,
  changeUser,
};
