const express = require('express');
const proxy = require('express-http-proxy');
const servicesConfig = require('./config/servicesConfig');

const app = express();

app.use('/auth', proxy(servicesConfig.auth));
app.use('/user', proxy(servicesConfig.users));

app.get('/', (req, res) => {
  res.send('Initial Setup');
});

module.exports = app;
