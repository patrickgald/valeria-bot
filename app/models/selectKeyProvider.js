const { connect } = require('./connector');

async function selectKeyProvider(nameProvider){
    const conn = await connect();
    const [rows] = await conn.query(`SELECT identificacao, uuid FROM operadora WHERE identificacao LIKE '%${nameProvider}%'`);

    return rows;
}

module.exports = {selectKeyProvider}