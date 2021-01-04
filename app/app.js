require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
});

const discord = require('discord.js');
const moment = require('moment');


const ENV = process.env;

const bot = new discord.Client();
bot.login(ENV.BOT_ID);

bot.on('ready', function () {
    console.log(`Bot ${bot.user.username} foi iniciado em ${moment().format('DD/MM/YYYY HH:mm:ss')}`);
});