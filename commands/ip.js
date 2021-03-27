const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Voici ip et port:')
        .setDescription('ip: sonn \n port: sonn')
        .setColor('#ff0000'))
    },
    name: 'ip'
}