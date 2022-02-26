const { Router } = require('express');

const router = new Router();
const { body } = require('express-validator');
const userConroller = require('../controllers/users.controller');
const profileRouter = require('./profile.route');

const authMiddleware = require('../middlewares/auth.middleware');

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

router.use('/', profileRouter);

module.exports = router;
