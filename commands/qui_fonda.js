//commande kif
const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('qui son les fondateur du serveur?')
        .setDescription('les fondateur du serveur son **FoudreIOX** et **ShiningStorm641**')
        .setColor('#ff0000'))
    },
    name: 'qui_son_les_fondateur'
}