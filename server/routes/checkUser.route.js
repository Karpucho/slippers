const router = require('express').Router();

// const { Product } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    function parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
      // console.log(JSON.parse(jsonPayload), 'ТОКЕН');
      return JSON.parse(jsonPayload);
    }
    const token = req.cookies.refreshToken;
    if (req.cookies.refreshToken) res.json(parseJwt(token));
    else { res.json({}); }
  });
module.exports = router;
