# Vídeo 05 - Ejemplo de rutas con express y parámetros

Hemos visto que trabajar con rutas en express con “use” es un poco confuso ya que su ejecución depende del orden en que las declares.

Para declarar rutas de una manera más cómoda, express utiliza “router”:

```jsx
const express = require("express");

const PORT = 3000;
const server = express();
const router = express.Router();

const pokemons = ["Picachu", "Raichu", "Charmander", "Charmeleon", "Bulbasaur"];

router.get("/", (req, res) => {
  res.send("Este es un ejemplo de router de Express");
});

router.get("/pokemons", (req, res) => {
  res.json(pokemons);
});

router.get("/pokemons/:position", (req, res) => {
  const position = req.params.position;

  if (typeof position !== "undefined" && pokemons[position]) {
    res.send(pokemons[position]);
  } else {
    res.status(404);
    res.send("Pokemon con encontrado.");
  }
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Servidor está levantado y escuchando en el puerto ${PORT}`);
});
```
