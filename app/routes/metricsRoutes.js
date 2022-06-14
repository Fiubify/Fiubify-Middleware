const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const servicesConfig = require("../config/servicesConfig");

const router = express.Router();

router.use(
  "/metrics",
  createProxyMiddleware("/metrics", {
    target: servicesConfig.metrics,
    changeOrigin: true,
  })
);

module.exports = router;
