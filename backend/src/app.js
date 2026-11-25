const express = require("express");


const app = express();
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "CommunityHub API" });
});

app.use("/api", routes);

