const { Sequelize } = require("sequelize");
const mysql = require("mysql2");

const { DATABASE_USER, DATABASE_NAME, DATABASE_PASSWORD } = require("../config.js");

// Abre la conexión a MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
});

// Crea la base de datos
connection.query(
  `CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);

// Cerrar la conexión a MySQL
connection.end();

// Inicializamos la conexión con la base de datos
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

// Comprobamos que la conexión funciona
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
  } catch (error) {
    console.log('Unable to connect to the database: ' + error);
  };
  // Se procede a crear o, en su defecto, verificar las tablas
  await sequelize.sync({ force: true });
})();

module.exports = sequelize;