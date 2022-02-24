const express = require('express');
const dotenv = require('dotenv');
const config = require('./config/config');
const router = require('./routes/index');
const productsRouter = require('./routes/products.router');
const errorHandler = require('./middleware/errorHandler');

const app = express();

dotenv.config();
config(app);

const PORT = process.env.PORT ?? 5000;

// routing
app.use('/', router);
app.use(errorHandler);

app.use('/products', productsRouter);

app.listen(PORT, () => console.log(`*Server started at ${PORT} port ***`));
