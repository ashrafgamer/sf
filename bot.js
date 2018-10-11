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

client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});

client.login("NDk4NDY5MjUxMzMwMzQyOTEy.DqDKeg.0GgZrPRfr3nWvRVQAvMcvWrPpJU");


const client2 = new Discord.Client();


client2.on('ready', () => {
  console.log(`Logged in as!`);
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
  member.send(`

السلام عليكم لو ما هنت ابيك تنور استضافتنا بوجودك
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏خدمات الي نقدمهة
• قيف اواي بشكل يومي :tada: 
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• Credits,تقدر تدفع بايبال و اسيا و سوا
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• واعلان بسيط في 18 فل اكسس حساب فل اكسس في 35 الف كريدت 
• و فل داتا 3 الف كريدت
• شرفنا على استضافتنا Soon
• شرفنا على الدسكورد https://discord.gg/YtsrMTZ
                         #FoxHost
[${member}]`);

  });

  client.on('guildMemberAdd', member => {
  member.send(`

السلام عليكم لو ما هنت ابيك تنور استضافتنا بوجودك
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏خدمات الي نقدمهة
• قيف اواي بشكل يومي :tada: 
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• Credits,تقدر تدفع بايبال و اسيا و سوا
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• واعلان بسيط في 18 فل اكسس حساب فل اكسس في 35 الف كريدت 
• و فل داتا 3 الف كريدت
• شرفنا على استضافتنا Soon
• شرفنا على الدسكورد https://discord.gg/YtsrMTZ
                         #FoxHost

[${member}]`);


  });
