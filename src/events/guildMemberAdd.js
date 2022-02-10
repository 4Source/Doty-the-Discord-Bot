const {noGuildConfigsFound} = require("../util/log-messages");
const GuildConfig = require('../database/models/guildConfig');
const { Intents, GuildMember } = require("discord.js");

const event = {
	name: 'guildMemberAdd',
    /**
     * @memberof Events
     * @alias guildMemberAdd
     * @description Executed when the Event was triggerd. 
     * <br>See DiscordJs: {@Link https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildMemberAdd guildMemberAdd}
     * @param {GuildMember} guildMember Represents a member of a guild on Discord.
     */
	async execute(guildMember) {
		const guildID = guildMember.guild.id;
		const client = guildMember.client;
		//Load Guild Config with GuildID from Memory
        let guildConfig = client.guildConfigs.get(`${guildID}`);
        //Check Guild exist in Memory
        if(!guildConfig) noGuildConfigsFound(guildID, this.name);
        //Check Guild exist in Database and assign if
        if(!guildConfig) {
            //Load Guild Configs to Memory from Database if exist
            const dbConfigs = await GuildConfig.findAll({
                where: {
                    guild_id: guildID
                }
            });
            dbConfigs.every(config => config instanceof GuildConfig);

            dbConfigs.forEach(config => client.guildConfigs.set(config.guild_id, config.dataValues));

            guildConfig = client.guildConfigs.get(`${guildID}`);
            
            if(!guildConfig) {
                console.log(`Try Load Guild Config with ID [${guildID}] from Database FAILED!`);
                return;
            }
            console.log(`Loaded Guild Config with ID [${guildID}] from Database!`);
        }
        
        //
        if(guildConfig.welcome_channel_id) {
            guildMember.guild.channels.fetch(guildConfig.welcome_channel_id)
            .then(channel => {
                console.log(`Welcome Channel: ${channel.name}`);
                //channel.send("Hello");
            })
            .catch(console.error);
            
        }
        else {
            console.log("no Welcome Channel!")
        }
    },
};

const intents = Intents.FLAGS.GUILD_MEMBERS;

module.exports = {
	event,
	intents,
};
