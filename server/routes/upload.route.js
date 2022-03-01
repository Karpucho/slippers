const router = require('express').Router();
const fileMiddleware = require('../middlewares/file.middleware');
const { Product } = require('../db/models');

router
  .post('/photo', fileMiddleware.single('productPhoto'), async (req, res) => {
    try {
      if (req.file) {
        res.json(req.file);
      }
    } catch (e) {
      console.log(e);
    }
  })
  .post('/', async (req, res) => {
    console.log(req.body);

    const {
      name, price, photo, gender, description,
    } = req.body;

    try {
      const newProduct = await Product.create({
        name,
        price,
        photo: `http://localhost:5000/images/${photo.slice(12)}`,
        gender,
        description,
        status: 'active',
      });
      res.status(201).json(newProduct);
    } catch (error) {
      res.json({ error: error.message });
      console.log(error);
    }
  });

module.exports = router;
