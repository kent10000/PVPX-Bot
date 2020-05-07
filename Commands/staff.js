const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    return message.channel.send("If you have any questions, please open a ticket in #support!")

}

module.exports.help = {
    name: "staff"
}