const {Client, MessageEmbed} = require('discord.js');

/**
 * @memberof Commands
 * @description Returns the Ping of the Bot.
 * @param {Client} client  The Bot
 * @returns {MessageEmbed} Embeded Message
 */
const ping = (client) => {            
    return new MessageEmbed()
    .setColor('BLUE')
    .setTimestamp()
    .setTitle('Ping')
    .setDescription(`${client.ws.ping}ms`);  
};

module.exports = ping;