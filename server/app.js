const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const config = require('./config/config');

const app = express();
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/errors.middleware');
const productsRouter = require('./routes/products.router');
const commentsRouter = require('./routes/reviews.router');
const cartRouter = require('./routes/cart.router');

const { sequelize } = require('./db/models');

const PORT = process.env.PORT ?? 5000;

config(app);

app.use('/', router);
app.use('/products', productsRouter);
app.use('/reviews', commentsRouter);

app.use('/cart', cartRouter);


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
