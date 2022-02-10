const { MessageEmbed, User, Guild, Client } = require('discord.js');


/**
 * @memberof Commands
 * @description Returns Info about an User, Guild(Server) or The Bot
 * @param {Args} args Arguments Passed
 * @param {User} user User who initiated this
 * @param {Guild} guild The Guild where this was triggerd
 * @param {Client} client The Bot
 * @returns {MessageEmbed} Embeded Message
 */
const info = (args, user, guild, client) => {            
    const embed = new MessageEmbed()
                    .setColor('BLUE')
                    .setTimestamp();

        switch(args.type){
            case 'user':
                if(args.target){
                    embed.setTitle(args.target.tag)
                    .setThumbnail(args.target.avatarURL(true))
                    .addField('User ID', `${args.target.id}`, false)
                    .addField('User on Discord since', `${args.target.createdAt}`, false);
                }
                else {
                    embed.setTitle(user.tag)
                    .setThumbnail(user.avatarURL(true))
                    .addField('User ID', user.id, false)
                    .addField('User on Discord since', `${user.createdAt}`, false);
                }
                break;
            case 'server':
                let description = guild.description;
                if(description == null) description = '';
                embed.setTitle(guild.name)
                    .setThumbnail(guild.bannerURL())
                    .setDescription(`${description}`)
                    .addField('Total members:', `${guild.memberCount}`, false)
                    .addField('Server Created at', `${guild.createdAt}`, false);
                break;
            case 'bot':
                embed.setTitle('Doty')
                    .setDescription('Doty is an Bot for Discord.')
                    .addField('Latency', `Ping: ${client.ws.ping} ms.`, false);
                break;
        }
    return embed;
};

module.exports = info;