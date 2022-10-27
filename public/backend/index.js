const helmet = require("helmet");
const express = require('express')
const app = express();
const router = require('../backend/routes/client')
const morgan = require('morgan')

require('./database/db')();


app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next()
  });
app.use(router);
app.use(helmet());
app.use(morgan('tiny'));

app.listen(3001, () => console.log('connected !'))