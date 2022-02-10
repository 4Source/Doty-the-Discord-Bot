const { Intents, Interaction } = require("discord.js");

const event = {
	name: 'interactionCreate',
    /**
     * @memberof Events
     * @alias interactionCreate
     * @description Executed when the Event was triggerd. 
     * <br>See DiscordJs: {@Link https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-interactionCreate interactionCreate}
     * @param {Interaction} interaction Represents an interaction.
     */
	async execute(interaction) {
        //Log
		console.log(`[interactionCreate][${interaction.guildId}][${interaction.channelId}][${interaction.user.id}][${interaction.id}] Triggerd!`);
        
        //Check ifnot SlashCommand
        if (!interaction.isCommand()) return;

        //Search in SlashCommands Collection for SlashCommand
        const command = interaction.client.slashCommands.get(interaction.commandName);

        //Check ifnot Valid SlashCommand
        if (!command) return;

        //Execute SlashCommand
        try {
            await command.execute(interaction);
            console.log(`[interactionCreate][${interaction.guildId}][${interaction.channelId}][${interaction.user.id}][${interaction.id}] Successfully Executed Command!`);
        } catch (error) {
            console.error(`[interactionCreate][${interaction.guildId}][${interaction.channelId}][${interaction.user.id}][${interaction.id}] ${error}`);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
	},
};

const intents = Intents.FLAGS.GUILD_INTEGRATIONS;

module.exports = {
	event,
	intents,
};
