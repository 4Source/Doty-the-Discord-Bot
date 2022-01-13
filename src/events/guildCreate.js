const GuildConfig = require('../../database/models/guildConfig');

module.exports = {
	name: 'guildCreate',
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