const { MessageEmbed } = require('discord.js');
const ping = require('../util/ping');

module.exports = {
    name: "ping",
    desciption: "Ping of the Bot",
    
    async execute(message, args, client) {
        //message.reply(`Ping: ${client.ws.ping}ms.`);
        ping(message, args, client);
    }
};