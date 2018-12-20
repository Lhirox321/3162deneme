
        } catch (error) {
            return message.channel.send(`\`[ERROR ❌]\`, ${user.username} Rapor Verilemedi Çünkü : ${error}`);
        }

    } 
    
       
   
    
    else {
        return message.channel.send(`${user.username} Kullanımı : .spotify`);
    }
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spotifyaç','spotify'],
  permLevel: 0
};

exports.help = {
  name: 'spotify',
  description: 'spotify tracker ',
  usage: 'spotify'
};

