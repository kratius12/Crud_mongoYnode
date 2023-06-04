const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:admin@cluster0.ya4kxql.mongodb.net/?retryWrites=true&w=majority'

async function crearMaterial(nuevoMat){
    const client = new MongoClient(uri);
    try{
        await client.connect();

        const result = await client.db('construtech').collection('materiales').insertMany(nuevoMat);

        console.log(`Se crearon nuevos materiales`);
    } catch (error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}
async function mostrarMaterial(nomMat){
    const client = new MongoClient(uri);

    try{
        await client.connect();

        const result = await client.db('constru-tech').collection('materiales').findOne({name:nomMat});

        if(result){
            console.log(`se econtró un material con el nombre: ${nomMat}`);
            console.log(result);
        }else{
            console.log("No se pudo encontrar el material")
        }
    }catch (error){
        console.log(error);
    }finally{
        await client.close();
    }
}

async function actualizarMaterial(id,nomMat){
    const client = new MongoClient(uri);

    try{
        await client.connect();

        const result = await client.db('constru-tech').collection('materiales').updateOne({_id:id},
            {$set:{nombre:nomMat}});
            if(result){
                console.log(`${result.matchedCount} materiales encontrados`);
            }else{
                console.log("no se pudo encontrar el material")
            }
    }catch(error){
        console.log(error);
    }finally{
        await client.close()
    }
}



async function eliminarMaterial(id){
    const client = new MongoClient(uri);

    try{
        await client.connect();

        const result = await client.db('constru-tech').collection('materiales').deleteOne({_id:id});
        if(result){
            console.log(`se encontró un material con id: ${id}`);
            console.log(result);
            console.log(`se eliminó el material: ${id}`);
        }else{
            console.log("no se encontró el material")
        }
    }catch{
        console.log(error);
    }finally{
        await client.close();
    }
}

async function crearEmpleado(nuevoEmp){
    const client = new MongoClient(uri);
    try{
        await client.connect();

        const result = await client.db('construtech').collection('empleados').insertMany(nuevoEmp);

        console.log(`Se crearon nuevos empleados`);
    } catch (error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}async function crearProveedor(nuevoProv){
    const client = new MongoClient(uri);
    try{
        await client.connect();

        const result = await client.db('construtech').collection('proveedores').insertMany(nuevoProv);

        console.log(`Se crearon nuevos proveedores`);
    } catch (error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}

module.exports = {
    mostrarMaterial,
    actualizarMaterial,
    eliminarMaterial,
    crearMaterial,
    crearEmpleado,
    crearProveedor
}