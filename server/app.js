const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {
  sequelize,
} = require('./db/models');

const router = require('./routes/index.js');
const errorMiddleware = require('./middlewares/errors.middleware.js');

const PORT = process.env.PORT ?? 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(cors());

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5000'],
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

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
