
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { redirectURL } = require("./controllers/url.controller");
const urlRoutes = require("./routes/url.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", urlRoutes);

app.get("/:shortCode", redirectURL);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 URL Shortener Backend is Running!");
});

module.exports = app;