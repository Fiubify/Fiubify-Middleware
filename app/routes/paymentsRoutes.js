const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const servicesConfig = require("../config/servicesConfig");

const router = express.Router();

router.use(
  "/payments",
  createProxyMiddleware("/payments", {
    target: servicesConfig.payments,
    changeOrigin: true,
    pathRewrite: { "^/payments": "" }
  })
);

module.exports = router;
