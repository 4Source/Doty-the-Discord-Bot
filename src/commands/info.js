const { SlashCommandBuilder } = require('@discordjs/builders');
const { Integration } = require('discord.js');

const data = 

module.exports = {
    data: new SlashCommandBuilder()
	.setName('info')
	.setDescription('Get info about a user or a server!')
	.addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Info about a User')
			.addUserOption(option => option.setName('target').setDescription('Select a User')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('server')
			.setDescription('Info about the Server'))
    .addSubcommand(subcommand =>
        subcommand
            .setName('bot')
            .setDescription('Info about the Bot')),

    
    async execute(interaction) {
        const sub = interaction.options.getSubcommand();

        switch(sub){
            case 'user':
                const user = interaction.options.getUser('target');
                
                if(user) {
                    await interaction.reply({ content: `Username: ${user.tag}\nID: ${interaction.user.id}`, ephemeral: true });
                } 
                else {
                    await interaction.reply({ content: `Your tag: ${interaction.user.tag}\nID: ${interaction.user.id}`, ephemeral: true });
                }
                break;
            case 'server':
                await interaction.reply({ content: `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`, ephemeral: true });
                break;
            case 'ping':
                await interaction.reply({ content: `Ping: ${interaction.client.ws.ping} ms.`, ephemeral: true });
                break;
        }
    }
};