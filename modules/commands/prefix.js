 module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Gọi prefix bot",
	commandCategory: "Gọi bot",
	usages: "prefix",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const time = process.uptime() + global.config.UPTIME,
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? "Tốt ✔️":
  xuly > 10 && xuly < 100 ? "Ổn định 📊" : "deplay ";
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const namebot = config.BOTNAME
  const res = await axios.get(`${global.configApi.domain}/saying/hearing?apikey=${global.configApi.keyApi}`);
var thinh = res.data.data
  const req = await axios.get(`${global.configApi.domain}/saying/cadao?apikey=${global.configApi.keyApi}`);
var cadao = req.data.data
  const res1 = await axios.get(`${global.configApi.domain}/nsfw/vsbg?apikey=${global.configApi.keyApi}`);
//const res2 = await axios.get(`${global.configApi.domain}/nsfw/ig?apikey=${global.configApi.keyApi}`);
//const res3 = await axios.get(`${global.configApi.domain}/nsfw/gaisexy?apikey=${global.configApi.keyApi}`);
//const res4 = await axios.get(`${global.configApi.domain}/images/girl?apikey=${global.configApi.keyApi}`);
//const res5 = await axios.get(`${global.configApi.domain}/images/gaixinhvn?apikey=${global.configApi.keyApi}`);
//const res6 = await axios.get(`${global.configApi.domain}/nsfw/ausand?apikey=${global.configApi.keyApi}`);
var data1 = res1.data.data;
var array = [];
//var data2 = res2.data.data;
//var data3 = res3.data.data;
//var data4 = res4.data.data;
//var data5 = res5.data.data;
//var data6 = res6.data.data;
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
//var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
//var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
//var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
//var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
//var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    //array.push(downloadfile2);    
    //array.push(downloadfile3);
    //array.push(downloadfile4);
    //array.push(downloadfile5);    
    //array.push(downloadfile6);
					api.sendMessage({
                                                body: `💓 ==== [ ${namebot} ] ==== 💓\n━━━━━━━━━━━\n[⏰] ➜ 𝗧𝗶𝗺𝗲: ${timeNow}\n[⏳] ➜ 𝐁𝐎𝐓 𝐉𝐑𝐓 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜: ${hours} : ${minutes} : ${seconds}\n[🧸] ➜ 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀ ${thu}\n◆━━━◆『 ${icon} 』◆━━━◆\n[🥰] ➜ 𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n[☁️] ➜ 𝗖𝗮 𝗱𝗮𝗼:\n${cadao}\n━━━━━━━━━━━\n[⚙️] ➜ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${trinhtrang}\n[🌸] ➜ 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n[💮] ➜ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "❤️" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗵𝗲𝗹𝗽`, attachment:array},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ 𝗠𝗘𝗡𝗨 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗫𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗵𝗮𝘆 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n𝟮. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n𝟯. 𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘄𝗲𝗯 𝗮𝗽𝗶 𝗰𝘂̉𝗮 𝗯𝗼𝘁\n𝟰. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 \n\n[⚜️] ➜ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`${global.configApi.domain}/images/wallpaper?apikey=${global.configApi.keyApi}`)).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`[⚜️] ➜ Vui lòng chờ 1 xíu !!!`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] ====
━━━━━━━━━━━━━━━━━━
🐰 𝗖𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐰
==== [ 𝗡𝗵𝗼́𝗺 𝗼𝗿 𝗯𝗼𝘅 ] ====
━━━━━━━━━━━━━━━━━━
🌸 ${global.config.PREFIX}𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
⚜️ ${global.config.PREFIX}𝗺𝗲𝗻𝘂: 𝘅𝗲𝗺 𝘁𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗽𝗵𝗮̂̀𝗻 𝗹𝗲̣̂𝗻𝗵
💞 ${global.config.PREFIX}𝗰𝗵𝗲𝗰𝗸𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻
👤 ${global.config.PREFIX}𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
🌷 ${global.config.PREFIX}𝗰𝗵𝗲𝗰𝗸 + 𝗿𝗮𝗻𝗸𝗹𝗾 + 𝗰𝗵𝗲𝗰𝗸𝘁𝘁𝟮 + 𝗰𝗵𝗲𝗰𝗸𝘁𝘁𝟯 + 𝗰𝗵𝗲𝗰𝗸𝘁𝘃: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸
💕 ${global.config.PREFIX}𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅
☠️ ${global.config.PREFIX}𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰
💝 ${global.config.PREFIX}𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺
━━━━━━━━━━━━━━━━━━
==== [ 𝗧𝗿𝗼̀ 𝗰𝗵𝗼̛𝗶 𝗼𝗿 𝗴𝗶𝗮̉𝗶 𝘁𝗿𝗶́ ] ====
━━━━━━━━━━━━━━━━━━
💍 ${global.config.PREFIX}𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 
🕊️ ${global.config.PREFIX}𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿
😻 ${global.config.PREFIX}𝗴𝗵𝗲𝗽𝗱𝗼𝗶: 𝗴𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗿𝗲𝗽𝗹𝘆
━━━━━━━━━━━━━━━━━━
==== [ 𝗩𝗶𝗱𝗲𝗼 𝗼𝗿 𝗻𝗵𝗮̣𝗰 ] ====
━━━━━━━━━━━━━━━━━━
💓 !𝘆𝗼𝘂𝘁𝘂𝗯𝗲 & 𝘁𝗲̂𝗻 𝗰𝗹𝗶𝗽: 𝘁𝗮̉𝗶 𝗰𝗹𝗶𝗽 𝘁𝗿𝗲̂𝗻 𝘆𝘁𝗯
🎥 !𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁
🎼 !𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀
📺 !𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻: 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘂𝗿𝗹
━━━━━━━━━━━━━━━━━━
==== [ 𝗧𝗶𝗲̣̂𝗻 𝗶́𝗰𝗵 ] ====
━━━━━━━━━━━━━━━━━━
🔗 !𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿
💗 !𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆
🌹 !𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻
💞 !𝗾𝗿 + 𝗾𝗿𝘀: 𝗹𝗮̀𝗺 𝗾𝗿 𝘃𝗮̀ 𝗾𝘂𝗲́𝘁 𝗾𝗿
📆 !𝗮𝗴𝗲 + 𝗻𝗴𝗮̀𝘆 𝘀𝗶𝗻𝗵: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘀𝗶𝗻𝗵 𝗿𝗮
━━━━━━━━━━━━━━━━━━
======『 ${global.config.BOTNAME} 』======`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`${global.configApi.domain}/images/gaixinhvn?apikey=${global.configApi.keyApi}`)).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `[⚜️]=== 『 INFORMATION ADMIN 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[👀] ➜ Tên: Nguyễn Hải Đăng
[💮] ➜ Biệt danh: JRT 
[❎] ➜ Ngày tháng năm sinh: 26/02/2003 
[👤] ➜ Giới tính: Nam
[💫] ➜ Chiều cao cân nặng: 1m75 x 68 kg
[❤️] ➜ Tên duyên phận: Nguyễn Hồng Phấn
[🧸] ➜ Biệt danh: Tracy
[💥] ➜ Ngày sinh: 07/12/2001
[💘] ➜ Mối quan hệ: Đã đính hôn
[🌎] ➜ Quê quán: Phú Thọ - Hà Nội
[🌸] ➜ Tính cách: Hòa đồng, năng nổ, dứt khoát, thân thiện và hài hước
[🌀] ➜ Sở thích: Thích cái đẹp, đi phượt, giao lưu ca hát, thưởng thức các món ẩm thực khác nhau

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[👉] ➜ Information: https://bio.link/jrtxtracy62
[☎] ➜ SĐT & Zalo: 0396049649
[🌐] ➜ Facebook: https://www.facebook.com/NHD.JRT.262
[⛱] ➜ TikTok: https://www.tiktok.com/@hd.jrt03
[⛲] ➜ Instagram: https://www.instagram.com/hd.jrt.2k3
[🔎] ➜ Twitter: https://twitter.com/JRTOfficial_03
[📋] ➜ Telegram: https://t.me/jrtxtracy62
[🎬] ➜ Youtube: https://www.youtube.com/channel/UCNK_WugSVHOSAIPKr2epEOQ
[✉️] ➜ Email: dangz123456789z@gmail.com || lehonguyen2k3@gmail.com

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[💵] ➜ MOMO: 0354838459 / https://i.imgur.com/Ed0rDrO.png / Nguyễn Hồng Phấn
[💵] ➜ MOMO: 0396049649 / https://i.imgur.com/Hxbs1q0.png / Nguyễn Hải Đăng
[💵] ➜ MBBANK: 0396049649 / https://imgur.com/NXX9Lnh / Nguyễn Hải Đăng
[💵] ➜ MBBANK: 0396049649 / https://i.imgur.com/2yj1jqY.png / Nguyễn Hồng Phấn
[💵] ➜ TIMO BANK: 9021288475332 / https://i.imgur.com/vTx2DQp.jpg / Nguyễn Hải Đăng
[💵] ➜ ZALO PAY: 0396049649 / https://imgur.com/LBeXzsy / Nguyễn Hải Đăng
[💵] ➜ AGRIBANK: 4810205345666 / https://i.imgur.com/DObUFKB.png / Nguyễn Hồng Phấn

[⚜️]=== 『 PROBLEM 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[❗] ➜ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
[📌] ➜ Hãy đồng hành cùng BOT JRT và mình nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝]➜ Bot được điều hành bởi jrtxtracy`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`${global.configApi.domain}/images/gaixinhvn?apikey=${global.configApi.keyApi}`)).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `[🖥] ➜ 𝗪𝗲𝗯 𝗮𝗽𝗶: https://web-api.jrtxtracy.repl.co/docs/`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`${global.configApi.domain}/video/chill?apikey=${global.configApi.keyApi}`)).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━\n\n[🖥] ➜ 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n[📎] ➜ 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${global.config.PREFIX} ]\n[💓] ➜ 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n[💬] ➜ 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n[👑] ➜ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━\n[⚜️] ➜ 𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀  𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`${global.configApi.domain}/images/siesta?apikey=${global.configApi.keyApi}`)).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("[⚜️] ➜ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 4 || choose < 1) return api.sendMessage("[⚜️] ➜ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
}