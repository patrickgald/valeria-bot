const moment = require('moment');

const { selectCountAllRequestsCustomerTodayGroupedByName } = require('../../models/requestsCustomer');


async function selectCountAllRequestsCustomerToday() {

    let today = moment().format('YYYY-MM-DD');

    const countRequests = await selectCountAllRequestsCustomerTodayGroupedByName(today);

    let outputCountAllRequests = `:alarm_clock: \t __Volumetria atual__ \t :alarm_clock:\n\n`;

    countRequests.forEach(customer => {
        outputCountAllRequests += `**${customer.nome}** -> ${customer.count} \n`;
    });

    return outputCountAllRequests;
}

module.exports = { selectCountAllRequestsCustomerToday }

