const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/db');
const cors = require('./middlewares/cors');

const routes = require('./routes');
const { auth } = require('./middlewares/userMiddlewares');

const app = express();

app.use(express.urlencoded({extended : false}));
app.use(cors());
app.use(auth)
app.use(routes);

dbInit();
app.listen(PORT,() => console.log(`Server is listening on port ${PORT}...`));