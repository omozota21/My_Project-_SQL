import {Sequelize} from 'sequelize'


//Conectamos la Base de Datos sql
const db = new Sequelize( 'blogs', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db