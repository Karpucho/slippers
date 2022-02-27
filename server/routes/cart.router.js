const router = require('express').Router();

const { Cart, SizesOfProduct, Product } = require('../db/models');

router.route('/:id')
  .get(async (req, res) => {
    try {
      const userOrders = await Cart.findAll({
        where: { userId: Number(req.params.id), status: 'active' },
        include: [Product, SizesOfProduct],
      });
      if (userOrders.length > 0) {
        return res.json({ message: 'sucsess', userOrders });
      } return res.json({ message: 'noOrders' });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  })

  .post(async (req, res) => {
    try {
      const newOrder = await Cart.create({
        userId: Number(req.params.id),
        productId: req.body.currentProduct,
        sizeId: req.body.needSize,
        numberOfItems: req.body.count,
        status: 'activ',
      });
      console.log('!!!fghjkl');
      return res.status(202).json({ message: 'sucsess', newOrder });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  });

module.exports = router;
