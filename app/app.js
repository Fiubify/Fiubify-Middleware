const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {servicesConfig, servicesProtectedEndpoints} = require('./config/servicesConfig');
const ProtectedUrl = require('./config/protectedUrl');

const app = express();

app.use(cors());

app.use(
  '/auth',
  createProxyMiddleware('/auth', {
    target: servicesConfig.auth,
    changeOrigin: true,
  })
);

// POST /auth/register-email
// POST /auth/register-provider
// POST /validate
// POST /validate/admin

app.use(
  '/user',
  createProxyMiddleware('/user', {
    target: servicesConfig.users,
    changeOrigin: true,
    onProxyReq: ProtectedUrl.protectedEndpointByMethod(servicesProtectedEndpoints.users, '')
  })
);

// GET /user ADMIN
// GET /user/:id ADMIN
// PATCH /block/:id ADMIN
// PATCH /unblock/:id ADMIN

app.use(
    '/contents/',
    createProxyMiddleware('/contents', {
        target: servicesConfig.contents,
        changeOrigin: true,
        pathRewrite: {'^/contents': ''},
        onProxyReq: ProtectedUrl.protectedEndpointByMethod(servicesProtectedEndpoints.contents, '')
    })
)

// GET /albums ALL
// GET albums/:id ALL
// POST albums Artist
// POST albums/:id/add-song Artist

// GET /songs ALL
// GET /songs/:id ALL
// POST /songs Artist

app.get('/', (req, res) => {
  res.send('Initial Setup');
});

module.exports = app;
