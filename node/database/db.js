import {Sequelize} from 'sequelize'


//Conectamos la Base de Datos sql
const db = new Sequelize( 'blogs', 'root', 'DBTasute22-23',{
    host: 'localhost',
    dialect: 'mysql'
});



export default db