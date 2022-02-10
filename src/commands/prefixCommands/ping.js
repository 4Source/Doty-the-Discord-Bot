const ping = require('../util/ping');

module.exports = {
    name: "ping",
    desciption: "Ping of the Bot",
    
    async execute(message, args, client) {
        //message.reply(`Ping: ${client.ws.ping}ms.`);
        message.reply({ embeds: [ping(client)]});
    }
};