# Vídeo 07 - Ejercicio: API de F1 con GET/POST y lectura de ficheros

Debes realizar una API parecida a la que hemos visto en el último vídeo, pero esta vez en vez de con pokemon, haremos uso de pilotos de Formula 1.

Los endpoints que debes generar son:

**GET / (home)**

devolverá un HTML con información acerca de la propia API. Ese HTML debes crearlo como un fichero .html, leerlo con fs.readFile y devolver su contenido

TIPS:

Para leerlo recuerda poner “utf-8”:

```jsx
fs.readFile("./templates/fichero.html", "utf-8", (readError, data) => {
```

Para devolverlo debes indicar que es un HTML:

```jsx
res.set("Content-Type", "text/html");
```

Cuando accedas a: <http://localhost:3000>

Verás algo así:

![Untitled](/docs/assets/Untitled.png)

**GET /f1-driver**

Debes devolver el JSON completo de pilotos, te lo adjuntamos al final de este documento.

![Untitled](/docs/assets/Untitled%201.png)

**GET /f1-driver/{id_piloto}**

Debes devolver la información del piloto que nos han indicado en los parámetros, por ejemplo:

![Untitled](/docs/assets/Untitled%202.png)

**POST /f1-driver**

Este endpoint permitirá crear un nuevo piloto y añadirlo al JSON.

Para probarlo puedes usar la consola de Chrome:

```jsx
const newDriver = {
  name: "Fran",
  nationality: "Spain",
  surname: "Linde",
  team: "LEXUS",
};

fetch("http://localhost:3000/f1-driver", {
  body: JSON.stringify(newDriver),
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
}).then((data) => console.log(data));
```

Para evitar errores, cuando lo pruebes hazlo con la ruta [http://localhost:3000](http://localhost:3000) abierta en el navegador

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/node-s2-servers-http-express>

**JSON de pilotos:**

```jsx
[
  {
    name: "Verstappen",
    surname: "Max",
    nationality: "Netherlands",
    team: "Red Bull",
    id: 1,
  },
  {
    name: "Hamilton",
    surname: "Lewis",
    nationality: "United Kingdom",
    team: "Mercedes",
    id: 2,
  },
  {
    name: "Bottas",
    surname: "Valtteri",
    nationality: "Finland",
    team: "Mercedes",
    id: 3,
  },
  {
    name: "Perez",
    surname: "Sergio",
    nationality: "Mexico",
    team: "Red Bull",
    id: 4,
  },
  {
    name: "Norris",
    surname: "Lando",
    nationality: "United Kingdom",
    team: "McLaren",
    id: 5,
  },
  {
    name: "Leclerc",
    surname: "Charles",
    nationality: "Monaco",
    team: "Ferrari",
    id: 6,
  },
  {
    name: "Sainz",
    surname: "Carlos",
    nationality: "Spain",
    team: "Ferrari",
    id: 7,
  },
  {
    name: "Ricciardo",
    surname: "Daniel",
    nationality: "Australia",
    team: "McLaren",
    id: 8,
  },
  {
    name: "Alonso",
    surname: "Fernando",
    nationality: "Spain",
    team: "Alpine",
    id: 9,
  },
  {
    name: "Ocon",
    surname: "Esteban",
    nationality: "France",
    team: "Alpine",
    id: 10,
  },
  {
    name: "Vettel",
    surname: "Sebastian",
    nationality: "Germany",
    team: "Aston Martin",
    id: 11,
  },
  {
    name: "Stroll",
    surname: "Lance",
    nationality: "Canada",
    team: "Aston Martin",
    id: 12,
  },
  {
    name: "Gasly",
    surname: "Pierre",
    nationality: "France",
    team: "AlphaTauri",
    id: 13,
  },
  {
    name: "Tsunoda",
    surname: "Yuki",
    nationality: "Japan",
    team: "AlphaTauri",
    id: 14,
  },
  {
    name: "Raikkonen",
    surname: "Kimi",
    nationality: "Finland",
    team: "Alfa Romeo",
    id: 15,
  },
  {
    name: "Giovinazzi",
    surname: "Antonio",
    nationality: "Italy",
    team: "Alfa Romeo",
    id: 16,
  },
  {
    name: "Latifi",
    surname: "Nicholas",
    nationality: "Canada",
    team: "Williams",
    id: 17,
  },
  {
    name: "Russell",
    surname: "George",
    nationality: "United Kingdom",
    team: "Williams",
    id: 18,
  },
  {
    name: "Schumacher",
    surname: "Mick",
    nationality: "Germany",
    team: "Haas",
    id: 19,
  },
  {
    name: "Mazepin",
    surname: "Nikita",
    nationality: "Russia",
    team: "Haas",
    id: 20,
  },
  {
    name: "Fernandez",
    surname: "Jake",
    nationality: "Spain",
    team: "Alfa Romeo",
    id: 21,
  },
  {
    name: "Ilott",
    surname: "Callum",
    nationality: "United Kingdom",
    team: "Alfa Romeo",
    id: 22,
  },
  {
    name: "De Vries",
    surname: "Nyck",
    nationality: "Netherlands",
    team: "Mercedes",
    id: 23,
  },
  {
    name: "Vandoorne",
    surname: "Stoffel",
    nationality: "Belgium",
    team: "Mercedes",
    id: 24,
  },
  {
    name: "Kubica",
    surname: "Robert",
    nationality: "Poland",
    team: "Alfa Romeo",
    id: 25,
  },
  {
    name: "Aitken",
    surname: "Jack",
    nationality: "United Kingdom",
    team: "Williams",
    id: 26,
  },
  {
    name: "Nissany",
    surname: "Roy",
    nationality: "Israel",
    team: "Williams",
    id: 27,
  },
];
```
