const app = require("./app.js");
const { PORT } = require("./config.js");

// Inicializamos la API
app.listen( PORT, () => {
  console.log(`Iniciamos el servidor en el puerto ${ PORT }`);
} );

