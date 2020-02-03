const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ("620689121211449351")
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith('pl')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("خروج")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/groza");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('pic')) {
  });
  
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "612740241589272619" && ch.type === 'voice').join();

});

client.login(process.env.BOT_TOKEN);
