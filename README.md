# Practica7

# Enunciado

La presente práctica tiene como objetivo resolver los sigiuentes puntos de la práctica:

### Preparación del entorno de producción:

Configuración del servidor web: 10 puntos
Instalación de dependencias necesarias: 10 puntos
Configuración correcta del servidor web: 10 puntos
Configuración del sistema:

Establecimiento de variables de entorno: 10 puntos
Configuración correcta del archivo de configuración del servidor web: 10 puntos


### Gestión de dependencias:

Utilización correcta del gestor de paquetes (por ejemplo, pip): 10 puntos
Configuración adecuada del archivo de manifiesto de dependencias (por ejemplo, requirements.txt): 10 puntos

### Automatización de tareas:

Implementación del script de construcción (build) para compilar el código fuente: 15 puntos
Desarrollo de pruebas automatizadas: 15 puntos
Utilización de herramientas de automatización (por ejemplo, setuptools, pytest): 10 puntos

### Entrega continua:

Configuración del sistema de integración continua: 10 puntos
Definición del flujo de trabajo automatizado: 15 puntos
Implementación incremental y sin interrupciones: 10 puntos

### Desafío adicional (opcional):

Configuración de la infraestructura escalable utilizando contenedores o plataformas de orquestación: 20 puntos

# Intalación de Dependencias

Primero, es necesario activar el entorno de deesarrollo para poder instalar las dependencias y asegurarse de uqe se está ejecutando el proyecto en un entorno controlado. Ello se hará mediante el comando:

```bash
 source env/bin/activate
```

Una vez se tiene el entorno activo, se puede pasar a isntalar las dependencias necesarias para la puesta en marcha del proyecto. Si bien es cierto que este proyecto se ha desarrollado en un entorno macOS (mediante el gestionador de paquetes Brew) se deben seguir pasos similares para otros sistemas operativos.

Para la instalación, ejecutar el siguiente comando en la terminal:
```bash
pip install -r brew_dependencies.txt
```

Además, asegurarse de que se tiene Node.js instalado en el entorno, mediante el comando:
```bash
node -v
```

Ahora se tiene el entorno preparado para seguir con la ejecución del proyecto.

# Despliegue del proyecto

Seguir los siguientes pasos para el despliegue de la aplicación e iniciar el servidor:

```bash
chmod +x start_server.sh
```

```bash
./start_server.sh
```

y visitar la página: ``http://localhost:8090``
# Estructura del código

El código útil del proyecto, se encuentra dentro de la carpeta ```\src``` del directorio.

### .env
El archivo .env situado al principio de la carpeta, es el encargado de almacenar las variables de entorno del proyecto. En el presente caso son las siguientes:

````
SERVER_PORT=8090
DATABASE_URL="mongodb://meriiperez05:RNRXqXOJ5OkogoYC@localhost:27017/mi_base_de_datos"
````

Por un lado se tiene un puerto en el que se desarrolla el projecto en el localhost y por otro, una conexión a los datos (una base de datos de MongoDB).

### main.yml
Este archivo llama a un flujo de Github Actions como CI que se activará cuando se realice un push dentro de la rama de trabajo (en caso de que no se haya creado una rama, se emplea la rama master). En este archivo se definen trabajos que se ejecutarán en paralelos o secuencialmente.

### build.js
Archivo creado al inicio del desarrollo del proyecto, cuyo contenido depende de la naturaleza del mismo. El objetivo principal de este archivo es construir automatizaciones para tareas repetitivas.

En el caso del archivo para este proyecto, se indica que se tome el código fuente de ``\src\index.js``  y que almacene la salida en un archivo ``\src\boundle.js``.

### index.js
Este será el archivo principal de JavaScript de la aplicación que se está desplegando. Este archivo crea un servisor web empleando un framework express y contecándose a la base de datos de MongoDB previamente creada.

Se llama al puesto usando para el despliegue de la aplicación, se especifica una futa y se inicia el servidor.

### mongo.py
Establece una contexión de forma sencilla con la base de datos de mongoDB donde se deben almacenar los datos necesarios para el despliegue de la aplicación.

### package.json

Contiene información sobre el proyecto como las dependencias, configuraciones, scripts o mantenimiento.

### package-lock.json
Se emplea este archivo para la gestión del control de versiones, garantizar la reproductibilidad de las contrucciones y la optimización de la instalació de dependencias.

### server_config.json
Especificción del puerto en el que se está desplegando la aplicación (8090)

### Archivos de Despliegue

Para poder realizar una ejecución en Node.js, se cuentan con los siguientes ficheros:
- start_app.sh
- start_server.sh
- start_server.js