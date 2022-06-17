const express = require("express");
const morgan = require("morgan");
const path = require("path");

const pet = require("./routes/pet.routes.js");

const app = express();

// Settings
const { PORT } = require(path.join(__dirname, "envConfig.js"));
app.set("port", PORT);

// MiddleWare
app.use(express.json());
app.use(morgan("dev"));

// RUTAS
app.use("/pets",pet);

module.exports = app;