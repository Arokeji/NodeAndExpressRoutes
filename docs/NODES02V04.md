# Vídeo 04 - Instalación de express y primeras rutas con use

En este vídeo hemos hablado de la librería express, express nos permite hacer APIs con Node de una manera más rápida y organizada:

<https://expressjs.com/>

Para instalar la librería debemos ejecutar:

```jsx
npm install express
```

Posteriormente podemos usarla en nuestros archivos Node:

```jsx
const express = require("express");

const PORT = 3000;
const server = express();

server.use("/pokemons", (req, res) => {
  const pokemons = ["Picachu", "Raichu"];
  const pokemonsString = JSON.stringify(pokemons);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(pokemonsString);
});

server.use("/", (req, res) => {
  res.send("Hola mundo!! Esto es un proyecto con express!!");
});

server.listen(PORT, () => {
  console.log(`Servidor está levantado y escuchando en el puerto ${PORT}`);
});
```
