
/**
 * @typedef {import('../../../types/discord.types').Interaction} Interaction
 * @typedef {import('../../../types/discord.types').Message} Message
 * @typedef {import('../../../types/discord.types').Client} Client
 */

/**
 * 
 * @param {Interaction|Message} message 
 * @param {Array<string>} args 
 * @param {Client} client 
 */
const ping = (message, args, client) => {
    message.reply(`Ping: ${client.ws.ping}ms.`);
};

module.exports = ping;