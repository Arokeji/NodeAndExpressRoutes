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
