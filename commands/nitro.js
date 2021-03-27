const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vote NITRO:')
        .setDescription(`vous avez voter pour faire un give NITRO.\nn'oublié pas que toute les 200 vote on fait gagné un NITRO\n**vous pouvez voter que une fois**`)
        .setColor('#ff0000'))
    },
    name: 'vote_nitro'
}