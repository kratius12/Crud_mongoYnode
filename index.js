 const operacionesCRUD = require('./operacionesCRUD');
const {faker} = require("@faker-js/faker");

const array_materiales = [];

const array_empleados = [];

const array_proveedores = []

for (let i= 0;i<2000; i++){
    material ={
        nombre: faker.helpers.arrayElement(["cemento", "arena", "grava", "pintura blanca", "pintura azul", "pintura Gris", "lechada plastica", "tubo pvc", "placa de drywall"]),
        estado:faker.helpers.arrayElement(['activo','inactivo']),
        precio:faker.number.bigInt(),
        cantidad:faker.number.bigInt()
    }
    array_materiales.push(material)

    empleado={
        nombres: faker.person.firstName()+' '+faker.person.lastName(),
        direccion: faker.location.streetAddress({useFullAddress: true}),
        estado:faker.helpers.arrayElement(['activo','inactivo']),
        email: faker.internet.email(),
        telefono: faker.phone.number('3##-###-##-##')
    }
    array_empleados.push(empleado)

    proveedor={
        nombre: faker.company.name(),
        direccion: faker.location.streetAddress({useFullAddress: true}),
        estado:faker.helpers.arrayElement(['activo','inactivo']),
        nit:faker.number.bigInt(),
        email: faker.internet.email(),
        telefono:faker.phone.number('3##-###-##-##')
    }
    array_proveedores.push(proveedor)
}

operacionesCRUD.crearMaterial(array_materiales)
operacionesCRUD.crearEmpleado(array_empleados)
operacionesCRUD.crearProveedor(array_proveedores)