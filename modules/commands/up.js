module.exports.config = {
	name: "up",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "tpk", 
	description: "xem uptime",
	commandCategory: "Thông tin",
	usages: "up",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, __GLOBAL }) {
  const moment = require("moment-timezone");
  const tow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
	var { threadID, messageID } = event;
	if (event.body.indexOf("upt")==0 ||
 (event.body.indexOf("up","Up","Upt","jrt","JRT")==0)) {    
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    const res = await axios.get(`https://docs-api.jrtxtracy.repl.co/saying/hearing?apikey=JRTvip_2200708248`);
var love = res.data.data;
    const jrt = await axios.get(`https://docs-api.jrtxtracy.repl.co/saying/cadao?apikey=JRTvip_2200708248`);
var cadao = jrt.data.data;
    const req = await axios.get(`https://docs-api.jrtxtracy.repl.co/saying/hearing?apikey=JRTvip_2200708248`);
var bancobiet = req.data.data;
    const time = process.uptime() + global.config.UPTIME,
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const { commands } = global.client;
  axios.get('https://docs-api.jrtxtracy.repl.co/nsfw/ausand?apikey=JRTvip_2200708248').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `======『 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 』======\n\n[⚜️] ➜ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗕𝗼𝘁 ${global.config.BOTNAME} đ𝗮̃ 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆\n━━━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝘂̉𝗮 𝗯𝗼𝘁: ${global.config.version}\n[⚜️] ➜ 𝗧𝗼̂̉𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${commands.size}\n[⚜️] ➜ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n[⚜️] ➜ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n━━━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗧𝗵𝗶́𝗻𝗵: ${love}\n[⚜️] ➜ 𝗖𝗮 𝗱𝗮𝗼: ${cadao}\n[⚜️] ➜ 𝗕𝗮̣𝗻 𝗰𝗼́ 𝗯𝗶𝗲̂́𝘁: ${bancobiet}\n━━━━━━━━━━━━━━━━━━\n⏰=====『 ${tow} 』=====⏰`,
            attachment: fs.createReadStream(__dirname + `/noprefix/remix.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/noprefix/remix.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/noprefix/remix.${ext}`)).on("close", callback);
      })}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

       }