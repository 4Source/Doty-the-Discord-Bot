module.exports = {
    /**
     * 
     * @param {number} guildID Guild Id whitch is Missing
     * @param {string} from Where send Message
     */
    noGuildConfigsFound: function (guildID, from) {
        console.log(`${from}: No guild Config with this ID [${guildID}] found!`)
    }
}