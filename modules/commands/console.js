
/*module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "JRT",
    description: "Làm cho console đẹp hơn",
    commandCategory: "Hệ thống admin-bot",
    usages: "console ",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Ảnh, video hoặc kí tự đặc biệt";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "7900FF", "93FFD8", "CFFFDC", "FF5B00", "3B44F6", "A6D1E6", "7F5283", "A66CFF", "F05454", "FCF8E8", "94B49F", "47B5FF", "B8FFF9", "42C2FF", "FF7396"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
  var random4 = job[Math.floor(Math.random() * job.length)]
  var random5 = job[Math.floor(Math.random() * job.length)]
  var random6 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.bold.hex("#" + random4)(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`) + `\n` +chalk.bold.hex("#" + random)(`| ➜ Tên nhóm: ${nameBox}`) + `\n` + chalk.bold.hex("#" + random5)(`| ➜ ID nhóm: ${event.threadID}`) + `\n` + chalk.bold.hex("#" + random6)(`| ➜ Tên người dùng: ${nameUser}`) + `\n` + chalk.bold.hex("#" + random1)(`| ➜ ID người dùng: ${event.senderID}`) + `\n` + chalk.bold.hex("#" + random2)(`| ➜ Nội dung: ${msg}`) + `\n` + chalk.bold.hex("#" + random3)(`| ➜ Thời gian: ${time}`) + `\n` + chalk.bold.hex("#" + random4)(`━━━━━━━━━━━⭐ 𝗝𝗥𝗧 𝗕𝗢𝗧 ⭐━━━━━━━━━━━`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {  
}*/

module.exports.config = {
    name: "console",
    version: "1.0.2",
    hasPermssion: 3,
    credits: "JRT",
    description: "Làm console đẹp hơn",
    commandCategory: "Hệ thống admin-bot",
    usages: "console",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
  const axios = require('axios');
 const fs = require("fs-extra");
    const chalk = require('chalk');
     const moment = require("moment-timezone");
  //const res = await axios.get(`https://sumiproject.space/facebook/timejoine?uid=${event.senderID}`);
  //const finduid = res.data.uid
  //const finddate = res.data.day
  //const findtime = res.data.time
  //const findname = res.data.name
var tracy = moment.tz("Asia/Ho_Chi_Minh").format("HH 𝗴𝗶𝗼̛̀,mm 𝗽𝗵𝘂́𝘁,ss 𝗴𝗶𝗮̂𝘆");
var jrt = moment.tz("Asia/Ho_Chi_Minh").format("𝗡𝗴𝗮̀𝘆:D,𝗧𝗵𝗮́𝗻𝗴:MM,𝗡𝗮̆𝗺:YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  if (!event.body) return;
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "❌ 𝗧𝗲̂𝗻 𝗞𝗵𝗼̂𝗻𝗴 𝗧𝗼̂̀𝗻 𝗧𝗮̣𝗶";
  var jrtxtracy = event.senderID;
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"❗ 𝐀̉𝐧𝐡,𝐕𝐢𝐝𝐞𝐨 𝐤𝐢𝐚 𝐭𝐮̛̣ 𝐝𝐚̣̆𝐜 𝐛𝐢𝐞̣̂𝐭";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "7900FF", "93FFD8", "CFFFDC", "FF5B00", "3B44F6", "A6D1E6", "7F5283", "A66CFF", "F05454", "FCF8E8", "94B49F", "47B5FF", "B8FFF9", "42C2FF", "FF7396"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
  var random4 = job[Math.floor(Math.random() * job.length)]
  var random5 = job[Math.floor(Math.random() * job.length)]
  var random6 = job[Math.floor(Math.random() * job.length)]
  var random7 = job[Math.floor(Math.random() * job.length)]
  var random8 = job[Math.floor(Math.random() * job.length)]
  var random9 = job[Math.floor(Math.random() * job.length)]
  var random10 = job[Math.floor(Math.random() * job.length)]
  var random11 = job[Math.floor(Math.random() * job.length)]
    //console.log(chalk.bold.hex("#" + random)(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`) + `\n` + chalk.bold.hex("#" + random1)(`| ➜ 👥𝗡𝗵𝗼́𝗺: 「${nameBox}」`) + `\n` + chalk.bold.hex("#" + random2)(`| ➜ ⚒️ID nhóm: ${event.threadID}`) + `\n` + chalk.bold.hex("#" + random3)(`| ➜ 📇𝗧𝗲̂𝗻 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴: 「 ${nameUser} 」`) + `\n` + chalk.bold.hex("#" + random4)(`| ➜ 💾𝗟𝗶𝗻𝗸 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: 𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/${jrtxtracy}`) + `\n` + chalk.bold.hex("#" + random4)(`| ➜ ⏳𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${finddate}`) + `\n` + chalk.bold.hex("#" + random4)(`| ➜ 📋𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘁𝗮̣𝗼 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${findtime}`) + `\n` + chalk.bold.hex("#" + random5)(`| ➜ 🔎ID người dùng: ${jrtxtracy}`)+ `\n` + chalk.bold.hex("#" + random7)(`| ➜ 📑𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴: 「 ${msg} 」`) + `\n` + chalk.bold.hex("#" + random8)(`| ➜ ⏰𝗩𝗮̀𝗼 𝗟𝘂́𝗰: ${tracy}`) + `\n` + chalk.bold.hex("#" + random9)(`| ➜ 🗓𝗧𝗵𝘂̛́: ${thu}`) + `\n` + chalk.bold.hex("#" + random10)(`| ➜ 📆${jrt}`) + `\n` + chalk.bold.hex("#" + random11)(`━━━━━━━━━━━⭐ 𝗝𝗥𝗧 𝗕𝗢𝗧 ⭐━━━━━━━━━━━`)); 
  console.log(chalk.bold.hex("#" + random)(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`) + `\n` + chalk.bold.hex("#" + random1)(`| ➜ 👥𝗡𝗵𝗼́𝗺: 「${nameBox}」`) + `\n` + chalk.bold.hex("#" + random2)(`| ➜ ⚒️ID nhóm: ${event.threadID}`) + `\n` + chalk.bold.hex("#" + random3)(`| ➜ 📇𝗧𝗲̂𝗻 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴: 「 ${nameUser} 」`) + `\n` + chalk.bold.hex("#" + random4)(`| ➜ 💾𝗟𝗶𝗻𝗸 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: 𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/${jrtxtracy}`) + `\n` + chalk.bold.hex("#" + random5)(`| ➜ 🔎ID người dùng: ${jrtxtracy}`)+ `\n` + chalk.bold.hex("#" + random7)(`| ➜ 📑𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴: 「 ${msg} 」`) + `\n` + chalk.bold.hex("#" + random8)(`| ➜ ⏰𝗩𝗮̀𝗼 𝗟𝘂́𝗰: ${tracy}`) + `\n` + chalk.bold.hex("#" + random9)(`| ➜ 🗓𝗧𝗵𝘂̛́: ${thu}`) + `\n` + chalk.bold.hex("#" + random10)(`| ➜ 📆${jrt}`) + `\n` + chalk.bold.hex("#" + random11)(`━━━━━━━━━━━⭐ 𝗝𝗥𝗧 𝗕𝗢𝗧 ⭐━━━━━━━━━━━`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
               }