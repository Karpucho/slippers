
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');

const config = require('./config/config');
const router = require('./routes/index');
const productsRouter = require('./routes/products.router');


const express = require('express');
const config = require('./config/config');
const router = require('./routes/index');
// const productsRouter = require("./routes/products.router");

const { sequelize } = require('./db/models');

const errorMiddleware = require('./middlewares/errors.middleware');

const PORT = process.env.PORT ?? 5000;
const app = express();

config(app);

app.use('/api', router);


// можно блядь не трогать мои роуты до сдачи проекта????!!!!!!!! и остальные файлы
app.use('/products', productsRouter);


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