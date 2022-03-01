const router = require('express').Router();

const { Comment } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const comment = await Comment.findAll({
      });
      if (comment.length > 0) return res.json({ message: 'sucsess', comment });
      return res.json({ message: 'noComments' });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const newOrder = await Comment.create({
        userId: Number(req.params.id),
        productId: req.body.currentProduct,
        sizeId: req.body.needSize,
        numberOfItems: req.body.count,
        status: 'activ',
      });
      console.log('Всё гуд, прикинь');
      return res.status(202).json({ message: 'sucsess', newOrder });
    } catch (error) {
      return res.json({ message: 'ЯРИК ТИКАЙ БОЧОК ПОТИК', error: error.message });
    }
  });

module.exports = router;