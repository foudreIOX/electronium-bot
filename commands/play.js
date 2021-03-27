// play lance la musique
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    // Vérification
    if (!message.member.voiceChannel) 
      return message.channel.send('Connectez vous a un salon vocal !')
    if (message.guild.me.voiceChannel)
      return message.channel.send('Le bot est déja`connecté a un salon vocal !')
    if(!args[0])
      return message.channel.send('Merci de préciser un lien YouTube pour commencé a écouter de la musique !')

    const validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send("Désolé, l'URL n'est pas valide !");

    // Commande
    const info = await ytdl.getInfo(args[0]);
    const connection = await message.member.voiceChannel.join();
    const dispatcher = await connection.playStream(
      ytdl(args[0], { filter: 'audioonly'})
    );
    message.channel.send(`Musique ajoutée dans votre salon: ${info.title}`);
};

module.exports.help = {
    name: 'play'
};