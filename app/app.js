require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
});

const discord = require('discord.js');
const cron = require('node-cron');
const moment = require('moment');

const { getKeyProvider } = require('./services/commands/KeyProvider');

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
        default:
            msg.reply('comando inválido ❗');
            break;
    }
});

//minute hour day/month month day/week

cron.schedule('* * * * sun', async () => {
    let dateSend = moment().format('DD/MM/YYYY HH:mm:ss');
    let outputBot = `⏰  ${dateSend}  ⏰`;

    bot.channels.cache.get(process.env.GENERAL_CHANNEL).send(outputBot);
    
    console.log(`Mensagem enviada em ${dateSend}`);
});