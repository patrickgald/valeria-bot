const { helpText } = require('../../templates/helpText');

function getHelp(){
    return helpText();
}

module.exports = { getHelp }
