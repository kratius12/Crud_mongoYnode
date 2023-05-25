
const { MongoClient } = require('mongodb');
const uri="mongodb+srv://admin:admin@cluster0.ya4kxql.mongodb.net/?retryWrites=true&w=majority"

//Operaciones CRUD

//Create insertOne()

async function crearObra(nuevaObra){
    const cliente = new MongoClient(uri);

    try{
    await cliente.connect();

    const result=await cliente.db("constru-tech").collection("Clientes")
    .insertOne(nuevoCliente);

    console.log(`Se creo un nuevo cliente con el siguiente id: ${result.insertedId}`);

}catch(e){
    console.log(e);
}finally{
    await cliente.close();
}
    }

//Read findOne()

async function buscarCliente(nombreCliente){
    const cliente = new MongoClient(uri);

    try{
   await cliente.connect();
   const result =await cliente.db("constru-tech").collection("Clientes")
   .findOne({name: nombreCliente})

   if(result){
    console.log(`Se encontro el cliente de nombre ${nombreCliente}`)
    console.log(result);
   }
   else {
    console.log(`No se encontro el cliente de nombre ${nombreCliente}`)
   }

}catch(e){
    console.log(e);
}finally{
    await cliente.close();
}
    }
//Update updateOne()

async function actualizarCliente(nombreCliente,campoActualizar){
    const cliente = new MongoClient(uri);

    try{
   await cliente.connect();
   const result = await cliente.db("constru-tech").collection("Clientes")
   .updateOne({name:nombreCliente},{$set:{summary:campoActualizar}})
    console.log(`${result.matchedCount}cliente(s) cumplen con el criterio de busquedad`);
    console.log(`${result.modifiedCount}cliente(s) fue(ron) actualizada(s)`);


}catch(e){
    console.log(e);
}finally{
    await cliente.close();
}
    }


//Delete deleteOne()

async function eliminarCliente(nombreCliente){
    const cliente = new MongoClient(uri);

    try{
   await cliente.connect();
   const result = await cliente.db("constru-tech").collection("Clientes")
   .deleteOne({name:nombreCliente})
   console.log(`${result.deletedCount}cliente(s) fue(ron) eliminado(s)`);
  
}catch(e){
    console.log(e);
}finally{
    await cliente.close();
}
    }



module.exports={
    crearCliente,
    buscarCliente,
    actualizarCliente,
    eliminarCliente
}
