# Vídeo 06 - Ejemplo API express con lectura de ficheros

En este vídeo vamos a aplicar todo lo que hemos visto, y crearemos una API pequeña de pokemons, que tenga los siguientes métodos:

- GET /pokemon
- GET /pokemon/{id_pokemon}
- POST /pokemon

Todo eso, apoyándonos en un fichero JSON que leeremos para los GET y escribiremos cuando hagamos POST. El fichero json tiene esta estructura:

```jsx
[
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 60
    }
  },
...
...
...
]
```

Nuestro fichero index.js ha quedado de la siguiente manera:

```jsx
const express = require("express");
const fs = require("fs");

const PORT = 3000;
const server = express();
const router = express.Router();
const pokemonFilePath = "./pokemon-data.json";

// Configuración del server
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.send("Este es un ejemplo de router de Express");
});

router.get("/pokemon", (req, res) => {
  fs.readFile(pokemonFilePath, (error, data) => {
    if (error) {
      res.status(500).send("Error inesperado");
    } else {
      const pokemons = JSON.parse(data);
      res.json(pokemons);
    }
  });
});

router.post("/pokemon", (req, res) => {
  // Leemos el fichero pokemons
  fs.readFile(pokemonFilePath, (error, data) => {
    if (error) {
      res.status(500).send("Error inesperado");
    } else {
      const pokemons = JSON.parse(data);
      const newPokemon = req.body;
      const lastId = pokemons[pokemons.length - 1].id;
      newPokemon.id = lastId + 1;
      pokemons.push(newPokemon);

      // Guardamos fichero
      fs.writeFile(pokemonFilePath, JSON.stringify(pokemons), (error) => {
        if (error) {
          res.status(500).send("Error inesperado");
        } else {
          res.json(newPokemon);
        }
      });
    }
  });
});

router.get("/pokemon/:id", (req, res) => {
  fs.readFile(pokemonFilePath, (error, data) => {
    if (error) {
      res.status(500).send("Error inesperado");
    } else {
      const id = parseInt(req.params.id);
      const pokemons = JSON.parse(data);
      const pokemon = pokemons.find((pokemon) => pokemon.id === id);

      if (pokemon) {
        res.json(pokemon);
      } else {
        res.status(404).send("Pokemon con encontrado.");
      }
    }
  });
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Servidor está levantado y escuchando en el puerto ${PORT}`);
});
```

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/node-s2-servers-http-express>
