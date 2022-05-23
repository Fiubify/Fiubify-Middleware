const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const servicesConfig = require("../config/servicesConfig");

const router = express.Router();

// POST /auth/register-email INTERN
// POST /auth/register-provider INTERN
// POST /validate INTERN
// POST /validate/admin INTERN

router.use(
  "/auth",
  createProxyMiddleware("/auth", {
    target: servicesConfig.auth,
    changeOrigin: true,
  })
);

module.exports = router;
