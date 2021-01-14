const axios = require('axios');

async function getNextHoliday(){
    let nextHoliday = {
        method: 'get',
        url: `https://date.nager.at/Api/v2/NextPublicHolidays/BR`,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return await(await axios(nextHoliday)).data[0];
};

module.exports = { getNextHoliday }