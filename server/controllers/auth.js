// const authService = require("../services/auth");

// async function signUp(req, res) {
//   try {
//     const user = await authService.createUser(req.body);
//     res.status(201).json({
//       success: true,
//       message: "Регистрация прошла успешно!",
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

// async function signIn(req, res) {
//   try {
//     const user = await authService.login(req.body);
//     // console.log(user);
//     res.status(200).json({
//       success: true,
//       message: "Авторизация прошла успешно!",
//     });
//   } catch (error) {
//     res.status(404).json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

// module.exports = {
//   signUp,
//   signIn,
// };
