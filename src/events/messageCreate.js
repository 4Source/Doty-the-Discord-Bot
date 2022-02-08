const {noGuildConfigsFound} = require("../../util/log-messages");
const GuildConfig = require('../../database/models/guildConfig');
const { Intents } = require("discord.js");

const event = {
	name: 'messageCreate',
        async execute(message) {
            //Ignor Bot Messages 
            if (message.author.bot) return;
    
            //Ignor Empty Messages
            if(message.content === "") return;
    
            //Log
            console.log(`[messageCreate][${message.guildId}][${message.channelId}][${message.author.id}][${message.id}] Triggerd with: "${message.content}"`);
    
            const guildID = message.guildId;
            const client = message.client;
            //Load Guild Config with GuildID from Memory
            let guildConfig = client.guildConfigs.get(`${guildID}`);
            //Check Guild exist in Memory
            if(!guildConfig) noGuildConfigsFound(guildID, this.name);
            //Check Guild exist in Database and assign if
            if(!guildConfig) {
                //Load Guild Configs to Memory from Database if exist
                const dbConfigs = await GuildConfig.findAll({
                    where: {
                        guild_id: guildID
                    }
                });
                dbConfigs.every(config => config instanceof GuildConfig);
    
                dbConfigs.forEach(config => client.guildConfigs.set(config.guild_id, config.dataValues));
    
                guildConfig = client.guildConfigs.get(`${guildID}`);
                
                if(!guildConfig) {
                    console.log(`Try Load Guild Config with ID [${guildID}] from Database FAILED!`);
                    return;
                }
                console.log(`Loaded Guild Config with ID [${guildID}] from Database!`);
            }
    
            //Check if Command with Prefix
            if(!message.content.startsWith(guildConfig.prefix)) return;
    
            //Split in Args
            const args = message.content.substring(guildConfig.prefix.length).split(/ +/);
    
            //Search in Commands Collection for Command
            const command = message.client.commands.find(cmd => cmd.name == args[0]);
    
            //Check ifnot Valid Command
            if(!command) return message.reply({ content: "That is not a valid command!", ephemeral: true });
    
            //Execute Command
            try {
                await command.execute(message, args, message.client);
                console.log(`[messageCreate][${message.guildId}][${message.channelId}][${message.author.id}][${message.id}] Successfully Executed Command!`);
            } catch (error) {
                console.error(`[messageCreate][${message.guildId}][${message.channelId}][${message.author.id}][${message.id}] ${error}`);
                await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        },
};

const intents =  Intents.FLAGS.GUILD_MESSAGES;


module.exports = {
    event,
    intents,
};
