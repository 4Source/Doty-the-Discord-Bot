const short = require('shortid');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
        //Create Id for Logging
        const id = short();
        //Log
		console.log(`[interactionCreate][#${interaction.channel.name}][${interaction.user.tag}][${id}] Triggerd!`);
        
        //Check ifnot SlashCommand
        if (!interaction.isCommand()) return;

        //Search in SlashCommands Collection for SlashCommand
        const command = interaction.client.slashCommands.get(interaction.commandName);

        //Check ifnot Valid SlashCommand
        if (!command) return;

        //Execute SlashCommand
        try {
            await command.execute(interaction);
            console.log(`[interactionCreate][#${interaction.channel.name}][${interaction.user.tag}][${id}] Successfully Executed Command!`);
        } catch (error) {
            console.error(`[interactionCreate][#${interaction.channel.name}][${interaction.user.tag}][${id}] ${error}`);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
	},
};