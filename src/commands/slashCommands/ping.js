const { SlashCommandBuilder } = require('@discordjs/builders');
const ping = require('../util/ping');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping of the Bot'),

    execute(interaction) {
        const args = [''];
        const client = interaction.client;
        
        ping(interaction, args, client)
    }
}