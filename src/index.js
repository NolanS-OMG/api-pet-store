const app = require("./app.js");
const { PORT } = require("./envConfig.js");

// Inicializamos la API
app.listen( PORT, () => {
  console.log(`Iniciamos el servidor en el puerto ${ PORT }`);
} );

