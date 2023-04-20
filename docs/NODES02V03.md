# Vídeo 03 - Nodemon y node --watch

En este vídeo hemos visto cómo Node por defecto no se actualiza cuando cambiamos el código de nuestros ficheros javascript

Para aplicar los cambios debemos para el proceso de node con ctrl+C y volver a levantarlo.

Para evitar este tedioso proceso apareció la librería nodemon:

<https://nodemon.io/>

Nodemon te permite ejecutar un fichero Javascript “escuchando” sus cambios, para ello debes instalar la librería con:

```jsx
npm install nodemon --save-dev
```

Y posteriormente crear un script en el package.json que lo ejecute sobre un fichero:

```jsx
"routes-sample": "nodemon ./src/routes-sample.js",
```

Hemos visto también que desde la salida de Node 18.11, existe una opción watch nativa que hace lo mismo, aunque está aún en modo experimental parece que funciona bien:

<https://nodejs.org/en/blog/release/v18.11.0>

Para usarla hemos creado otro script en el package.json:

```jsx
"http-sample": "node --watch ./src/http-sample.js",
```

Si tienes instalado Node 18.11 o superior, te aconsejamos que hagas uso del watch nativo
