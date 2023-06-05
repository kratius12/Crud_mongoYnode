//se importan las funciones que estan la clase "operacioneCRUD"
const operacionesCRUD = require('./operacionesCRUD');
//se importa la libreria faker para crear los documentos de prueba
const {faker} = require("@faker-js/faker");

//se crea un array para almacenar los datos de los materiales
const array_materiales = [];
//se crea un array para almacenar los datos de los empleados
const array_empleados = [];
//se crea un array para almacenar los datos de los proveedores
const array_proveedores = []

//se hace un ciclo para que se almanecen 2000 datos en cada una de las colecciones usando la libreria de faker y el ciclo for
for (let i= 0;i<2000; i++){
    //Se usa la libreria de faker para crear los registros de materiales
    material ={
        nombre: faker.helpers.arrayElement(["cemento", "arena", "grava", "pintura blanca", "pintura azul", "pintura Gris", "lechada plastica", "tubo pvc", "placa de drywall"]),
        estado:faker.helpers.arrayElement(['activo','inactivo']),
        precio:faker.number.float(),
        cantidad:faker.number.float()
    }
    // se hace un push para que se almacenen los datos en la array
    array_materiales.push(material)

    empleado={
        //Se usa la libreria de faker para crear los registros de empleados
        nombres: faker.person.firstName()+' '+faker.person.lastName(),
        direccion: faker.location.streetAddress({useFullAddress: true}),
        estado:faker.helpers.arrayElement(['activo','inactivo']),
        email: faker.internet.email(),
        telefono: faker.phone.number('3##-###-##-##')
    }
    // se hace un push para que se almacenen los datos en la array
    array_empleados.push(empleado)

    //Se usa la libreria de faker para crear los registros de proveedores
    proveedor={
        nombre: faker.company.name(),
        nit:faker.number.bigInt(),
       direccion: faker.location.streetAddress({useFullAddress: true}),
       estado:faker.helpers.arrayElement(['activo','inactivo']),
       tipo:faker.helpers.arrayElement(["persona juridica","persona natural"]),
       email: faker.internet.email(),
       telefono: faker.phone.number('3##-###-##-##')
    }
    // se hace un push para que se almacenen los datos en la array
    array_proveedores.push(proveedor)
}

//se llama la función para ingresar los registros de los materiales y se le pasa como argumento el array en el cual se almacenan los datos de los materiales
operacionesCRUD.crearMaterial(array_materiales)
//se llama la función para ingresar los registros de los empleados y se le pasa como argumento el array en el cual se almacenan los datos de los empleados
operacionesCRUD.crearEmpleado(array_empleados)
//se llama la función para ingresar los registros de los proveedores y se le pasa como argumento el array en el cual se almacenan los datos de los proveedores
operacionesCRUD.crearProveedor(array_proveedores)
