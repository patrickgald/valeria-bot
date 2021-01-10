const mysql = require('mysql2/promise');
const moment = require('moment');

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const connection = await mysql.createConnection(process.env.DB_HOST);
    console.log(`Conectado ao banco Valid em ${moment().format('DD/MM/YYYY HH:mm:ss')}`);
    global.connection = connection;

    return connection;
}
 
module.exports = {connect}