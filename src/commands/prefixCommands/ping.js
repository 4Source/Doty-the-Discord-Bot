const ping = require('../util/ping');
const {Message, Client} = require('discord.js');

module.exports = {
    name: "ping",
    desciption: "Ping of the Bot",
    
    /**
     * @memberof PrefixCommands
     * @alias ping
     * @description Uses the {@link Commands.ping} to get the Response.
     * @param {Message} message The Message which containes the Command
     * @param {Array<string>} args The Arguments Passed to the Command
     * @param {Client} client The Bot 
     */
    async execute(message, args, client) {
        message.reply({ embeds: [ping(client)]});
    }
};