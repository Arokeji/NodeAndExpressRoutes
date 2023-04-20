# Vídeo 02 - Ejemplo servidor http con rutas

En este vídeo hemos creado nuestro primer servidor capaz de manejar rutas, para ello hemos mirado la propiedad URL de la request para saber qué URL ha pedido el usuario:

```jsx
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`El usuario ha solicitado ${req.url}`);

  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=UTF-8");
    res.end("Hola mundo! Esta es la home");
  } else if (req.url === "/users") {
    res.statusCode = 200;

    const users = [
      {
        name: "Fran",
        id: 1,
      },
      {
        name: "Edu",
        id: 1,
      },
    ];

    const usersString = JSON.stringify(users);

    res.setHeader("Content-Type", "application/json; charset=UTF-8");
    res.end(usersString);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    res.end(`
      <html>
        <head>
          <style>
            p {
              color: red;
            }
          </style>
        </head>
        <body>
          <p>Error 404. Lo sentimos, no se ha encontrado la página solicitada</p>
        </body>
      </html>
    `);
  }
});

server.listen(port, () => {
  console.log(`Servidor levantado y escuchando en puerto ${port}`);
});
```
