# Crud_mongoYnode
En este repositorio se dispondra de una base de datos en mongodb y ademas las operaciones basicas CRUD en el lenguaje JavaScript usando node

Este crud fue ehecho especificamente para el modulo de materiales del proyecto CONSTRU-TECH, en este se disponen de 3 colecciones, empleados, materiales y proveedores.

Antes de ejecutar el codigo es necesario realizar varias instalaciónes para que funcione correctamente el proyecto...

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSTALACIÓN #1:
Para poder acceder al npm que es sistema de gestión de paquetes necesitamos realizar 2 pasos.

--------
primer paso:
abrir la terminal del editor de codigo y digitar el siguiente comando: npm init y luego darle enter hasta que se termine de ejecutar este comando.

segundo paso: 
ejecutar el comando npm install, esto traerá consigo ciertas librerias de node que permitirá que el codigo se ejecute de manera correcta.
--------
INSTALACIÓN #2:
Para ejecutar los comandos de mongo desde el archivo .js es necesario precisamente descargar unas librerias que permitirán ejecutar este codigo correctamente y para esto es necesario:

--------
primer paso.
abrir la consola y ejecutar el comando npm install mongodb

segundo paso.
instalar directamente el faker que es la herramienta que nos ayuda a llenar los documentos con campos ficticios para realizar pruebas en la base de datos; para esto es necesario ejecutar el siguiente comando:

npm install @faker-js/faker --save-dev
-----------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Luego de realizar las instalaciones se puede pasar a ejecutar el codigo, pero para hacerlo es necesario ejecutar los archivos en cierto orden para que se tenga un sentido de los que se hizo y aparte de eso se pueda tener una mejor ejecución del codigo.

El primer archivo que se deberia de ejecutar es el que se encuentra en la carpeta de comandos mongo y se llama creación.mongodb, en este se encuentran la creación de tanto la base de datos como de las colecciones.

Luego se puede pasar a ejecutar el archivo de index.js, en este se encuentra la ejecución las funciones usando la herramienta faker para llenar los docuemntos requeridos para realizar las pruebas de la base de datos.

por ultimo se pueden ejecutar el resto de archivos que se encuentran en la carpeta de comandos mongo, ahí están los comandos basicos para realizar consultas en mongo y con esto mostrar la información ingresada por el faker en este caso.

