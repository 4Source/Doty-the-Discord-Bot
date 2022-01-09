const { DataTypes } = require("sequelize");
const db = require("../../util/database");


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
    },
  }, {
    //Configuration Sequelize
    timestamps: false
  });
  
  module.exports = GuildConfig;