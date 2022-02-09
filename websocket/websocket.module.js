const WebSocketClient = require('./WebSocketClient');

// WebSocket Connection
let webSocket;

/**
 * Inizialize the Object of the WebSocket with the passed URL
 * @param {string} url The URL where the WebSocket should connect
 * @returns {WebSocketClient}
 */
const init = ( url ) => {
    webSocket = new WebSocketClient(url)
    return webSocket;
}

/**
 * Give the Object of the WebSocket back
 * @returns {WebSocketClient}
 */
const use = () => {
    return webSocket;
}

// Exports Modules
module.exports = {
    init: init,
    use: use
}
