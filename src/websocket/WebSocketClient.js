const { io } = require('socket.io-client');
const { Client } = require('../../types/discord.types')
const { GuildConfig } = require('../database/models/guildConfig');

/**
 * Class to create a WebSocketClient object
 */
class WebSocketClient {
    /**
     * Initialize an socket
     * @param {string} url What the socket should connect to.
     */
    constructor( url ) {
        this.socket = io(url);
    }

    /**
     * Register to some Events
     */
    onEvents() {
        this.socket.on('update', (data) => {
            console.log(data);
        });
    }
    
    /**
     * Register new to new Event.
     * @param {string} ev The Event Name
     * @param {function} callback The Callback that handles the Event
     */
    on(ev, callback) {
        this.socket.on(ev, callback());
    }
    
    /**
     * 
     * @param {Client} client Takes the Client Object
     * @param {GuildConfig} guild Takes the {@link GuildConfig} object
     * @returns {undefined}
     */
    onGuild(client, guild) {
        if(!guild || !client) return;
        //console.log(`WebSocket for GuildID: ${guild.guild_id}`);
        this.socket.on(`${guild.guild_id}`, (data) => {
            console.log(data);
            const temp = client.guildConfigs.get(data.guild_id);
            console.log(temp);
            temp[data.key] = data.value;
            client.guildConfigs.set(temp.guild_id, temp);
        });
    }
}

module.exports = WebSocketClient;