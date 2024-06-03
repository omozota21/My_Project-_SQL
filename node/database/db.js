import { Sequelize } from 'sequelize';

// Conectamos la Base de Datos SQL
const db = new Sequelize('blogs', 'root', 'DBTasute22-23', {
    host: 'localhost',
    dialect: 'mysql'
});

async function testConnection() {
    try {
        await db.authenticate();
        console.log('La conexión a la base de datos fue exitosa.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

testConnection();

export default db;
