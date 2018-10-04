const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '496332757765718036').join();
});

    client.on('ready', () => {
     client.user.setActivity("- Esinti .",{type: 'Listening'});

});

client.login(process.env.BOT_TOKEN);
