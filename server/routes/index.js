const router = require("express").Router();
const userRouter = require("./user.router");
// const dogRouter = require("./d.router");
const authRouter = require("./auth.router");
const logoutRouter = require("./logout.router");

router.use("/api/user", userRouter);
// router.use("/api/dog", dogRouter);
router.use("/", authRouter);
router.use("/logout", logoutRouter);

module.exports = router;
