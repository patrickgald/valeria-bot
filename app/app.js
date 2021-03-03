require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
});

const discord = require('discord.js');
const cron = require('node-cron');
const moment = require('moment');

const { getKeyProvider } = require('./services/commands/keyProvider');
const { getHelp } = require('./services/commands/help');
const { getHoliday } = require('./services/commands/holiday');

const { selectCountAllRequestsCustomerToday } = require('./services/cron/countAllRequestsCustomer');

const bot = new discord.Client();
bot.login(process.env.BOT_ID);

bot.on('message', async msg => {
    if(msg.author.bot || msg.channel.id != process.env.VALERIA_CHANNEL) return;

    let commandKey = msg.content.substring(0, (msg.content + " ")
        .indexOf(" "));

    if (msg.content.length != commandKey.length) 
        var commandContent = msg.content.split(commandKey)[1]
        .slice(1);
;
    switch(commandKey){
        case '/keyProvider':
            let outputKeyProvider = await getKeyProvider(commandContent);
            msg.reply(outputKeyProvider);
            break;
        case '/help':
            msg.reply(getHelp());
            break;
        case '/holiday':
            let outputHoliday = await getHoliday();
            msg.reply(outputHoliday);
            break;
        default:
            msg.reply('comando inválido ❗');
            break;
    }
});

//minute hour day/month month day/week

cron.schedule('0 10,14,18 * * mon,tue,wed,thu,fri', async () => {
    bot.channels.cache.get(process.env.GENERAL_CHANNEL)
        .send(await selectCountAllRequestsCustomerToday());
});