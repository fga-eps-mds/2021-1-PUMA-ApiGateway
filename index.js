const express = require('express');
const cors = require('cors');
const environment = require('./src/config/environment');

const app = express();
app.use(cors());

app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

environment.configUser();
environment.configProject();
environment.configEnv();

require('./src/routes/router')(app);

app.listen(3004);

module.exports = app;
