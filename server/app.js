const express = require("express");
const dotenv = require("dotenv");
const config = require("./config/config");
// const errorHandler = require("./middleware/errorHandler");

const app = express();

dotenv.config();
config(app);

const PORT = process.env.PORT ?? 5000;
const router = require("./routes/index");

// routing
app.use("/", router);

// app.use(errorHandler);

app.listen(PORT, () => console.log(`*Server started at ${PORT} port ***`));
