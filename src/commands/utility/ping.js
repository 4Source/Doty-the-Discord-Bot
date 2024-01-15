const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { botColor } = require('../../../config.json');

module.exports = {
        data: new SlashCommandBuilder()
                .setName('ping')
                .setDescription("Checks the bot's response time."),
        async execute(client, interaction) {
                await interaction.deferReply();

                const reply = await interaction.fetchReply();

                const ping = reply.createdTimestamp - interaction.createdTimestamp;

                const embed = new EmbedBuilder()
                        .setColor(botColor)
                        .setTitle('Heartbeat')
                        .addFields(
                                { name: 'Client', value: `${ping}ms` },
                                { name: 'Websocket', value: `${Math.round(client.ws.ping)}ms` }
                        )
                        .setTimestamp();


                interaction.editReply({ embeds: [embed] });
        }
};