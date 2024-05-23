import mongoose from "mongoose"
const url = "mongodb://localhost:27017/My_BD"  //conectamos a la db de mongodb
mongoose.connect(url)


const db = mongoose.connection    //Asignamos a la constante y poenmos mensajes para el acceso o el error de entrada a este.
db.on("open", ()=> {console.log("Conectado a MongoDB")})
db.on("error", ()=> {console.log("Error al conectar a MongoDB")})


export default db
