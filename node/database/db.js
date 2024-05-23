import {Sequelize} from 'sequelize'

//Conectamos la Base de Datos sql
const db = new Sequelize( 'database_app', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db