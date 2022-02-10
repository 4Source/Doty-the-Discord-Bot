const { MessageEmbed } = require('discord.js');
const { Interaction, Message, Client } = require('../../../types/discord.types')

/**
 * @memberof Commands
 * @param {Client} client 
 * @returns {MessageEmbed}
 */
const ping = (client) => {            
    return new MessageEmbed()
    .setColor('BLUE')
    .setTimestamp()
    .setTitle('Ping')
    .setDescription(`${client.ws.ping}ms`);  
};

module.exports = ping;