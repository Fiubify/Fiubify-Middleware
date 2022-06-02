const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const servicesConfig = require("../config/servicesConfig");

const router = express.Router();

router.use(
  "/auth",
  createProxyMiddleware("/auth", {
    target: servicesConfig.auth,
    changeOrigin: true,
  })
);

module.exports = router;
