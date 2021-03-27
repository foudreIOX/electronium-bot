//boutique argent
const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Boutique:')
        .setDescription('Voici le lien du Boutique:\n (**INDISPONIBLE**)')
        .setColor('#ff0000'))
    },
    name: 'boutique'
}