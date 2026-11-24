const express = require("express");
const postRoutes = require("./routes/posts");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "CommunityHub API" });
});

app.use("/api/posts", postRoutes);

app.use(errorHandler);

module.exports = app;
