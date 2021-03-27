const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Partenariat:')
        .setDescription('Pour un partenariat mp @FoudreIOX#0001 ou @! Mesko1k00bxl#0001\n conditions pour un partenariat avoir 100membre.')
        .setColor('#ff0000'))
    },
    name: 'partenariat'
}