const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Shows the ping of the bot!'),

	
	async execute(interaction) {
		await interaction.reply(`Ping:  ms.`);
	}
};

