module.exports.config = {
    name: 'autosend',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam', // Bok idea thời tiết
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống support-bot',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '6:00:00 AM',
    message: ['\n{abc}']
},
    {
      timer: '6:10:00 AM',
    message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎉] ➜ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉😋\n[💬] ➜ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:「{thinh}」\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰: {hours} 𝗴𝗶𝗼̛̀ {minutes} 𝗽𝗵𝘂́𝘁 {seconds} 𝗴𝗶𝗮̂𝘆\n[⚜️] ➜ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
    {
      timer: '7:30:00 AM',
    message: ['🔔====𝗧𝗛𝗢̂𝗡𝗚 𝗕𝗔́𝗢====🔔\n━━━━━━━━━━━━━━━━━━\n💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n[⚜️] ➜ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 30𝗸/𝘁𝗵\n[⚜️] ➜ Đ𝘂̛𝗼̛̣𝗰 𝘁𝗮𝗴 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗯𝗼𝘅 𝗸𝗲̂̉ 𝗰𝗮̉ 𝗱𝘂̛𝗼̛́𝗶 𝟭5 𝗻𝗴𝘂̛𝗼̛̀𝗶\n[⚜️] ➜ 𝗗𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗔𝗱𝗺𝗶𝗻\n━━━━━━━━━━━━━━━━━━\n⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️\n[⚜️] ➜ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 30 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n[⚜️] ➜ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶\n━━━━━━━━━━━━━━━━━━\n[⚜️] ➜ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
    {
     timer: '11:00:00 PM',
        message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎉] ➜ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻😴\n[💬] ➜ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:「{thinh}」\n━━━━━━━━━━━━━━━━\n[🎉] ➜ 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰: {hours} 𝗴𝗶𝗼̛̀ {minutes} 𝗽𝗵𝘂́𝘁 {seconds} 𝗴𝗶𝗮̂𝘆\n[⚜️] ➜ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
      },
             {
     timer: '00:00:00 PM',
        message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎉] ➜ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻😴\n[💬] ➜ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:「{thinh}」\n━━━━━━━━━━━━━━━━\n[🎉] ➜ 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰: {hours} 𝗴𝗶𝗼̛̀ {minutes} 𝗽𝗵𝘂́𝘁 {seconds} 𝗴𝗶𝗮̂𝘆\n[⚜️] ➜ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
      },
        {
     timer: '11:30:00 AM',
        message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎉] ➜ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝘃𝘂𝗶 𝘃𝗲̉😋\n[💬] ➜ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:「{thinh}」\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰: {hours} 𝗴𝗶𝗼̛̀ {minutes} 𝗽𝗵𝘂́𝘁 {seconds} 𝗴𝗶𝗮̂𝘆\n[⚜️] ➜ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
        },
        {
          timer: '6:00:00 PM',
    message: ['\n{abc}']
},
    {
          timer: '2:30:00 PM',
    message: ['🔔====𝗧𝗛𝗢̂𝗡𝗚 𝗕𝗔́𝗢====🔔\n━━━━━━━━━━━━━━━━━━\n💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n[⚜️] ➜ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 30𝗸/𝘁𝗵\n[⚜️] ➜ Đ𝘂̛𝗼̛̣𝗰 𝘁𝗮𝗴 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗯𝗼𝘅 𝗸𝗲̂̉ 𝗰𝗮̉ 𝗱𝘂̛𝗼̛́𝗶 𝟭5 𝗻𝗴𝘂̛𝗼̛̀𝗶\n[⚜️] ➜ 𝗗𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗔𝗱𝗺𝗶𝗻\n━━━━━━━━━━━━━━━━━━\n⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️\n[⚜️] ➜ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 30 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n[⚜️] ➜ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶\n━━━━━━━━━━━━━━━━━━\n[⚜️] ➜ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
             {
      timer: '8:00:00 AM',
    message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎉] ➜ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉😋\n[💬] ➜ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:「{thinh}」\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰: {hours} 𝗴𝗶𝗼̛̀ {minutes} 𝗽𝗵𝘂́𝘁 {seconds} 𝗴𝗶𝗮̂𝘆\n[⚜️] ➜ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
    {
        timer: '1:00:00 PM',
        message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🎉] ➜ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n[💬] ➜ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:「{thinh}」\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰: {hours} 𝗴𝗶𝗼̛̀ {minutes} 𝗽𝗵𝘂́𝘁 {seconds} 𝗴𝗶𝗮̂𝘆\n[⚜️] ➜ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
    },
            {
        timer: '2:00:00 AM',
        message: ['\n{abc}']
    }];
module.exports.onLoad = o => setInterval(async() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())){
  const axios = require('axios');
const time = process.uptime() + global.config.UPTIME,
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
  var msg = r(á.message);
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Hồ Chí Minh')}`);
    var abc =`⛅===「 𝗧𝗕 𝗧𝗵𝗼̛̀𝗶 𝗧𝗶𝗲̂́𝘁 」===⛅\n━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗖𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝘁𝗵𝗼̛̀𝗶 𝘁𝗶𝗲̂́𝘁 𝘁𝗮̣𝗶 ${res.data[0].location.name}\n[⚜️] ➜ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.day} ${res.data[0].current.date}\n[⚜️] ➜ 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n[⚜️] ➜ 𝗠𝗼̂ 𝘁𝗮̉: ${res.data[0].current.skytext}\n[⚜️] ➜ đ𝗼̣̂ 𝗮̂̉𝗺: ${res.data[0].current.humidity}\n[⚜️] ➜ 𝗛𝘂̛𝗼̛́𝗻𝗴 𝗴𝗶𝗼́: ${res.data[0].current.winddisplay}\n[⚜️] ➜ 𝗚𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.observationtime}`;
    msg = msg.replace(/{abc}/,abc);
msg = msg.replace(/{hours}/g, hours)
  msg = msg.replace(/{minutes}/g, minutes)
  msg = msg.replace(/{seconds}/g, seconds)
    msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await axios.get(`${global.configApi.domain}/saying/hearing?apikey=${global.configApi.keyApi}`)).data.data)
            msg = {
                body: msg, attachment: (await axios.get((await axios.get(`${global.configApi.domain}/images/anime?apikey=${global.configApi.keyApi}`)).data.data, {
                    responseType: 'stream'
                })).data
            };
   global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
    };
}, 1000);

module.exports.run = async o => {
  try{
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const { api, event, args } = o;
	const { threadID, messageID } = event;
  var bok = args.join(" ");
 if (!bok) return api.sendMessage("[⚜️] ➜ Nhập tỉnh/tp cần xem thời tiết", threadID);
        const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
        const bokk = res.data[0].forecast;
        var text = `[⚜️] ➜ Thời tiết của: ${bok} vào các ngày`;
        for (let i = 0; i < 5; i++) {
            text += `\n${i + 1}. ${bokk[i].day} ${bokk[i].date}\n[⚜️] ➜ Nhiệt độ dự báo: từ ${bokk[i].low} đến ${bokk[i].high}\n[⚜️] ➜ Mô tả: ${bokk[i].skytextday}\n[⚜️] ➜ Tỷ lệ mưa: ${bokk[i].precip}\n`
        };
  api.sendMessage(text, threadID, messageID)
  }catch(err){api.sendMessage(`${err}`, threadID)}
    }