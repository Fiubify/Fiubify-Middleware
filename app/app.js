const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const servicesConfig = require('./config/servicesConfig');

const app = express();

app.use(
  '/auth',
  createProxyMiddleware('/auth', {
    target: servicesConfig.auth,
    changeOrigin: true,
  })
);
app.use(
  '/user',
  createProxyMiddleware('/user', {
    target: servicesConfig.users,
    changeOrigin: true,
  })
);

app.get('/', (req, res) => {
  res.send('Initial Setup');
});

module.exports = app;
