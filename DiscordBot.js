const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();

// 連上線時的事件
client.on('ready', () => {
    console.log(`已連結到 ${client.user.tag}!`);
});

// 當 Bot 接收到訊息時的事件
client.on('message', msg => {
    // 如果訊息的內容是 'ping'
    if (msg.content === 'ping') {
        //  機器人則回應 'Pong'
        msg.reply('pong');
    }
});

client.login(你的token碼);
