const router = require('express').Router();
const fileMiddleware = require('../middlewares/file.middleware');
const { Product } = require('../db/models');

let idProduct;

router
  .post('/', fileMiddleware.single('productPhoto'), async (req, res) => {
    try {
      console.log(req.file);
      const newProduct = await Product.create({
        photo: `http://localhost:5000/${req.file.path}`,
      });
      newProduct.id = idProduct;
      console.log('idProduct', idProduct);

      res.status(201).json(newProduct);
    } catch (e) {
      console.log(e);
    }
  })
  .put('/', async (req, res) => {
    console.log(req.body);
    try {
      const newProduct = await Product.findOne({
        where: { idProduct },
      });
      newProduct.set(req.body);
      await newProduct.save();
      res.json({
        message: 'vse norm',
        newProduct,
      });
    } catch (error) {
      res.json({ error: error.message });
      console.log(error);
    }
  });

module.exports = router;
