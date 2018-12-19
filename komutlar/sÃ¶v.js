exports.run = async (client, msg, args) => {
 
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Bana Sövemezsin!!!`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
}})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'söv',
  description: 'NSFW bir resim gösterir.',
  usage: 'söv'
 }
