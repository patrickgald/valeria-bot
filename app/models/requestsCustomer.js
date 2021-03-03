const { connect } = require('./connector');

async function selectCountAllRequestsCustomerTodayGroupedByName(today){

    console.log(today);

    const conn = await connect();
    const [rows] = await conn.query(`select c.nome, COUNT(CASE WHEN lv.data between '${today} 00:00:00' AND '${today} 23:59:59' Then '' END) AS 'count' from logs_valid lv, operadora o, cliente c where lv.operadora_id = o.id and lv.cliente_id = c.id and lv.data between '${today} 00:00:00' and '${today} 23:59:59' group by c.nome order by count DESC`);

    return rows;
}

module.exports = { selectCountAllRequestsCustomerTodayGroupedByName }