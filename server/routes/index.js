const router = require('express').Router();
const profileRouter = require('./profile.route');
const userRouter = require('./users.route');

<<<<<<< HEAD
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
// перезаписывать аксесс токен когда токен помрет
router.get('/refresh', userConroller.refresh);
router.get('/users', authMiddleware, userConroller.getUsers);
router.use('/products', productRoter);
=======
router.use('/', userRouter);
>>>>>>> 3ba0b2c02141ae59e20b3505cf00ee20d5075492
router.use('/', profileRouter);

module.exports = router;
