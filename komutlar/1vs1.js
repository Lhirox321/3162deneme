const Discord = require('discord.js');



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', 'kapış'],
  permLevel: 0
};

exports.help = {
  name: '1vs1',
  description: 'Seçtiğiniz 2 kişiyi savaştırırsınız.',
  usage: '.1vs1 <@kullanıcı> <@kullanıcı>'
};
