module.exports.config = {
    name: 'autoxsmb',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Kiểm tra xổ số miền Bắc',
    commandCategory: 'Tin tức',
    usages: '[... | ngày/tháng/năm]',
    cooldowns: 3
};
const {
    get
} = require('axios');
module.exports.onLoad = o => {
    if (!!global.xsmb_setinterval) clearInterval(global.xsmb_setinterval);
   global.xsmb_setinterval = setInterval(async() => {
    if ('5:30:00 PM' == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim()) {
        const {
            data
        } = (await get(`https://api-v2.jrtxtracy.repl.co/v2/tien-ich/check-xsmb.json`)).data;
        global.data.allThreadID.forEach(i => o.api.sendMessage(data[0].message, i));
    };
  }, 1000);
};
module.exports.run = async function ({ api, event, args }) {
	const axios = require('axios');
	const moment = require('moment-timezone');
	const currentHour = moment.tz("Asia/Ho_Chi_Minh").format("HH");
	const currentMinute = moment.tz("Asia/Ho_Chi_Minh").format("mm");

	let dayGetResult;
	if (currentHour > 18 || (currentHour == 18 && currentMinute >= 15))
		dayGetResult = moment.tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY");
	else
		dayGetResult = moment.tz("Asia/Ho_Chi_Minh").subtract(1, 'days').format("DD-MM-YYYY");
	if (args[0] && moment.tz(args[0], "DD-MM-YYYY", true, "Asia/Ho_Chi_Minh").isValid())
		dayGetResult = moment.tz(args[0], "DD-MM-YYYY", true, "Asia/Ho_Chi_Minh").format("DD-MM-YYYY");

	const response = await axios.get("https://apis-jrt.jrtxtracy.repl.co/xsmb?date=" + dayGetResult);
	const data = response.data;

	api.sendMessage(`=== [ Kết quả xổ số miền Bắc ] ===\n`
    + `\n[⚜️] ➜ Ngày ${data.date}`              
		+ `\n\n➜ Mã giải đặc biệt: ${data.maDB.join('  -  ')}`
		+ `\n➜ Giải đặc biệt: ${data.giaiDB[0]}`
		+ `\n➜ Giải nhất: ${data.giaiNhat[0]}`
		+ `\n➜ Giải nhì: ${data.giaiNhi.join(" - ")}`
		+ `\n➜ Giải ba: ${data.giaiBa.join(" - ")}`
		+ `\n➜ Giải tư: ${data.giaiTu.join(" - ")}`
		+ `\n➜ Giải năm: ${data.giaiNam.join(" - ")}`
		+ `\n➜ Giải sáu: ${data.giaiSau.join(" - ")}`
		+ `\n➜ Giải bảy: ${data.giaiBay.join(" - ")}`, event.threadID, event.messageID);
};