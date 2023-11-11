const TelegramBot = require('node-telegram-bot-api');

const token = '6688050653:AAGdCGZO-H8BZupzz_pVuqvYjIcPaaaKjJM';

const bot = new TelegramBot(token, { polling: true });

const webAppUrl = "https://6547be1177f80700089c94cd--jocular-zuccutto-dda3fd.netlify.app/"


bot.on('message', async(msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;  

    if(text === '/start'){

        await bot.sendMessage(chatId,'наш интернет магазин ',{
            reply_markup: {
                inline_keyboard: [
                    [{ text:'Открыть', web_app: {url: webAppUrl}}]
                ]
            }
        })
       

    }
    
    
});
