//motération
module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande merci de pas refaire la commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à bannir de se serveur.')
        if (member.id === message.guild.ownerID) return message.channel.send("Vous ne pouvez pas bannir le propriétaire du serveur car c'est le plus haut gradé.")
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas Bannir ce membre.')
        if (!member.bannable) return message.channel.send("Le bot ne peut pas bannir ce membre car il n'a pas les permission.")
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} a été banni de se serveur !`)
    },
    name: 'ban',
    guildOnly: true
}