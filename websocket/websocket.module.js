const WebSocketClient = require('./WebSocketClient');

// WebSocket Connection
let webSocket;

// Inizialize the Object of the WebSocket with the passed URL
const init = ( url ) => {
    webSocket = new WebSocketClient(url)
    return webSocket;
}

// Give the Object of the WebSocket back
const use = () => {
    return webSocket;
}

// Exports Modules
module.exports = {
    init: init,
    use: use
}
