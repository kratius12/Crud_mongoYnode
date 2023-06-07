//se importa la libreria de mongodb
const { MongoClient, ObjectId } = require('mongodb');
//se ingresan las credenciales para la conección a la base de datos
const uri = 'mongodb+srv://admin:admin@cluster0.ya4kxql.mongodb.net/?retryWrites=true&w=majority'
//se crea un función para ingresar los docuementos en la colección de materiales, donde la información de los materiales es el parametro
async function crearMateriales(nuevoMat){
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
//se crea la función de crear material para ingresar un solo material a la base de datos
async function crearMaterial(nuevoMat){
    //se instacia la conexión a la base de datos
    const client = new MongoClient(uri);
    try{
        //se conecta a la base de datos
        await client.connect();
        //se crea el query para realizar la operación de guardado de la información
        const result = await client.deb('construtech').collection('materiales').insertOne(nuevoMat);
        //se imprime el mensaje de confirmación de que se ha realizado la operación correctamente
        if(result){
        console.log(`Se crearon un nuevo material`);}
        else{
            console.log("no se pudo crear el material")
        }
    //se crea un catch por si se genera un error con la conexión a la base de datos
    }catch(error){
        //se imprime el mensaje de error
        console.log(error)
    }finally{
        //se cierra la conexión para garantizar la seguridad de la base de datos
        await client.close();
    }
}


//Se crea la función para buscar un material teniendo como parametro el nombre del material
async function mostrarMaterial(nombre){
    //se instacia la conexión a la base de datos
    const client = new MongoClient(uri);
    try{
        //se realiza la conexión para garantizar que se esté conectado antes de realizar la operación
        await client.connect();
        //se realiza el query que se necesita para realizar la busqueda del material teniendo como filtro el nombre del mismo
        const result = await client.db('constru-tech').collection('materiales').findOne({nombre:nombre},{});
        //se crea una condición para cuando el query se ejecute correctamente y traiga la información del material requerido
        if(result){
            //se imprime en consola que efectivamente se ha encontrado el material requerido
            console.log(`se econtró un material`);
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
async function mostrarMateriales(){
    const client = new MongoClient(uri)
    try{
        await client.connect();
        const result = await client.db('construtech').collection('materiales').find({},{nombre:1,estado:1});
        if(result){
            console.log("se encontraron los siguientes materiales: ");
            console.log(result);
        }else{
            console.log("No se encontraron materiales");
        }
        }catch(error){
            console.log(error);
        }finally{
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
//se crea la función para actualizar el estado de los materiales, pidiendo como parametro el estado al cual se desea cambiar y el estado anterior
async function actualizarMateriales(estado,estadoAnt){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    try{
        //se conecta a la base de datos para realizar la operación de actualización del estado de los materiales
        await client.connect();
        //se genera el query para realizar la operación de actualización del estado de los materiales
        const result = await client.db('construtech').collection('materiales').updateMany({estado:estadoAnt},
            {$set:{estado:estado}});
            //se genera la condición para generar el mensaje de confirmación de correcta ejecución de la operación
            if(result){
                //se imprime el mensaje de confirmación de que se ha encontrado los materiales y se ha actualizado el estado de los mismos
                console.log(`${result.matchedCount} materiales encontrados`);
            }else{
                //en caso tal de que no se encuentre el material acorde con los parametros que se dispusieron se genera el mesaje que se encuentra en el else
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
//se crea la función para eliminar los materiales que tengan el mismo nombre
async function eliminarMateriales(nomMat){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de eliminación de los materiales
    try{
        //se conecta a la base de datos para realizar la operación de eliminación de los materiales
        await client.connect();
        //se genera el query para realizar la operación de eliminación de los materiales
        const result = await client.db('constru-tech').collection('materiales').deleteMany({nombre:nomMat});
        //se crea una condición para que muestre en consola que se encontró el material y que se eliminó
        if(result){
            console.log(`se encontró un material con nombre: ${nomMat}`);
            console.log(result);
            console.log(`se eliminó el material: ${nomMat}`);
        }else{
            console.log("no se encontró el material")
        }
    }catch{
        console.log(error);
    }finally{
        await client.close();
    }
}

//se crea la funcion para registrar nuevo empleados
async function crearEmpleados(nuevoEmp){
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
//se crea la función para registrar un nuevo empleado
async function crearEmpleado(nuevoEmp){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de creación de un nuevo empleado
    try{
        //se conecta a la base de datos
        await client.connect();
        //se crea el query para realizar la operación de creación de un nuevo empleado
        const result = await client.db('construtech').collection('empleados').insertOne(nuevoEmp);
        //se crea una condición para que se imprima el mensaje de confirmación de que se ha creado un nuevo empleado
        if(result){
        //se imprime el mensaje de confirmación de que se ha creado un nuevo empleado
        console.log(`Se creó un nuevo empleado`);}
        //en caso tal de que no se haya creado el empleado se imprime el mensaje que se encuentra en el else
        else{
            //se imprime el mensaje de que no se pudo crear el empleado
            console.log("no se pudo crear el empleado")
        }
    //se crea un catch por si se genera un error con la conexión a la base de datos
    }catch(error){
        //se imprime el mensaje de error
        console.log(error)
    }finally{
        //se cierra la conexión para mantener la seguridad de la base de datos
        await client.close();
    }
}
//se crea la función de mostrar empleado con el parametro id para filtrar los empleados
async function mostrarEmpleado(id){
    //se instancia la conexión con la base de datos 
    const client = new MongoClient(uri);
    // se genera un try-catch-finally para realizar la operación de busqueda de un mepleado
    try{
        //se genera la conexión para ganartizar que se ejecute la operación
        await client.connect()
        // se genera el query para la operación requerida
        const result = await client.db('construtech').collection('empleados').findOne({_id: id});
        //se genera una condición para mostrar el resultado de la operación 
        if(result){
            //se imprime por consola el resultado de la operación
            console.log(`se ha encontraod un empleado con el id. ${id}`)
            //se muestra la información que contiene el docuemnto del empleado con el id ingresado
            console.log(result)
        }//en caso tal de que no se encuentre el empleado se imprime por consola el mesaje que contiene el else
        else{
            //se imprime el mensaje
            console.log(`no s eha encontrado n ingun empleado con el id ingresado`)
        }
    }
    //se genera un catch en caso tal de que falle la conexión con la base de datos
    catch(error){
        // se imprime el mensaje de error
        console.log(error)
    }finally{
        //se cierra la conexión con la base de datos para asegurar la integridad de la base de datos
        await client.close()
    }
    
}
//se crea la función de mostrar empleados para mostrar todos los registros de la colección empleados
async function mostrarEmpleados(){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    // se crea un try-catch-finally para crear la operación requerida para la función
    try{
        //se abre la conexión con la base de datos
        await client.connect()
        //se genera el query para la operación requerida
        const result = await client.db('construtech').collection('empleados').find({},{});
        //Se genera la condición para mostrar el resultado de la operación realizada
        if(result){
            //se miestra el mensaje y la información de los empleados que se encuentran en la colección.
            console.log(`se encontraron los siguientes empleados:`);
            console.log(result)
        }
        //Se genera un else en caso tal de que no se haya realizado correctamente la operación.
        else{
            //se muestra el mensaje de que no se han podido encontrar los empleados.
            console.log(`no se han encontrado empleados`)
        }
    //se crea un catch en caso tal de que falle la conexión con al base de datos.
    }catch(error){
        //se imprime el mensaje de error
        console.log(error)
    }finally{
        //se cierra la conexión para manterner la integridad de la base de datos.
        await client.close()
    }
}

//Se crea la función para actualizar empleados, pasando como paramentros el estado al cual se desea cambiar y el estado anterior
async function actualizarEmpleados(estado,estadoAnt){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de actualización del estado de los empleados
    try{
        //se conecta a la base de datos para realizar la operación de actualización del estado de los empleados
        await client.connect();
        //se genera el query para realizar la operación de actualización del estado de los empleados
        const result = await client.db('construtech').collection('empleados').updateMany({estado:estadoAnt},
            {$set:{estado:estado}});
            //se genera la condición para generar el mensaje de confirmación de correcta ejecución de la operación
            if(result){
                //se imprime el mensaje de confirmación de que se ha encontrado los empleados y se ha actualizado el estado de los mismos
                console.log(`${result.matchedCount} empleados encontrados`);
            }
            //en caso tal de que no se encuentre el empleado acorde con los parametros que se dispusieron se genera el mesaje que se encuentra en el else
            else{
                //se imprime el mensaje de que no se pudo encontrar el empleado
                console.log("no se pudo encontrar el empleado")
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
//se crea la función para actualizar el estado de un empleado, pidiendo como parametro el id del empleado y el estado al cual se desea cambiar
async function actualizarEmpleado(id,estado){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de actualización del estado de un empleado
    try{
        //se conecta a la base de datos para realizar la operación de actualización del estado de un empleado
        await client.connect();
        //se genera el query para realizar la operación de actualización del estado de un empleado
        const result = await client.db('construtech').collection('empleados').updateOne({_id:id},
       {$set:{estado:estado}});
        //se genera la condición para generar el mensaje de confirmación de correcta ejecución de la operación    
        if(result){
            //se imprime el mensaje de confirmación de que se ha encontrado el empleado y se ha actualizado el estado del mismo
            console.log(`Se encontr un empleado con el id: ${id}`);
        }
        //en caso tal de que no se encuentre el empleado acorde con los parametros que se dispusieron se genera el mesaje que se encuentra en el else
        else{
            //se imprime el mensaje de que no se pudo encontrar el empleado
            console.log("no se pudo encontrar el empleado")
        }  
    //se genera un cath por si se presenta un error con la conecón a la base de datos
    }catch (error){
        //se imprime el mesaje del error
        console.log(error)
    }finally{
        //se cierra la conexión a la base de datos por cuestiones de seguridad
        await client.close();
    }
}

//se crea la función para eliminar un empleado passando como patametro el id del empleado
async function eliminarEmpleado(id){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de eliminación de un empleado
    try{
        //se conecta a la base de datos para proceder a realizar la operación correcpondiente con la función
        await client.connect();
        // se genera el query para eliminar el empleado requerido
        const result = await client.db('construtech').collection('empleados').deleteOne({_id:id});
        //se crea una condición para que muestre en consola que se encontró el empleado y que se eliminó
        if(result){
            //Mensaje de que se encontró el empleado con el id ingresado
            console.log(`se encontró un empleado con id: ${id}`);
            //se muestra toda la información del empleado que se ha eliminado
            console.log(result);
            //mesaje de que se eliminó correctamente el empleado.
            console.log(`se eliminó el empleado: ${id}`);
        }
    }
    //se crea un catch por si se tiene problemas con la conexión a la base de datos
    catch(error){
        //se imprime el mensaje de error
        console.log(error);
    }finally{
        //se cierra la conexión a la base de datos por cuestiones de la seguridad de la base de datos
        await client.close();
    }
}
//se crea la función para eliminar los empleados que tengan el mismo estado
async function eliminarEmpleados(estado){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de eliminación de los empleados
    try{
        //se conecta a la base de datos para realizar la operación de eliminación de los empleados
        await client.connect();
        //se genera el query para realizar la operación de eliminación de los empleados
        const result = await client.db('construtech').collection('empleados').deleteMany({estado:estado});
        //se crea una condición para que muestre en consola que se encontró el empleado y que se eliminó
        if(result){
            //Mensaje de que la cantidad de empleados que se econtraron con el estado ingresado
            console.log(`se encontró un empleado con estado: ${estado}`);
            //se muestra toda la información de los empleados que se han eliminado
            console.log(result);
            //mesaje de que se eliminó correctamente los empleados.
            console.log(`se eliminó el empleado: ${estado}`);
        }
    }
    //se crea un catch por si se tiene problemas con la conexión a la base de datos
    catch(error){
        //se imprime el mensaje de error
        console.log(error);
    }finally{
        //se cierra la conexión a la base de datos por cuestiones de la seguridad de la base de datos
        await client.close();
    }
}



//se crea la función para registrar nuevos proveedores
async function crearProveedores(nuevoProv){
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
//se crea la función para registrar un nuevo proveedor
async function crearProveedor(nuevoProv){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de creación de un nuevo proveedor
    try{
        //se conecta a la base de datos
        await client.connect();
        //se crea el query para realizar la operación de creación de un nuevo proveedor
        const result = await client.db('construtech').collection('proveedores').insertOne(nuevoProv);
        //se crea una condición para que se imprima el mensaje de confirmación de que se ha creado un nuevo proveedor
        if(result){
        //se imprime el mensaje de confirmación de que se ha creado un nuevo proveedor
        console.log(`Se creó un nuevo proveedor`);
        //en caso tal de que no se haya creado el proveedor se imprime el mensaje que se encuentra en el else
        }else{
            //se imprime el mensaje de que no se pudo crear el proveedor
            console.log("no se pudo crear el proveedor")
        }
    //se crea un catch por si se genera un error con la conexión a la base de datos
    }catch(error){
        //se imprime el mensaje de error
        console.log(error)
    }finally{
        //se cierra la conexión para mantener la seguridad de la base de datos
        await client.close();
    }
}
//se crea la función para actualizar el estado de los proveedores, pidiendo como parametro el estado al cual se desea cambiar y el estado anterior
async function actualizarProveedores(estado,estadoAnt){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de actualización del estado de los proveedores
    try{
        //se conecta a la base de datos para realizar la operación de actualización del estado de los proveedores
        await client.connect();
        //se genera el query para realizar la operación de actualización del estado de los proveedores
        const result = await client.db('construtech').collection('proveedores').updateMany({estado:estadoAnt},
            {$set:{estado:estado}});
            //se genera la condición para generar el mensaje de confirmación de correcta ejecución de la operación
            if(result){
                //se imprime el mensaje de confirmación de que se ha encontrado los proveedores y se ha actualizado el estado de los mismos
                console.log(`${result.matchedCount} proveedores encontrados`);
            //en caso tal de que no se encuentre el proveedor acorde con los parametros que se dispusieron se genera el mesaje que se encuentra en el else
            }else{
                //se imprime el mensaje de que no se pudo encontrar el proveedor
                console.log("no se pudo encontrar el proveedor")
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
//se crea la función para actualizar el estado de un proveedor, pidiendo como parametro el id del proveedor y el estado al cual se desea cambiar
async function actualizarProveedor(id,estado){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de actualización del estado de un proveedor
    try{
        //se conecta a la base de datos para realizar la operación de actualización del estado de un proveedor
        await client.connect();
        //se genera el query para realizar la operación de actualización del estado de un proveedor
        const result = await client.db('construtech').collection('proveedores').updateOne({_id:id},
            {$set:{estado:estado}});
            //se genera la condición para generar el mensaje de confirmación de correcta ejecución de la operación
            if(result){
                //se imprime el mensaje de confirmación de que se ha encontrado el proveedor y se ha actualizado el estado del mismo
                console.log(`Se encontró un proveedor con el id: ${id}`);
            }
            //en caso tal de que no se encuentre el proveedor acorde con los parametros que se dispusieron se genera el mesaje que se encuentra en el else
            else{
                //se imprime el mensaje de que no se pudo encontrar el proveedor
                console.log("no se pudo encontrar el proveedor")
            }
    //se genera un cath por si se presenta un error con la conecón a la base de datos
    }catch(error){
        //se imprime el mesaje del error
        console.log(error);
    }finally{
        //se cierra la conexión a la base de datos por cuestiones de seguridad
        await client.close();
    }
}
//se crea la función para eliminar un proveedor passando como patametro el id del proveedor
async function eliminarProveedor(id){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de eliminación de un proveedor
    try{
        //se conecta a la base de datos para proceder a realizar la operación correcpondiente con la función
        await client.connect();
        // se genera el query para eliminar el proveedor requerido
        const result = await client.db('construtech').collection('proveedores').deleteOne({_id:id});
        //se crea una condición para que muestre en consola que se encontró el proveedor y que se eliminó
        if(result){
            //Mensaje de que se encontró el proveedor con el id ingresado
            console.log(`se encontró un proveedor con id: ${id}`);
            //se muestra toda la información del proveedor que se ha eliminado
            console.log(`se eliminó el proveedor con el id: ${id}`);
        }else{
            //en caso tal de que no se encuentre el proveedor se imprime este mensaje
            console.log("no se encontró el proveedor")
        }
    //se crea un catch por si se tiene problemas con la conexión a la base de datos
    }catch(error){
        //se imprime el mensaje de error
        console.log(error);
    }finally{
        //se cierra la conexión a la base de datos por cuestiones de la seguridad de la base de datos
        await client.close()
    }
}
//se crea la función para eliminar los proveedores que tengan el mismo nombre
async function eliminarProveedores(){
    //se instancia la conexión a la base de datos
    const client = new MongoClient(uri);
    //se crea un try-catch-finally para realizar la operación de eliminación de los proveedores
    try{
        //se conecta a la base de datos para realizar la operación de eliminación de los proveedores
        await client.connect();
        //se genera el query para realizar la operación de eliminación de los proveedores
        const result = await client.db('construtech').collection('proveedores').deleteMany({estado:estado});
        //se crea una condición para que muestre en consola que se encontró el proveedor y que se eliminó
        if(result){
            //Mensaje de que la cantidad de proveedores que se econtraron con el estado ingresado
            console.log(`${result.matchedCount} proveedores encontrados con estado: ${estado}`);
        }else{
            //en caso tal de que no se encuentren proveedores con el estado ingresado se imprime este mensaje
            console.log(`no se encontraron proveedores con el estado: ${estado}`)
        }
    //se crea un catch por si se tiene problemas con la conexión a la base de datos
    }catch(error){
        //se imprime el mensaje de error
        console.log(error);
    }finally{
        //se cierra la conexión a la base de datos por cuestiones de la seguridad de la base de datos
        await client.close()
    }
}


//se exportan la funciones para poder usarlas en otro archivo
module.exports = {
    //se exporta las funciones para mostrar los documentos de las 3 colecciones
    mostrarMaterial,
    mostrarMateriales,
    mostrarEmpleado,
    mostrarEmpleados,
    //se exportan las funciones para agregar nuevos documentos de las 3 colecciones
    crearMateriales,
    crearMaterial,
    crearEmpleados,
    crearEmpleado,
    crearProveedores,
    crearProveedor,
    
    //se exportan las funciones para actualizar los documentos de las 3 colecciones
    actualizarMateriales,
    actualizarEmpleado,
    actualizarEmpleados,
    actualizarProveedores,
    actualizarProveedor,
    actualizarMaterial,

    //se exportan las funciones para eliminar los documentos de las 3 colecciones
    eliminarMaterial,
    eliminarMateriales,
    eliminarEmpleado,
    eliminarEmpleados,
    eliminarProveedor,
    eliminarProveedores
} 
