/*module.exports.config = {
    name: "goiprefix",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Xem prefix của BOT",
    commandCategory: "Gọi bot",
    usages: "goiprefix",
    cooldowns: 5
}, module.exports.handleEvent = async ({
    event: e,
    api: a,
    Threads: n
}) => {
    var {
        threadID: o,
        messageID: r,
        body: s,
        senderID: t
    } = e;
    if ("ManhG" != this.config.credits) return a.sendMessage("Sai credits!", o, r);

    function i(e) {
        a.sendMessage(e, o, r)
    }
    var d = (await n.getData(o)).data;
    const dateNow = Date.now();
    const fast = global.nodemodule["fast-speedtest-api"];
    const speedTest = new fast({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
        verbose: false,
        timeout: 10000,
        https: true,
        urlCount: 5,
        bufferSize: 8,
        unit: fast.UNITS.Mbps
    });
    const resault = await speedTest.getSpeed();
    var tocdo = resault + " Mbps";
    const p = global.data.threadData.get(parseInt(o)) || {};
    ["prefix", "mprefix", "JRT", "dấu lệnh", "prefix của bot là gì", "daulenh", "jrt"].forEach((e => {
        let a = e[0].toUpperCase() + e.slice(1);
        if (s === e.toUpperCase() | s === e | a === s) {
            const e = p.PREFIX || global.config.PREFIX;
            return null == d.PREFIX ? i(`[⚜️]=== 『 GỌI PREFIX 』 ===[⚜️]\n━━━━━━━━━━━━━━━━\n[⚜️]➜ Prefix BOT : [ ${e} ]\n[⚜️]➜ Prefix BOX : [ ` + d.PREFIX + ` ]\n[⚜️]➜ Ping : ${Date.now() - dateNow}ms` + `\n[⚜️]➜ Tốc Độ Load : ${tocdo}`) : i(`[⚜️]➜ Prefix BOT : [ ${e} ]\n[⚜️]➜ Prefix BOX : [ ` + d.PREFIX + ` ]\n[⚜️]➜ Ping : ${Date.now() -dateNow}ms` + `\n[⚜️]➜ Tốc Độ Load : ${tocdo}`)
        }
    }))
}, module.exports.run = async ({
    event: e,
    api: a
}) => a.sendMessage("[⚜️]➜ Đây là noprefix !!!!!!", e.threadID);*/

module.exports.config = {
    name: "goiprefix",
      version: "1.0.1",
    hasPermssion: 0,
    credits: "Vihoo", 
    description: "no prefix",
    commandCategory: "Gọi bot",
    usages: "goiprefix",
      cooldowns: 0
  };
  module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
  const moment = require("moment-timezone"); 
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
    if (!event.body) return;
    var { threadID, messageID } = event;
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
    const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
    if (event.body.toLowerCase().indexOf("prefix") == 0) {
      //getPrefix
      const threadSetting = (await Threads.getData(String(threadID))).data || {};
      const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
      const timeStart = Date.now();
      const fast = global.nodemodule["fast-speedtest-api"];
  const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
	const ketqua = await speedTest.getSpeed();
      var tocdo = ketqua + " Mbps";
    const admins = global.config.ADMINBOT;
      const namebot = config.BOTNAME;
      const { commands } = global.client;
    var i = 1;
    var msg = [];
    var msg = []
      for(var a of admins) {
      if (parseInt(a)) {
      var name = await Users.getNameUser(a);
        msg.push(`${i++}. ${name}`);
      }
      }
      const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
		axios.get(`${global.configApi.domain}/images/anime?apikey=${global.configApi.keyApi}`).then(res => {
		let callback = function () {
					api.sendMessage({
						body : `=====「 𝗣𝗥𝗘𝗙𝗜𝗫 」 =====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n[⚜️] ➜ 𝗧𝗲̂𝗻: ${global.config.BOTNAME}\n[⏳] ➜ 𝐁𝐎𝐓 𝐉𝐑𝐓 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜: ${hours} : ${minutes} : ${seconds}\n[🖤] ➜ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴: ${global.config.PREFIX}\n[❤️] ➜ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘅: ${prefix}\n[✅] ➜ 𝗕𝗼𝘁 𝗵𝗶𝗲̣̂𝗻 𝗱𝗮𝗻𝗴 𝗰𝗼́: ${commands.size} - 𝗟𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n[☠️] ➜ 𝗕𝗼𝘅: ${threadname}\n[🔎] ➜ 𝗨𝗜𝗗 𝗯𝗼𝘅: ${event.threadID}\n[🌧️] ➜ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n[⚒️] ➜ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n[⚙️] ➜ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${trinhtrang}\n[🌸] ➜ 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n[📀] ➜ Tốc Độ Load : ${tocdo}\n[⏱️] ➜ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀:\n${thu} || ${gio}`, attachment: fs.createReadStream(__dirname + '/cache/gaidep.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/gaidep.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/gaidep.jpg')).on("close", callback);
			})
}
  };
  module.exports.run = () => {};