const router = require('express').Router();
const profileRouter = require('./profile.route');
const userRouter = require('./users.route');

// const authMiddleware = require('../middlewares/auth.middleware');

// router.post(
//   '/registration',
//   body('email').isEmail(),
//   body('password').isLength({ min: 5 }),

//   userConroller.register,
// );

// router.post('/login', userConroller.login);
// router.get('/logout', userConroller.logout); // поменял запрос на get
// // активация аккаунта по ссылке
// router.get('/activate/:link', userConroller.activate);
// // перезаписывать аксесс токен когда токен помрет
// router.get('/refresh', userConroller.refresh);
// router.get('/users', authMiddleware, userConroller.getUsers);
// router.use('/products', productRoter);
router.use('/', userRouter);

router.use('/', profileRouter);

module.exports = router;
