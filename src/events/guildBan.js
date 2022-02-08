const { Intents } = require('discord.js')

const event = {
	name: 'guildBanAdd',
    async execute(ban) {
        console.log(await ban);/*
        ban.guild.fetchAuditLogs()
        .then(audit => console.log(audit.entries));*/
    },
};

const intents = Intents.FLAGS.GUILD_BANS;

module.exports = {
    event,
    intents,
};
