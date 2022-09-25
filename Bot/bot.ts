const { Telegraf } = require('telegraf');

const web_link = 'https://web.telegram.org/z/#431057920';

//сделать больше команд

const token = '5663394582:AAHggAWrU5vjFqVgrH37du1sanektL6hT9I';

const bot = new Telegraf(token)
  .start((ctx) =>
    ctx.reply('Welcome', {
      reply_markup: {
        keyboard: [[{ text: 'Check Daily Shop', web_app: { url: web_link } }]],
      },
    }),
  )
  .launch();
