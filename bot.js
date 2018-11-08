const client = new Discord.Client();
const Discord = require('discord.js'),
      
client.on('guildMemberAdd', Sal => { //! Ayman ᴸᶜ#9955
    var embed = new Discord.RichEmbed()
    .setTitle('Welcome')
    .setDescription('- Welcome To, Orexn .')
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name','orexn') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });

client.login(process.env.BOT_TOKEN); 

