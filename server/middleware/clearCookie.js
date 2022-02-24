const clearCookie = (req, res, next) => {
  if (req.cookies.user_id && !req.session.user) {
    res.clearCookie("user_sid");
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = clearCookie;
