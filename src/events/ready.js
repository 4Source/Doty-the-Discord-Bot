const { Intents } = require("discord.js");

const event = {
	name: 'ready',
	once: true,
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