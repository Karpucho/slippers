const { Router } = require('express');
const { body } = require('express-validator');
const userConroller = require('../controllers/users.controller');

const router = new Router();
const authMiddleware = require('../middlewares/auth.middleware');
const productRoter = require('./products.router');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),

  userConroller.register,
);

router.post('/login', userConroller.login);
router.get('/logout', userConroller.logout); // поменял запрос на get
// активация аккаунта по ссылке
router.get('/activate/:link', userConroller.activate);
// перезаписывать фксесс токен когда токен помрет
router.get('/refresh', userConroller.refresh);
router.get('/users', authMiddleware, userConroller.getUsers);
router.use('/products', productRoter);

module.exports = router;
