const { Intents, GuildBan } = require('discord.js')

const event = {
	name: 'guildBanAdd',
    /**
     * @memberof Events
     * @alias guildBanAdd
     * @description Executed when the Event was triggerd. 
     * <br>See DiscordJs: {@Link https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildBanAdd guildBanAdd}
     * @param {GuildBan} ban Represents a ban in a guild on Discord.
     */
    async execute(ban) {
        console.log(await ban);
        /*
        ban.guild.fetchAuditLogs()
        .then(audit => console.log(audit.entries));*/
    },
};

const intents = Intents.FLAGS.GUILD_BANS;

module.exports = {
    event,
    intents,
};
