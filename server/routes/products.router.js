const router = require('express').Router();

const { Product } = require('../db/models/product');

router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({
        where: { productId: 1 },
      });
      console.log(1111);
      if (products.length > 0) return res.json({ message: 'sucsess', products });
      return res.json({ message: 'noproducts' });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  });

module.exports = router;
