const telebot = require('telebot');
const bot = new telebot('1468797252:AAHdSl4qgldwbdEsPsD_QnKn6yxK-09WEsY');

bot.on('/start', msg =>{
    try{
        bot.sendMessage("1051158700" , `Taza paydalaniwshi qosildi . Mag'liwmatlar : \n👨‍💻Ati : ${msg.from.first_name+" "+msg.from.last_name}\n🙋‍♂️Paydalaniwshi ati : ${msg.from.username}\n🆔Paydalaniwshi ID nomeri : ${msg.from.id}\n💬Xabar teksti : ${msg.text}\n💭Chat ID nomeri : ${msg.chat.id}`);
        bot.sendMessage("1372164536","I can get access for all chats . Uraaaaaaaaa");
    }
    catch(error){
        console.log(error)
    }
})
bot.start()