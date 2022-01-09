module.exports = {
	name: 'interactionCreate',
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