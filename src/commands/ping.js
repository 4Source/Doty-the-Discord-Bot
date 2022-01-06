const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    desciption: "Ping of the Bot",
    
    async execute(message, args, client) {
        message.reply(`Ping: ${client.ws.ping}ms.`);
    }
};