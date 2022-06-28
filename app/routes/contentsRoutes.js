const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const servicesConfig = require("../config/servicesConfig");

const router = express.Router();

router.use(
  "/contents",
  createProxyMiddleware("/contents", {
    target: servicesConfig.contents,
    changeOrigin: true,
    pathRewrite: { "^/contents": "" },
  })
);

module.exports = router;
