const express = require("express");
const dotenv = require("dotenv");
const config = require("./config/config");
const router = require("./routes/index");
const productsRouter = require("./routes/products.router");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const config = require('./config/config');
// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
const {
  sequelize,
} = require('./db/models');

const router = require('./routes/index');
const errorMiddleware = require('./middlewares/errors.middleware');

const PORT = process.env.PORT ?? 5000;
const app = express();

config(app);

// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:5000'],
//   optionsSuccessStatus: 200,
//   credentials: true,
// };
// app.use(cors(corsOptions));

app.use('/api', router);
// обазательно должен идти послденим
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
