const { MessageEmbed } = require('discord.js');
const GuildConfig = require('../../database/models/guildConfig');

module.exports = {
    name: "settings",
    desciption: "Change Server Settings with this Command",
    
    async execute(message, args, client) {
        //Check enougth arguments passt 
        if(args.length < 3) return console.log("Not enough Arguments!");

        //Need Permissioins Check
        
        //Switch trough the settings options
        switch(args[1]){
            case 'prefix':
                try {
                    await GuildConfig.update({ prefix: args[2] }, {
                        where: {
                            guild_id: message.guildId
                        }
                      });
                    
                    //Load Guild Configs to 
                    const dbConfigs = await GuildConfig.findAll({
                        where: {
                            guild_id: message.guildId
                        }
                    });
                    dbConfigs.every(config => config instanceof GuildConfig);
    
                    dbConfigs.forEach(config => client.guildConfigs.set(config.guild_id, config.dataValues));
                    message.reply({ content: `Prefix Updated to "${args[2]}"`, ephemeral: true });
                } catch (error) {
                    console.log(error);
                    message.reply({ content: 'Something went wrong.', ephemeral: true });
                }
            break;
            case 'channel':

                //Need to Check is Valid Channel

                try {
                    await GuildConfig.update({ welcome_channel_id: args[2] }, {
                        where: {
                            guild_id: message.guildId
                        }
                        });
                    
                    //Load Guild Configs to 
                    const dbConfigs = await GuildConfig.findAll({
                        where: {
                            guild_id: message.guildId
                        }
                    });
                    dbConfigs.every(config => config instanceof GuildConfig);
    
                    dbConfigs.forEach(config => client.guildConfigs.set(config.guild_id, config.dataValues));
                    message.reply({ content: `Welcome Channel Updated to "${args[2]}"`, ephemeral: true });
                } catch (error) {
                    console.log(error);
                    message.reply({ content: 'Something went wrong.', ephemeral: true });
                }
            break;
            default:
                message.reply({ content: `${args[1]} is not an valid Value.`, ephemeral: true });
        };


    }
};