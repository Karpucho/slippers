const path = require('path');
const multer = require('multer');
const { Product, Category } = require('../db/models');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extreme(file.originalname));
  },
});

const editProduct = async (req, res) => {
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
};

const upload = multer({
  storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb('Загрузите фото другого формата');
  },
}).single('photo'); // Здесь у меня несовпадения - у него image (так навзвана еще и колонка в бд)

module.exports = {
  upload,
  editProduct,
};
