const { SlashCommandBuilder } = require('@discordjs/builders');
const { Interaction } = require('discord.js');
const ping = require('../util/ping');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping of the Bot'),

    /**
     * @memberof SlashCommands
     * @alias ping
     * @description Uses the {@link Commands.ping} to get the Response.
     * @param {Interaction} interaction The Interaction which containes the Command
     */
    execute(interaction) {     
        interaction.reply({ embeds: [ping(interaction.client)]});
    }
}