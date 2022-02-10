const { Intents, Client } = require("discord.js");

const event = {
	name: 'ready',
	once: true,
	/**
     * @memberof Events
     * @alias ready
     * @description Executed when the Event was triggerd. 
     * <br>See DiscordJs: {@Link https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-ready ready}
     * @param {Client} client The Bot
     */
	execute(client) {
		const intents = new Intents(client.options.intents).toArray();
		console.log('Intents Used: ', intents);

		console.log(`Doty is Up!\nLogged in as ${client.user.tag}`);
	},
};

const intents = 0;

module.exports = {
	event,
	intents,
};