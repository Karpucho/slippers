const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.changeUser);

module.exports = router;
