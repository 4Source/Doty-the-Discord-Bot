/**
 * @typedef {Object} Interaction 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/Interaction DiscordJS}
 * @property {Snowflake} applicationId The application's id
 * @property {*} [channel] The channel this interaction was sent in
 * @property {Snowflake} [channelId] The id of the channel this interaction was sent in
 * @property {Client} client The client that instantiated this
 * @property {Date} createdAt The time the interaction was created at
 * @property {number} createdTimestamp The timestamp the interaction was created at
 * @property {Guild} [guild] The guild this interaction was sent in
 * @property {Snowflake} [guildId] The id of the guild this interaction was sent in
 * @property {string} [guildLocale] The preferred locale from the guild this interaction was sent in
 * @property {Snowflake} id The interaction's id
 * @property {string} locale The locale of the user who invoked this interaction
 * @property {*} [member] If this interaction was sent in a guild, the member which sent it
 * @property {*} [memberPermissions] The permissions of the member, if one exists, in the channel this interaction was executed in
 * @property {string} token The interaction's token
 * @property {*} type The interaction's type
 * @property {User} user The user which sent this interaction
 * @property {number} version The version
 * @property {function} inCachedGuild Indicates whether or not this interaction is both cached and received from a guild.
 * @property {function} inGuild Indicates whether this interaction is received from a guild.
 * @property {function} inRawGuild Indicates whether or not this interaction is received from an uncached guild.
 * @property {function} isApplicationCommand Indicates whether this interaction is a BaseCommandInteraction.
 * @property {function} isAutocomplete Indicates whether this interaction is an AutocompleteInteraction
 * @property {function} isButton Indicates whether this interaction is a ButtonInteraction.
 * @property {function} isCommand Indicates whether this interaction is a CommandInteraction.
 * @property {function} isContextMenu Indicates whether this interaction is a ContextMenuInteraction
 * @property {function} isMessageComponent Indicates whether this interaction is a MessageComponentInteraction.
 * @property {function} isMessageContextMenu Indicates whether this interaction is a MessageContextMenuInteraction
 * @property {function} isSelectMenu Indicates whether this interaction is a SelectMenuInteraction.
 * @property {function} isUserContextMenu Indicates whether this interaction is a UserContextMenuInteraction
 */

/**
 * @typedef {Object} Message 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/Message DiscordJS}
 * @property {*} [activity] Group activity
 * @property {Snowflake} [applicationId] The id of the application of the interaction that sent this message, if any
 * @property {*} attachments A collection of attachments in the message - e.g. Pictures - mapped by their ids
 * @property {User} [author] The author of the message
 * @property {*} channel The channel that the message was sent in
 * @property {Snowflake} channelId The id of the channel the message was sent in
 * @property {string} [cleanContent] The message contents with all mentions replaced by the equivalent text. If mentions cannot be resolved to a name, the relevant mention in the message content will not be converted.
 * @property {Client} client The client that instantiated this
 * @property {*} components A list of MessageActionRows in the message
 * @property {string} [content] The content of the message
 * @property {Date} createdAt The time the message was sent at
 * @property {number} createdTimestamp The timestamp the message was sent at
 * @property {boolean} crosspostable Whether the message is crosspostable by the client user
 * @property {boolean} deletable Whether the message is deletable by the client user
 * @property {boolean} editable Whether the message is editable by the client user
 * @property {Date} [editedAt] The time the message was last edited at (if applicable)
 * @property {number} [editedTimestamp] The timestamp the message was last edited at (if applicable)
 * @property {*} embeds A list of embeds in the message - e.g. YouTube Player
 * @property {*} flags Flags that are applied to the message
 * @property {*} [groupActivityApplication] Supplemental application information for group activities
 * @property {Guild} [guild] The guild the message was sent in (if in a guild channel)
 * @property {Snowflake} [guildId] The id of the guild the message was sent in, if any
 * @property {boolean} hasThread Whether this message has a thread associated with it
 * @property {Snowflake} id The message's id
 * @property {*} [interaction] Partial data of the interaction that this message is a reply to
 * @property {*} [member] Represents the author of the message as a guild member. Only available if the message comes from a guild where the author is still a member
 * @property {*} mentions All valid mentions that the message contains
 * @property {string} [nonce] A random number or string used for checking message delivery
 * @property {boolean} partial Whether or not this message is a partial
 * @property {boolean} pinnable Whether the message is pinnable by the client user
 * @property {boolean} [pinned] Whether or not this message is pinned
 * @property {*} reactions A manager of the reactions belonging to this message
 * @property {*} [reference] Message reference data
 * @property {*} stickers A collection of stickers in the message
 * @property {boolean} [system] Whether or not this message was sent by Discord, not actually a user (e.g. pin notifications)
 * @property {*} [thread] The thread started by this message
 * @property {boolean} [tts] Whether or not the message was Text-To-Speech
 * @property {*} [type] The type of the message
 * @property {string} url The URL to jump to this message
 * @property {Snowflake} [webhookId] The id of the webhook that sent the message, if applicable
 * @property {function} awaitMessageComponent Collects a single component interaction that passes the filter. The Promise will reject if the time expires.
 * @property {function} awaitReactions Similar to createReactionCollector but in promise form. Resolves with a collection of reactions that pass the specified filter.
 * @property {function} createMessageComponentCollector Creates a message component interaction collector.
 * @property {function} createReactionCollector Creates a reaction collector.
 * @property {function} crosspost Publishes a message in an announcement channel to all channels following it.
 * @property {function} delete Deletes the message.
 * @property {function} edit Edits the content of the message.
 * @property {function} equals Used mainly internally. Whether two messages are identical in properties. If you want to compare messages without checking all the properties, use message.id === message2.id, which is much more efficient. This method allows you to see if there are differences in content, embeds, attachments, nonce and tts properties.
 * @property {function} fetch Fetch this message.
 * @property {function} fetchReference Fetches the Message this crosspost/reply/pin-add references, if available to the client
 * @property {function} fetchWebhook Fetches the webhook used to create this message.
 * @property {function} inGuild Whether this message is from a guild.
 * @property {function} pin Pins this message to the channel's pinned messages.
 * @property {function} react Adds a reaction to the message.
 * @property {function} removeAttachments Removes the attachments from this message.
 * @property {function} reply Send an inline reply to this message.
 * @property {function} resolveComponent Resolves a component by a custom id.
 * @property {function} startThread Create a new public thread from this message
 * @property {function} suppressEmbeds Suppresses or unsuppresses embeds on a message.
 * @property {function} toString When concatenated with a string, this automatically concatenates the message's content instead of the object.
 * @property {function} unpin Unpins this message from the channel's pinned messages.
 */

/**
 * @typedef {string} Snowflake See Original {@link https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake DiscordJS}
 */

/**
 * @typedef {Object} User 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/User DiscordJS}
 * @property {number} [accentColor] The base 10 accent color of the user's banner
 * @property {string} [avatar] The user avatar's hash
 * @property {string} [banner] The user banner's hash
 * @property {boolean} [bot] Whether or not the user is a bot
 * @property {Client} client The client that instantiated this
 * @property {Date} createdAt The time the user was created at
 * @property {number} createdTimestamp The timestamp the user was created at
 * @property {string} defaultAvatarURL A link to the user's default avatar
 * @property {string} [discriminator] A discriminator based on username for the user
 * @property {*} [dmChannel] The DM between the client's user and this user
 * @property {*} [flags] The flags for this user
 * @property {string} [hexAccentColor] The hexadecimal version of the user accent color, with a leading hash
 * @property {Snowflake} id The user's id
 * @property {boolean} partial Whether this User is a partial
 * @property {boolean} [system] Whether the user is an Official Discord System user (part of the urgent message system)
 * @property {string} [tag] The Discord Tag for this user
 * @property {string} [username] The username of the user
 * @property {function} avatarURL A link to the user's avatar.
 * @property {function} bannerURL A link to the user's banner.
 * @property {function} createDM Creates a DM channel between the client and the user.
 * @property {function} deleteDM Deletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.
 * @property {function} displayAvatarURL A link to the user's avatar if they have one. Otherwise a link to their default avatar will be returned.
 * @property {function} equals Checks if the user is equal to another. It compares id, username, discriminator, avatar, banner, accent color, and bot flags. It is recommended to compare equality by using user.id === user2.id unless you want to compare all properties.
 * @property {function} fetch Fetches this user.
 * @property {function} fetchFlags Fetches this user's flags.
 * @property {function} send Sends a message to this channel.
 * @property {function} toString When concatenated with a string, this automatically returns the user's mention instead of the User object.
 */


 module.exports.unused = {};