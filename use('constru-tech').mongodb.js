use('constru-tech')
db.createCollection('Obras y tiempos',{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "User Object Validation",
            required: ["id","description","fecha","materiales","empleado"],
            properties: {
                id:{
                    bsonType:"int",
                    minimum:1,
                    maximum:10000,
                    description:"'id'identificacion"
                },
                descripción: {
                    bsonType: "string",
                    minimum: 3,
                    maximum: 30,
                    description: "'Descripcion de la obra que se va a elaborar."
                },
                fecha: {
                    bsonType: "date",
                    minimum: 3,
                    maximum: 30,
                    description: "'fecha de inicio de la obra"
                },
                materiales: {
                    bsonType: "string",
                    minimum: 8,
                    maximum: 15,
                    description: "materiales que requiere la obra"
                },
                empleado: {
                    bsonType: "string",
                    minimum: 10,
                    maximum: 15,
                    description: "nombre del empleado(s) encargado(s) de la obra"
                }
            }
        }
    }
})

db.createCollection('Compras',{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "User Object Validation",
            required: ["id","proveedor","fecha"],
            properties: {
                id:{
                    bsonType:"int",
                    minimum:1,
                    maximum:10000,
                    description:"'id'identificacion"
                },
                proveedor: {
                    bsonType: "string",
                    minimum: 3,
                    maximum: 30,
                    description: "'nombre' debe ser tipo string y es requerido"
                },
                fecha: {
                    bsonType: "string",
                    minimum: 3,
                    maximum: 30,
                    description: "'apellido' debe ser tipo string y es requerido"
                },
                imagen: {
                    bsonType: "string",
                    minimum: 8,
                    maximum: 15,
                    description: "la cedula es requerida"
                }
            }
        }
    }
})

db.createCollection('Proveedores',{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "User Object Validation",
            required: ["id","nombre","direccion","email","telefono"],
            properties: {
                id:{
                    bsonType:"int",
                    minimum:1,
                    maximum:10000,
                    description:"'id'identificacion"
                },
                nombre: {
                    bsonType: "string",
                    minimum: 3,
                    maximum: 30,
                    description: "'nombre' debe ser tipo string y es requerido"
                },
                direccion: {
                    bsonType: "string",
                    minimum: 3,
                    maximum: 30,
                    description: "'dirección' debe ser tipo string y es requerido"
                },
                email: {
                    bsonType: "string",
                    minimum: 10,
                    maximum: 15,
                    description: "la contraseña es requerida para poder iniciar sesion"
                },
                telefono: {
                    bsonType: "string",
                    minimum: 10,
                    maximum: 15,
                    description: "la contraseña es requerida para poder iniciar sesion"
                },
                nombre_contacto: {
                    bsonType: "string",
                    minimum: 10,
                    maximum: 15,
                    description: "la contraseña es requerida para poder iniciar sesion"
                },
                telefono_contacto: {
                    bsonType: "string",
                    minimum: 10,
                    maximum: 15,
                    description: "la contraseña es requerida para poder iniciar sesion"
                },
                email_contacto: {
                    bsonType: "string",
                    minimum: 10,
                    maximum: 15,
                    description: "la contraseña es requerida para poder iniciar sesion"
                }
            }
        }
    }
})