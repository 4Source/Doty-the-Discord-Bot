const { Intents } = require("discord.js");

const event = {
	name: 'guildDelete',
	async execute(guild) {
        console.log(`Left ${guild.name}`);

		//Check Guild exist in Memory (db)
        //if(!guildConfig) return noGuildConfigsFound(guild.id, "guildDelete");

		//Delete Guild Config after 30 Days
	},
};

const intents = Intents.FLAGS.GUILDS;

module.exports = {
	event,
	intents,
};
