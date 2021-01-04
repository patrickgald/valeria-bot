require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
});

const discord = require('discord.js');
const cron = require('node-cron');
const moment = require('moment');


const ENV = process.env;

const bot = new discord.Client();
bot.login(ENV.BOT_ID);

bot.on('ready', function () {
    console.log(`Bot ${bot.user.username} foi iniciado em ${moment().format('DD/MM/YYYY HH:mm:ss')}`);
});

bot.on('message', async msg => {
    if(msg.author.bot || msg.channel.id != ENV.VALERIA_CHANNEL) return;

    console.log(msg.content);
});

//minute hour day/month month day/week

cron.schedule('* * * * *', async () => {
    let dateSend = moment().format('DD/MM/YYYY HH:mm:ss');
    let outputBot = `⏰  ${dateSend}  ⏰`;

    bot.channels.cache.get(ENV.GENERAL_CHANNEL).send(outputBot);
    
    console.log(`Mensagem enviada em ${dateSend}`);
});