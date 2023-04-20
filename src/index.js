const express = require("express");
const fs = require("fs");

// Parametros del servidor, router y ruta de los datos
const PORT = 3000;
const server = express();
const router = express.Router();
const driversFilePath = "f1-drivers-data.json";

// Configuracion del servidor
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Home
router.get("/", (req, res) => {
  fs.readFile("./src/index.html", (err, content) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain; charset=UTF-8");
      res.end("Error interno del servidor");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.end(content);
    }
  });
});

// f1-driver GET
router.get("/f1-driver", (req, res) => {
  fs.readFile(driversFilePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error interno del servidor");
    } else {
      const drivers = JSON.parse(data);
      res.json(drivers);
    }
  });
});

// f1-driver POST
router.post("/f1-driver", (req, res) => {
  fs.readFile(driversFilePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error interno del servidor");
    } else {
      const drivers = JSON.parse(data);
      const newDriver = req.body;
      const lastId = drivers[drivers.length - 1].id;
      newDriver.id = lastId + 1;
      drivers.push(newDriver);
      // Guardar el piloto
      fs.writeFile(driversFilePath, JSON.stringify(drivers), (err) => {
        if (err) {
          res.status(500).send("Error inesperado");
        } else {
          res.json(newDriver);
        }
      });
    }
  });
});

// f1-driver/id GET
router.get("/f1-driver/:id", (req, res) => {
  fs.readFile(driversFilePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error interno del servidor");
    } else {
      const id = parseInt(req.params.id);
      const drivers = JSON.parse(data);
      const driver = drivers.find((driver) => (driver.id === id));
      if (driver) {
        res.json(driver);
      } else {
        res.status(404).send("Piloto no encontrado");
      }
    }
  });
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Servidor levantado y escuchando en puerto ${PORT}`);
});
