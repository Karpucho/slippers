const { Router } = require('express');
const { body } = require('express-validator');
const userConroller = require('../controllers/users.controller.js');

const router = new Router();
const authMiddleware = require('../middlewares/auth.middleware.js');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),

  userConroller.register,
);

router.post('/login', userConroller.login);
router.post('/logout', userConroller.logout);
// активация аккаунта по ссылке
router.get('/activate/:link', userConroller.activate);
// перезаписывать фксесс токен когда токен помрет
router.get('/refresh', userConroller.refresh);

router.get('/users', authMiddleware, userConroller.getUsers);

module.exports = router;
