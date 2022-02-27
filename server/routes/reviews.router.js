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
  });

module.exports = router;
