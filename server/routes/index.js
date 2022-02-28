const router = require('express').Router();
const profileRouter = require('./profile.route');
const userRouter = require('./users.route');

router.use('/', userRouter);
router.use('/', profileRouter);

module.exports = router;
