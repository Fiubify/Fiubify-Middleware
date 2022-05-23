const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const servicesConfig = require("../config/servicesConfig");

const router = express.Router();

// GET /albums ALL
// GET albums/:id ALL
// POST albums Artist - OWN USER
// POST albums/:id/add-song Artist - OWN USER

// GET /songs ALL
// GET /songs/:id ALL
// POST /songs Artist - OWN USER

router.use(
  "/contents",
  createProxyMiddleware("/contents", {
    target: servicesConfig.contents,
    changeOrigin: true,
    pathRewrite: { "^/contents": "" },
  })
);

module.exports = router;
