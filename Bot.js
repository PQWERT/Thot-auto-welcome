const Discord = require('discord.js');
const client = new Discord.Client(); 

client.on('ready', () => { console.log('oh come ON!'); }); 

client.on('message', message => { if (message.content === 'fuck you') 
{ message.reply('no u'); } });  

client.on('message', message => { if (message.content === 'bruh') 
{ message.reply('100'); } });  

client.on('message', message => { if 
(message.content === '@ThE THOT bOt') 
{ message.reply('WHAT'); } });  

client.on('message', message => { if 
(message.content === 'yeet') 
{ message.reply('yoot'); } });  

client.on('message', message => { if 
(message.content === '?') 
{ message.reply('¿'); } });  

client.on('message', message => { if (message.content === 'nigga') 
{ message.reply('show me your n word pass you racist fuck'); } });  

client.on('message', message => { if (message.content === 'you are obsolete you are to be replaced ') 
{ message.reply('and you are going to eat street'); } });  

client.on('message', message => { if (message.content === 'stop pinging me') 
{ message.reply('no.'); } });  
 
client.on('message', message => 
{ if (message.content === 'E') 
{ message.reply('MarkEplier' ); } });  

client.on('message', message => 
{ if (message.content === 'who is the bitch here') 
{ message.reply(message.author.avatarURL); } });  

client.on('message', message => { if (message.content === 'your mom') 
{ message.reply('only on our server'); } });  

client.on('message', message => { if (message.content === 'fight me') 
{ message.reply('only on our server'); } });  

client.on('message', message => { if (message.content === 'l love you') 
{ message.reply('love is a lie'); } });  

client.on('message', message => { if (message.content === 'I love you too' ) 
{ message.reply('still a lie'); } });  

client.on('message', message => { if (message.content === 'fuck') 
{ message.reply('u'); } });  

client.on('message', message => { if (message.content === 'boi') 
{ message.reply('poi'); } });  

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to the Wastelands , ${member}`);
});

emitter.setMaxListeners(50)

client.login(process.env.BOT_TOKEN);
