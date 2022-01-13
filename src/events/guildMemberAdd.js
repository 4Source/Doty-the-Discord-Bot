const {noGuildConfigsFound} = require("../../util/log-messages");
const GuildConfig = require('../../database/models/guildConfig');

module.exports = {
	name: 'guildMemberAdd',
	async execute(guildMember) {
		//Load Guild Config with GuildID from Memory
        let guildConfig = guildMember.client.guildConfigs.get(`${guildMember.guild.id}`);

        if(!guildConfig) noGuildConfigsFound(guildMember.guild.id, "guildMemberAdd");
        //Check Guild exist in Memory (db)
        if(!guildConfig) {
            //Load Guild Configs to 
            const dbConfigs = await GuildConfig.findAll({
                where: {
                    guild_id: guildMember.guild.id
                }
            });
            dbConfigs.every(config => config instanceof GuildConfig);

            dbConfigs.forEach(config => guildMember.client.guildConfigs.set(config.guild_id, config.dataValues));

            guildConfig = guildMember.client.guildConfigs.get(`${guildMember.guild.id}`);
            
            if(!guildConfig) {
                console.log(`Try Load Guild Config with ID [${guildMember.guild.id}] from Database FAILED!`);
                return;
            }
            console.log(`Loaded Guild Config with ID [${guildMember.guild.id}] from Database!`);
            
        }
        

        if(guildConfig.welcome_channel_id) {
            guildMember.guild.channels.fetch(guildConfig.welcome_channel_id)
            .then(channel => {
                console.log(`Welcome Channel: ${channel.name}`);
                channel.send("Hello");
            })
            .catch(console.error);
            
        }
        else {
            console.log("no Welcome Channel!")
        }
    },
};