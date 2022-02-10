const GuildConfig = require('../database/models/guildConfig');
const { Intents, Guild } = require("discord.js");

const event = {
	name: 'guildCreate',
	/**
     * @memberof Events
     * @alias guildCreate
     * @description Executed when the Event was triggerd. 
	 * <br>See DiscordJs: {@Link https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildCreate guildCreate}
     * @param {Guild} guild Represents a guild (or a server) on Discord.
     */
	async execute(guild) {
		const [ config, created ] = await GuildConfig.findOrCreate({
			where: {
				guild_id: guild.id
			}
		});
		guild.client.guildConfigs.set(config.guild_id, config.dataValues);
		console.log(created ? `Joined new Guild ${guild.name} with Guild ID: ${config.guild_id}` : `Rejoind to Guild ${guild.name} with Guild ID: ${config.guild_id}`);
	},
};

const intents = Intents.FLAGS.GUILDS;

module.exports = {
	event,
	intents,
};
