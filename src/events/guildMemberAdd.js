const {noGuildConfigsFound} = require("../../util/log-messages");
const GuildConfig = require('../../database/models/guildConfig');

module.exports = {
	name: 'guildMemberAdd',
	async execute(guildMember) {
		
		console.log(guildMember.displayName);

        //Load Guild Config with GuildID from Memory
        let guildConfig = guildMember.client.guildConfigs.get(`${guildMember.guild.id}`);

        //Check Guild exist in Memory (db)
        /*if(!guildConfig) {
            guildConfig  = await GuildConfig.findAll({
                where: {
                    guild_id: guildMember.guild.id
                }
            });
            console.log(guildConfig);
            if(guildConfig === []) console.log("Empty!");
            //if(guildConfig !== "[]") guildMember.client.guildConfigs.set(guildConfig.guild_id, guildConfig.dataValues);
            //console.log(guildConfig !== "[]" ? `Loaded Guild Config with ID [${guildMember.guild.id}] from Database!` : `Try Load Guild Config with ID [${guildMember.guild.id}] from Database FAILED!`);
        }*/
        if(!guildConfig) return noGuildConfigsFound(guildMember.guild.id, "guildMemberAdd");

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