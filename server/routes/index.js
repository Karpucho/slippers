const router = require("express").Router();
const authRouter = require("./auth.route");
const userRouter = require("./user.route");

router.use("/", authRouter);
router.use("/", userRouter);

module.exports = router;
