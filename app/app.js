const express = require("express");
const cors = require("cors");

const authProxyRouter = require("./routes/authRoutes");
const userProxyRouter = require("./routes/userRoutes");
const contentProxyRouter = require("./routes/contentsRoutes");
const metricsProxyRouter = require("./routes/metricsRoutes");

const app = express();

app.use(cors());

app.use(authProxyRouter);
app.use(userProxyRouter);
app.use(contentProxyRouter);
app.use(metricsProxyRouter);
app.use(paymentsProxyRouter);

app.get("/", (req, res) => {
  res.send("Initial Setup");
});

module.exports = app;
