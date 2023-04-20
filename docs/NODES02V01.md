# Vídeo 01 - Primer server http con node

Un servidor con Node.js es un programa que se ejecuta en un sistema operativo (como Windows, Linux, o macOS) y escucha las solicitudes de red enviadas a un puerto específico. Utiliza el entorno de ejecución Node.js para procesar estas solicitudes y enviar respuestas. Puede ser utilizado para crear aplicaciones web, servicios web, aplicaciones de red, y más.

Por ejemplo, un servidor de Node.js puede recibir una solicitud HTTP de un navegador web, procesar la solicitud utilizando el código JavaScript en el servidor, y devolver una respuesta HTTP con el contenido solicitado. También puede interactuar con bases de datos, realizar operaciones de red, y acceder a otras funcionalidades del sistema operativo.

En este vídeo hemos realizado un pequeño servidor con Node haciendo uso del módulo nativo http:

```jsx
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola mundo!");
});

server.listen("3000", () => {
  console.log("Servidor levantado y escuchando en puerto 3000");
});
```

Para levantar nuestro servidor ejecutaremos:

```jsx
npm run ./src/http-sample.js
```

Ya que nuestro código se encuentra en la carpeta src y en un fichero llamado http-sample.js
