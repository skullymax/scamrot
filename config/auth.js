var config = {}; // DO NOT EDIT

config.discord = {}; // DO NOT EDIT
config.github = {}; // DO NOT EDIT
config.web = {}; // DO NOT EDIT

config.googl = 'GOO.GL AUTH KEY'; // This is used for URL shortening, if you wish to keep default Github links, use an invalid key as the key or keep it blank.
config.discord.token = 'NDM3MDI3MjE2NTczMDcxMzcx.Dc9qYg.q51c3VEzR6z89rwniM4O8765EyE'; // This is for discord bot token
config.discord.channelID = 'DISCORD GITHUB CHANNEL ID'; // This is for specific id number for github channel you want to use
config.github.token = 'GITHUB SECRET (WEBHOOK)'; // This is the secret word/token that you create when making a webhook.
config.github.logspath = '/userfolder/discord-bot-github/logs'; // This is the path where you want to store your log files.
config.github.errorpath = '/userfolder/discord-bot-github'; // This is the path where you want to store your error files.
config.web.cname = 'localhost'; // Should be fine as localhost
config.web.url = 'http://' + config.web.cname + '/ping'; // This is the web url to ping your web
config.web.port = 8080; // This is the port the web runs on
config.web.workers = 1; // Creates x web worker(s)
config.web.path = '/webhook'; // Webhook path for the events in JSON.

module.exports = config; // DO NOT EDIT
