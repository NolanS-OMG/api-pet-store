const express = require("express");
const morgan = require("morgan");
const path = require("path");

const pet = require("./routes/pet.routes.js");

const app = express();

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Settings
const { PORT, SWAGGER_SPEC } = require(path.join(__dirname, "config.js"));
app.set("port", PORT);

// MiddleWare
app.use(express.json());
app.use(morgan("dev"));
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(SWAGGER_SPEC)));

// RUTAS
app.use("/pets",pet);

module.exports = app;