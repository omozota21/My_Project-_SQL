import express  from "express";
import cors from 'cors';
import mysql from "mysql2";
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

//app.get('/', (req, res)=> {
//  res.send ('HOLA - MUNDO' )
//  })

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BDTauste",
  database: "blogs",
  port: 8000,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("¡Conexión exitosa a la base de datos!");
});

app.get("/usuarios", (req, res) => {
  connection.query("SELECT * FROM usuarios", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error al obtener los usuarios");
    } else {
      res.send(results);
    }
  });
});


app.listen(8000, ()=>{
    console.log('Servidor funcionando en http://localhost:8000/')
})

