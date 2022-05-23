const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const servicesConfig = require("../config/servicesConfig");

const router = express.Router();

// GET /user ALL
// GET /user/:id ALL
// PATCH /block/:id ADMIN
// PATCH /unblock/:id ADMIN
// PATH user/:id/change-subscription OWN USER

router.use(
  "/user",
  createProxyMiddleware("/user", {
    target: servicesConfig.users,
    changeOrigin: true,
  })
);

module.exports = router;
