//se importa la libreria de mongodb
const { MongoClient } = require('mongodb');
//se ingresan las credenciales para la conección a la base de datos
const uri = 'mongodb+srv://admin:admin@cluster0.ya4kxql.mongodb.net/?retryWrites=true&w=majority'
//se crea un función para ingresar los docuementos en la colección de materiales, donde la información del material es el parametro
async function crearMaterial(nuevoMat){
    //se conecta a la base de datos instanciando la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para ingresar la información de los materiales
    try{
        //se conecta para garantizar que está conectado antes de realizar la operación
        await client.connect();
        //se realiza el query para realizar el guardado de la información
        const result = await client.db('construtech').collection('materiales').insertMany(nuevoMat);
        //se imprime un mensaje para confirmar que se ha realizado la operación correctamente.
        console.log(`Se crearon nuevos materiales`);
    //se crea un carch en caso tal de que se genere un error, tener un mensaje de error claro y así poder resolverlo
    } catch (error){
        //se imprime el mensaje de error
        console.log(error)
    }
    finally{
        //se cierra la conexión para garanizar la seguridad de la base de datos
        await client.close();
    }
}
//Se crea la función para buscar un material teniendo como parametro el nombre del material
async function mostrarMaterial(nomMat){
    //se instacia la conexión a la base de datos
    const client = new MongoClient(uri);

    try{
        //se realiza la conexión para garantizar que se esté conectado antes de realizar la operación
        await client.connect();
        //se realiza el query que se necesita para realizar la busqueda del material teniendo como filtro el nombre del mismo
        const result = await client.db('constru-tech').collection('materiales').findOne({name:nomMat});
        //se crea una condición para cuando el query se ejecute correctamente y traiga la información del material requerido
        if(result){
            //se imprime en consola que efectivamente se ha encontrado el material requerido
            console.log(`se econtró un material con el nombre: ${nomMat}`);
            //se muestra toda la información del material
            console.log(result);
        }else{
            //Este mensaje es en caso tal de que no se encuentre el material con el nombre que se le ha pasado como parametro a la función
            console.log("No se pudo encontrar el material")
        }
    //se crea un catch por si ocurre un error con la conexión a la base de datos
    }catch (error){
        //se imprime por consola el mensaje de error
        console.log(error);
    }finally{
        // se cierra la conexión para garantizar la seguridad de la información
        await client.close();
    }
}
//se crea la función de actualizar material pidiendo 2 parametros, el primero es el id del material y el segundo es el nombre por el cual se desea cambiar
async function actualizarMaterial(id,nomMat){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    try{
        //se inicia la conexión para realizar eficientemente los procedimientos
        await client.connect();
        //se genera el query para realizar la operación de actualización del nombre del material
        const result = await client.db('constru-tech').collection('materiales').updateOne({_id:id},
            {$set:{nombre:nomMat}});
            //se genera la condición para generar el mensaje de confirmación de correcta ejecución de la operación
            if(result){
                console.log(`${result.matchedCount} materiales encontrados`);
            //en caso tal de que no se encuentre el material acorde con los parametros que se dispusieron se genera el mesaje que se encuentra en el else
            }else{
                console.log("no se pudo encontrar el material")
            }
    //se genera un cath por si se presenta un error con la conecón a la base de datos
    }catch(error){
        //se imprime el mesaje del error
        console.log(error);
    }finally{
        //se cierra la conexión a la base de datos por cuestiones de seguridad
        await client.close()
    }
}


//Se crea la función para eliminar un material passando como patametro el id del material
async function eliminarMaterial(id){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);

    try{
        //se conecta a la base de datos para proceder a realizar la operación correcpondiente con la función
        await client.connect();
        // se genera el query para eliminar el material requerido 
        const result = await client.db('constru-tech').collection('materiales').deleteOne({_id:id});
        //se crea una condición para que muestre en consola que se encontró el material y que se eliminó
        if(result){
            //Mensaje de que se encontró el material con el id ingresado
            console.log(`se encontró un material con id: ${id}`);
            console.log(result);
            //mesaje de que se eliminó correctamente el maerial.
            console.log(`se eliminó el material: ${id}`);
        }else{
            //en caso tal de que no se encuentre el material se imprime este mensaje
            console.log("no se encontró el material")
        }
    //se crea un catch por si se tiene problemas con la conexión a la base de datos
    }catch{
        //se imprime el mensaje de error
        console.log(error);
    }finally{
        //se cierra la conexión a la base de datos por cuestiones de la seguridad de la base de datos
        await client.close();
    }
}
//se crea la funcion para registrar nuevo empleados
async function crearEmpleado(nuevoEmp){
    //se instancia la conexión con la base de datos
    const client = new MongoClient(uri);
    try{
        //se genera la conexión 
        await client.connect();
        //se crea el query para realizar la operación creación de empleados en la base datos
        const result = await client.db('construtech').collection('empleados').insertMany(nuevoEmp);
        //se imprime el mensaje de confirmación de que se han registrados los empleados exitosamente
        console.log(`Se crearon nuevos empleados`);
    //se crea un catch por si surgen problemas con la conexión a la base de datos
    } catch (error){
        //se imprime el mensaje de error
        console.log(error)
    }
    finally{
        //se cierra la conexión para mantener la seguridad de la base de datos
        await client.close();
    }
}
//se crea la función para registrar nuevos proveedores
async function crearProveedor(nuevoProv){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    try{
        //se genera la conexión a la base de datos
        await client.connect();
        //se genera e query para realizar la agregación de los proveedores a la base de datos
        const result = await client.db('construtech').collection('proveedores').insertMany(nuevoProv);
        //mensaje de confirmación de operación exitosa
        console.log(`Se crearon nuevos proveedores`);
    //se genera un catch por si surgen errores con la conexión a la base de datos
    } catch (error){
        //se imprime el mesaje de error de la conexión a la base de datos 
        console.log(error)
    }
    finally{
        //se cierra la conexión de la base de datos para priorizar la seguridad de la base de datos
        await client.close();
    }
}
//se exportan la funciones para poder usarlas en otro archivo
module.exports = {
    mostrarMaterial,
    actualizarMaterial,
    eliminarMaterial,
    crearMaterial,
    crearEmpleado,
    crearProveedor
}
