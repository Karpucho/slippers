const checkIsAuth = (req, res, next) => {
  // console.log(req.session);
  if (req.session.user) {
    res.locals.isAuth = true;
    res.locals.user = req.session.user;
  }
  next();
};

module.exports = checkIsAuth;
