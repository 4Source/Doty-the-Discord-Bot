const { MessageEmbed } = require('discord.js');
const GuildConfig = require('../../database/models/guildConfig');

module.exports = {
    name: "settings",
    desciption: "Change Server Settings with this Command",
    
    async execute(message, args, client) {
        console.log("Wanna Change Settings?");
        console.log(args);

        if(args.length < 3) return console.log("Not enough Arguments!");

        //Permissioins Check
        
        switch(args[1]){
            case 'prefix':
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

                message.reply(`Prefix Updated to ${args[2]}`);
            break;
            case 'channel':

            break;
        };


    }
};