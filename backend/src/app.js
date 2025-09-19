const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const postRoutes = require("./routes/post.routes");
const errorHandler = require("./middlewares/error.middleware");
const logger = require("./utils/logger");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//  Routes for managing POSTS
app.use("/api/posts", postRoutes);

// Health check api
app.get("/ping", (req, res) => {
  logger.info(`Pong ${Date.now()}`);
  return res.json({ status: "ok" });
});

// Error handler
app.use(errorHandler);

module.exports = app;
