
## Autores

- [@eyleenpolo](https://www.github.com/eyleenpolo) Eyleen Paola Polo Carranza
- [@keymeha](https://www.github.com/keymeha) Kevin Antonio Bolaño Ariza


## Proyecto GetTask

Este proyecto se realizó para resolver el parcial final de Herramientas de Software, donde se trabaja las siguientes Herramientas:

- Firebase.
- Express.
- Swagger.

Se implemento una app para gestión de Tareas, el almacenamiento de los datos se realizó en Firebase.
## Instalación

#### Localmente

- Para ejecutar la app se debe tener instalado node, (Esta app fue realizada con la versión 20.16.0).
- Una vez posicionado desde la consola o terminal en la carpeta raiz del proyecto debe ejecutar el comando:

```bash
  npm run dev
```
> [!NOTA]
> Para ambos casos debe dirigirse a cualquiera de las siguientes direcciones:


[http://localhost:3000/](http://localhost:3000/)

[http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)

#### Desde Docker

- Se requiere tener previamente instalado Docker Engine o Docker Desktop.
- Estar posicionado dentro de la carpeta de la aplicación y ejecutar el DockerFile con el siguiente comando.

```bash
  docker build -t gettask
```

- Y ejecutar el comando:

```bash
  docker run hello-world gettask
```
> [!NOTA]
> Se debe tener el puerto 3000 disponible para que pueda ejecutarse la aplicación, en caso de estar ocupado es necesario cambiar el puerto en el archivo Dockerfile.


## Conexión a la DB

El archivo json con la llave para firebase debe llamarse así:

`firebase.json`

Este debe estar en la ruta presentada a continuación y de la siguiente manera:

`src/config/firebase.json`

## Interfaz datos en DB


```
Task 
  id: string;
  title: string;
  description: string;
  completed: boolean;

```
## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)