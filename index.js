const express = require('express');
const cors = require('cors');
const environment = require('./src/config/environment');

const app = express();
app.use(cors());

app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));
app.use(express.urlencoded({ extended: true }));

environment.configUser();
environment.configProject();

require('./src/routes/router')(app);

app.listen(3004);

module.exports = app;
