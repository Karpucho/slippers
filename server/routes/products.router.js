const router = require('express').Router();

const { Product } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({
        include: 'SizesOfProducts',
      });
      if (products.length > 0) return res.json({ message: 'sucsess', products });
      return res.json({ message: 'noproducts' });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  });

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const currentProduct = await Product.findOne({
        where: { id },
        include: 'SizesOfProducts',
      });
      console.log(currentProduct);
      return res.json({ message: 'sucsess', currentProduct });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  });
module.exports = router;
