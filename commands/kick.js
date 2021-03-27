//modération
module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande merci de ne pas refaire la commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à kick.')
        if (member.id === message.guild.ownerID) return message.channel.send("Vous ne pouvez pas exclure le propriétaire du serveur car c'est le haut gradé.")
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure ce membre.')
        if (!member.kickable) return message.channel.send("Le bot ne peut pas kick ce membre car il n'a pas les permission.")
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} a été kick du serveur!`)
    },
    name: 'kick',
    guildOnly: true
}