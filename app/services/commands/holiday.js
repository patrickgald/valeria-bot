const moment = require('moment');

const { getNextHoliday } = require('../externals/nagerPublicHolidays');

async function getHoliday() {
    let nextTwoHolidays = await getNextHoliday();

    nextTwoHolidays = `🏖️ **${moment(nextTwoHolidays.date).format('DD/MM/YYYY')}** -> ${nextTwoHolidays.localName} 🏖️`;

    return `**RESULTADO** \n\n${nextTwoHolidays}`;
}



module.exports = { getHoliday }