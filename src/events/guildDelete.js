const { Intents, Guild } = require("discord.js");

const event = {
	name: 'guildDelete',
	/**
     * @memberof Events
     * @alias guildDelete
     * @description Executed when the Event was triggerd. 
     * <br>See DiscordJs: {@Link https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildDelete guildDelete}
     * @param {Guild} guild Represents a guild (or a server) on Discord.
     */
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
