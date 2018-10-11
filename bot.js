const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
});



client.on("guildMemberRemove", member => {
  member.send(`**
Invites Rewards

15 invites: 2$ :moneybag: 

30 invites: 6$:moneybag: 

50 invites: 10$:moneybag: 

100 invites: 25$ ::moneybag:

https://discord.gg/GgWc5K
@everyone @here
https://discord.gg/9dJpym
**
[${member}]`);


  });

client.on("guildMemberAdd", member => {
  member.send(`**
Invites Rewards

15 invites: 2$ :moneybag: 

30 invites: 6$:moneybag: 

50 invites: 10$:moneybag: 

100 invites: 25$ ::moneybag:

https://discord.gg/GgWc5K
@everyone @here
https://discord.gg/9dJpym
**

[${member}]`);


  });

client.login("NDkyNTk4NjgxNzAzMjg0NzQz.Dokw7g.mBOkoNZyyLpJUJ8UqWzWlKpuSZw");


const client2 = new Discord.Client();

client2.on('ready', () => {
  console.log(`Logged in as !`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client2.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client2.guilds.size} " ]`);
  console.log(`Users! [ " ${client2.users.size} " ]`);
  console.log(`channels! [ " ${client2.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
});


client2.on("guildMemberRemove", member => {
  member.send(`**
Invites Rewards

15 invites: 2$ :moneybag: 

30 invites: 6$:moneybag: 

50 invites: 10$:moneybag: 

100 invites: 25$ ::moneybag:

https://discord.gg/GgWc5K
@everyone @here
https://discord.gg/9dJpym
**

[${member}]`);


  });

client2.on("guildMemberAdd", member => {
  member.send(`**
Invites Rewards

15 invites: 2$ :moneybag: 

30 invites: 6$:moneybag: 

50 invites: 10$:moneybag: 

100 invites: 25$ ::moneybag:

https://discord.gg/GgWc5K
@everyone @here
https://discord.gg/9dJpym
**

[${member}]`);


  });

client2.login("NDk3MTAyOTM3MDQzMTA3ODYw.DpaS3g.ghrJkpJhpNRs52XYreNxfS9FFk8");


const client3 = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as !`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [  ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client3.guilds.size} " ]`);
  console.log(`Users! [ " ${client3.users.size} " ]`);
  console.log(`channels! [ " ${client3.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
});

client3.login("NDk4NDY5MjUxMzMwMzQyOTEy.DqDKeg.0GgZrPRfr3nWvRVQAvMcvWrPpJU");
