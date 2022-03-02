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
      return res.json({ message: 'sucsess', currentProduct });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  });

router.route('/edit/:id')
  .get()
  .put(async (req, res) => {
    console.log(req.body);
    try {
      const { id } = req.params;
      const changeProduct = await Product.findOne({
        where: { id },
      });
      changeProduct.set(req.body);
      await changeProduct.save();
      res.json({
        message: 'vse norm',
        changeProduct,
      });
    } catch (error) {
      res.json({ error: error.message });
      console.log(error);
    }
  });

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const currentProduct = await Product.findOne({
        where: { id },
        include: ['SizesOfProducts', Category],
      });
      return res.json({ message: 'sucsess', currentProduct });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  });
module.exports = router;
