const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../.env")
});

const PORT = process.env.PORT || 9000;

const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

module.exports = {PORT, DATABASE_USER, DATABASE_NAME, DATABASE_PASSWORD};