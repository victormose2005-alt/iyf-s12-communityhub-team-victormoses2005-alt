const express = require("express");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "CommunityHub API is running" });
});

app.use("/api/posts", postRoutes);

module.exports = app;
