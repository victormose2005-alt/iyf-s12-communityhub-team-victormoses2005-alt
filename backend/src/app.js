const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "CommunityHub API is running" });
});

app.use("/api", routes);

module.exports = app;