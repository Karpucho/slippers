const express = require("express");
const dotenv = require("dotenv");
const config = require("./config/config");
const router = require("./routes/index");
// const productsRouter = require("./routes/products.router");

dotenv.config();

const { sequelize } = require("./db/models");

const errorMiddleware = require("./middlewares/errors.middleware");

const PORT = process.env.PORT ?? 5000;
const app = express();

config(app);

app.use("/api", router);
// обазательно должен идти послденим
app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log("Сервер запущен на порту", PORT);

  try {
    await sequelize.authenticate();
    console.log("Подключение к БД успешно");
  } catch {
    console.log("Не получилось подключиться к БД");
  }
});

//все работает!
