const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configurar body-parser para analizar los datos
app.use(bodyParser.json());

// Ruta para recibir las solicitudes del webhook
app.post("/", (req, res) => {
  // Aquí puedes realizar acciones con los datos recibidos en el webhook
  console.log(req.body);

  // Enviar una respuesta al servidor que envió el webhook
  // res.send("Webhook recibido correctamente");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});
