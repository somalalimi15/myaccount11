const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '500448084849852416').join();
});


    client.on('ready', () => {
     client.user.setActivity("Genial 🍃,'",{type: 'Listening'});
 
});


client.on('guildMemberAdd', member=> {



    client.channels.get("501515014570508319").send(`**Welcome To Nuvole.**`);

    });


client.login(process.env.BOT_TOKEN); 

