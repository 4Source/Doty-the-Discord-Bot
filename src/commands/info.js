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
			.setDescription('Info about a user')
			.addUserOption(option => option.setName('target').setDescription('Select a User')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('server')
			.setDescription('Info about the server'))
    .addSubcommand(subcommand =>
        subcommand
            .setName('ping')
            .setDescription('Ping of the Bot')),

    
    async execute(interaction) {
        const sub = interaction.options.getSubcommand();

        switch(sub){
            case 'user':
                const user = interaction.options.getUser('target');
                
                if(user) {
                    await interaction.reply(`Username: ${user.tag}\nID: ${interaction.user.id}`);
                } 
                else {
                    await interaction.reply(`Your tag: ${interaction.user.tag}\nID: ${interaction.user.id}`);
                }
                break;
            case 'server':
                await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
                break;
            case 'ping':
                await interaction.reply(`Ping:  ms.`);
                break;
        }
    }
};