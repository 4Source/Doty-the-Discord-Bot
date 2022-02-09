const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

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
        const embed = new MessageEmbed()
                    .setColor('BLUE')
                    .setTimestamp();

        switch(sub){
            case 'user':
                const user = interaction.options.getUser('target');
                
                if(user) {
                    embed.setTitle(user.tag)
                    .setThumbnail(user.avatarURL(true))
                    .addField('User ID', `${user.id}`, false)
                    .addField('User on Discord since', `${user.createdAt}`, false);
                } 
                else {
                    embed.setTitle(interaction.user.tag)
                    .setThumbnail(interaction.user.avatarURL(true))
                    .addField('User ID', interaction.user.id, false)
                    .addField('User on Discord since', `${interaction.user.createdAt}`, false);
                }
                break;
            case 'server':
                let description = interaction.guild.description;
                if(description == null) description = '';
                embed.setTitle(interaction.guild.name)
                    .setThumbnail(interaction.guild.bannerURL())
                    .setDescription(`${description}`)
                    .addField('Total members:', `${interaction.guild.memberCount}`, false)
                    .addField('Server Created at', `${interaction.guild.createdAt}`, false);
                break;
            case 'bot':
                embed.setTitle('Doty')
                    .setDescription('Doty is an Bot for Discord.')
                    .addField('Latency', `Ping: ${interaction.client.ws.ping} ms.`, false);
                break;
        }
        await interaction.reply({ embeds: [embed], ephemeral: true });
    }
};