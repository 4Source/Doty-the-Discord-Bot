const { io } = require('socket.io-client');

class WebSocketClient {
    constructor( url ) {
        this.socket = io(url);
    }

    onEvents() {
        this.socket.on('update', (data) => {
            console.log(data);
        });
    }

    on(ev, callback) {
        this.socket.on(ev, callback);
    }

    onGuild(client, guild) {
        if(!guild) return;
        console.log(`WebSocket for GuildID: ${guild.id}`);
        this.socket.on(`${guild.id}`, (data) => {
            const temp = client.guildConfigs.get(data.guildId);
            temp[data.key] = data.value;
            client.guildConfigs.set(temp.guild_id, temp);
        });
    }
}

module.exports = WebSocketClient;