const { DataTypes } = require("sequelize");
const db = require('../database');
/**
 * @typedef {Object} GuildConfig
 * @property {string} guild_id The ID of this Guild 
 * @property {string} prefix The Prefix for this Guild
 * @property {string} welcome_channel_id The Id of Welcome Channel where Messages should be send to.
 */
const GuildConfig = db.define("guild_configs", {
    //Tabel Rows
    guild_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    prefix: {
        type: DataTypes.STRING,
        defaultValue: '!',
        allowNull: false,
    },
    welcome_channel_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    //Configuration Sequelize
    timestamps: false
  });
  
  module.exports = GuildConfig;