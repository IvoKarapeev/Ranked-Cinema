const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/db');
const cors = require('./middlewares/cors');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({extended : false}));
app.use(cors());
app.use(routes);

dbInit();
app.listen(PORT,() => console.log(`Server is listening on port ${PORT}...`));