const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const config = require('./config/config');
<<<<<<< HEAD
const router = require('./routes/index');
// const productsRouter = require("./routes/products.router");

const productsRouter = require('./routes/products.router');

// const productsRouter = require("./routes/products.router");
=======

const app = express();
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/errors.middleware');
const productsRouter = require('./routes/products.router');
const commentsRouter = require('./routes/reviews.router');
const cartRouter = require('./routes/cart.router');
>>>>>>> 3ba0b2c02141ae59e20b3505cf00ee20d5075492

const { sequelize } = require('./db/models');

const PORT = process.env.PORT ?? 5000;

config(app);

<<<<<<< HEAD
app.use('/api', router);

// можно блядь не трогать мои роуты до сдачи проекта????!!!!!!!! и остальные файлы
=======
app.use('/', router);
>>>>>>> 3ba0b2c02141ae59e20b3505cf00ee20d5075492
app.use('/products', productsRouter);
app.use('/reviews', commentsRouter);

<<<<<<< HEAD
=======
app.use('/cart', cartRouter);

>>>>>>> 3ba0b2c02141ae59e20b3505cf00ee20d5075492
app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log('Сервер запущен на порту', PORT);

  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно');
  } catch {
    console.log('Не получилось подключиться к БД');
  }
});
