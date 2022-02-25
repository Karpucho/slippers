const router = require('express').Router();

const { Product, SizesOfProducts } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({
        row: true,
        include: 'SizesOfProducts',
      });
      console.log(products[0]);
      if (products.length > 0) return res.json({ message: 'sucsess', products });
      return res.json({ message: 'noproducts' });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  });

module.exports = router;
