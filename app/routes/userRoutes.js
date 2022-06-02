const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const servicesConfig = require("../config/servicesConfig");

const router = express.Router();

router.use(
  "/user",
  createProxyMiddleware("/user", {
    target: servicesConfig.users,
    changeOrigin: true,
  })
);

module.exports = router;
