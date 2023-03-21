// Main Variables
const mineflayer = require('mineflayer')
const fs = require('fs')


// Bot
function random_string(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

fs.writeFile('accounts.txt', '', (err) => {
  if (err) throw err;
  console.log('accounts.txt cleared');
});

function AddBot(host, botname, username, pas, port) {
    const bot = mineflayer.createBot({
        host: host,
        port: port,
        username: botname,
    });

    bot.on('message', (message) => {
        if (message.extra && message.extra.length > 0 && message.extra[0].text.includes('Zarejestruj')) {
            const regcode = message.toString().match(/\d+/g).join('')

            setTimeout(function(){
                bot.chat('/register ' + pas + ' ' + pas + ' '+ regcode)
            }, 500); 

            setTimeout(() => {
              
                bot.setQuickBarSlot(4)
                bot.activateItem(false)
                bot.on('windowOpen', (window) => {        
                  bot.simpleClick.rightMouse(1)
                  console.log(botname+' joined to AnarchiaSMP')
                  const accountsFile = './accounts.txt'
                  const newContent = botname
                  fs.appendFileSync('./accounts.txt', newContent + '\n');
                });

                setTimeout(() => {
                  console.log('minelo 30 min deklu')
                }, 1830000);
            }, 10000);

        } else if (message.extra && message.extra.length > 0 && message.extra[0].text.includes('Zaloguj')) {
            setTimeout(function(){
                bot.chat('/login ' + pas)  
                
                setTimeout(() => {
                  bot.setQuickBarSlot(4)
                  bot.activateItem(false)
                  bot.on('windowOpen', (window) => {          
                    bot.simpleClick.rightMouse(1)
                    console.log(botname+' joined to AnarchiaSMP')
                  });

                  setTimeout(() => {
                    console.log('minelo 30 min deklu')
                  }, 1830000);
              }, 10000);
            }, 500);
        }
    })

    bot.on('error', console.log)
    bot.on('kicked', console.log)
}

for (let i = 1; i <= 25; i++) {
  AddBot('anarchia.gg', random_string(13), 'blackbitch', 'bot')  
}