const { selectKeyProvider } = require('../../models/keyProvider');


async function getKeyProvider(nameProvider) {
    let dataResult = await selectKeyProvider(nameProvider);

    let outputKeyProvider = '';

    if (dataResult == 0) {
        outputKeyProvider = `Nenhum dado encontrado para __${nameProvider}__ 😟`;
    } else {
        dataResult.forEach(element => {
            outputKeyProvider += `**${element.identificacao}** -> ${element.uuid} \n`;
        });
    }
    
    return `**RESULTADO** \n\n${outputKeyProvider}`;
    
}

module.exports = { getKeyProvider }