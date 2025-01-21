/*const fs = require("fs"),
      request = require("request"),
      path = __dirname + '/../../includes/handle/usages.json',
      path2 = __dirname + '/cache/diemdanh.json',
      pathDaily = __dirname + "/cache/daily/";

module.exports.config = {
	name: "daily",
	version: "2.0",
	hasPermssion: 0,
	credits: "Nam",
	description: "Điểm danh nhận quà hằng ngày\n daily info => xem thông tin phần quà\n daily 7day => nhận quà bí mật khi tích đủ 7 điểm nhận từ đăng nhập hàng ngày",
	commandCategory: "Tài chính",
	usages: "daily [info / 7day]",
	cooldowns: 5,
  envConfig: {
        cooldownTime: 86400000,
        rewardCoin: 5000,
        rewardExp: 1000,
        rewardUsages: 100
  }
};

module.exports.handleEvent = async function ({ event }) {
  
  let dataDaily = JSON.parse(fs.readFileSync(path2));
  
  const { senderID, body } = event;
  
  var newDate = new Date(), 
      date = newDate.getDay();
    if (date == 1) {
  dataDaily[senderID] = {
                   diemdanh: 0
        }
fs.writeFileSync(path2, JSON.stringify(dataDaily));
    }
  else if (!dataDaily[senderID]) {
    dataDaily[senderID] = {
                    diemdanh: 0
   }
fs.writeFileSync(path2, JSON.stringify(dataDaily));
  }
  },

module.exports.onLoad = () => {
  
  if (!fs.existsSync(pathDaily + "cache", "daily")) fs.mkdirSync(pathDaily, { recursive: true });
  
  if (!fs.existsSync(pathDaily + this.config.name +".png")) request("https://i.imgur.com/7ltbAS1.gif").pipe(fs.createWriteStream(pathDaily + this.config.name +".gif"));
  
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));

  if (!fs.existsSync(path2)) fs.writeFileSync(path2, JSON.stringify({}));
    }
         
module.exports.run = async function({ api, event, args, Currencies }) {
  
  if (!fs.existsSync(pathDaily)) fs.mkdir(pathDaily);
	const listFile = fs.readdirSync(pathDaily);
  
  let dataUser = JSON.parse(fs.readFileSync(path)),
      dataUser2 = JSON.parse(fs.readFileSync(path2));

  const { threadID, messageID, senderID, body} = event, c = this.config.credits, { daily } = global.configModule,
        cooldownTime = daily.cooldownTime,
        rewardCoin = daily.rewardCoin,
        rewardExp = daily.rewardExp,
        rewardUsages = daily.rewardUsages;

var newDate = new Date(), 
      date = newDate.getDay();
  
  if (date == 0) thu = 'Chủ Nhật'
  if (date == 1) thu = 'Thứ Hai'
  if (date == 2) thu = 'Thứ Ba'
  if (date == 3) thu = 'Thứ Tư'
  if (date == 4) thu = 'Thứ Năm'
  if (date == 5) thu = 'Thứ Sáu'
  if (date == 6) thu = 'Thứ Bảy'
  
   if (args[0] == "info") {
      let msg = "";
          msg = `   ===[⚜️] THÔNG TIN PHẦN QUÀ [⚜️] ===\n\n\n`;
      let i = 1;
      for (let i = 1; i < 8; i++) {
        const addMoney = Math.floor(rewardCoin*(1+7/100)**((i == 0 ? 7 : i) - 1)),
              addExp  = Math.floor(rewardExp*(1+7/100)**((i == 0 ? 7 : i) - 1)),
              addUsages = Math.floor(rewardUsages*(1+7/100)**((i == 0 ? 7 : i) - 1));
    
        msg += `${i == 7 ? "Chủ Nhật" : "Thứ " + (i+1)}: 💸 ${addMoney} $ tiền mặt, 🧪${addExp} exp 💎 ${addUsages} Lượt dùng\n\n`;
      }
     
      return api.sendMessage(
        `${msg}\n\n=== [⚜️] HÔM NAY LÀ ${thu} [⚜️] ===`,
      threadID,
        async (error) => {
          if (error)
            return api.sendMessage(
              `[⚜️]→ Đã có lỗi xảy ra khi lấy thông tin phần quà`,
                threadID);
        }, messageID);
    }
  
  let exp = (await Currencies.getData(senderID)).exp,
      money = (await Currencies.getData(senderID)).money,
      data = (await Currencies.getData(senderID)).data || {};
  
  
  const addMoney = Math.floor(rewardCoin*(1+7/100)**((date == 1 ? 7 : date) - 1)),
        addExp = Math.floor(rewardExp*(1+7/100)**((date == 0 ? 7 : date) - 1)),
        addUsages = Math.floor(rewardUsages*(1+7/100)**((date == 1 ? 7 : date) - 1));

  
    if (args[0] == "7day") {
      if (dataUser[senderID].diemdanh <= 6) {
        return api.sendMessage(
          `[⚜️]→ Bạn mới điểm danh được ${dataUser[senderID].diemdanh} ngày thôi!!, đủ 7 ngày liên tục mới nhận được phần quà bí mật nha`,
          threadID);
      }
        
      else if (dataUser[senderID].diemdanh == 7) {
        const money7Day = parseInt(1000000),
              exp7Day = parseInt(10000),
              usages7Day = parseInt(500);
        dataUser[senderID] = {
                   usages: dataUser[senderID].usages + parseInt(usages7Day),
                   diemdanh: 0
        }
fs.writeFileSync(path, JSON.stringify(dataUser));
        
        return api.sendMessage({
     body: "[⚜️]→ Nhận quà đăng nhập 7 ngày thành công!!\n\n"
     + "◆━━━━━•💜•━━━━━◆\n\n"
     + "     🎊Phần quà bao gồm:🎊\n\n"
     + "     💸 " + money7Day.toLocaleString() + " Tiền mặt\n"
     + "     🧪 " + exp7Day.toLocaleString() + " Kinh Nghiệm\n"
     + "     💎 " + usages7Day.toLocaleString() + " Lượt dùng bot\n\n"
     + "◆━━━━━•💜•━━━━━◆\n\n"
     + "[⚜️]→ Tích đủ 7 điểm để nhận quà tiếp",
        attachment: fs.createReadStream(pathDaily+"/"+listFile[Math.floor(Math.random() * listFile.length)])},
        threadID,
     async function (error) {
         await Currencies.setData(senderID, {
               exp: exp + parseInt(exp7Day),
               money: money + parseInt(money7Day)
           });
       
       if (error) {
         return api.sendMessage(
           `[⚜️]→ Đã có lỗi xảy ra khi nhận thưởng!!!`,
             threadID);
           }
        },messageID);
      }
    }
          
  if('Nam'!=c)return;else if(typeof data !== "undefined" && cooldownTime - (Date.now() - (data.dailyCoolDown || 0)) > 0) {

      
    var time = cooldownTime - (Date.now() - data.dailyCoolDown),
        hours = Math.floor((time/(1000*60*60)) % 24),
        minutes = Math.floor((time/1000/60) % 60),
        seconds = Math.floor((time/1000) % 60);
         
     function detect(i) {
         if (i < 10) {
             i = "0" + i;
           }
             return i;
         }
    
     check_hours = detect(hours);
     check_minutes = detect(minutes);
     check_seconds = detect(seconds);
    
		return api.sendMessage(
      `[⚜️]→ Hôm nay bạn đã nhận quà rồi, hãy quay lại sau ${check_hours} giờ ${check_minutes} phút ${check_seconds} giây`,
 threadID,
    async (error) => {
      if (error) 
        return api.sendMessage(
          `[⚜️]→ Đã có lỗi xảy ra khi check thời gian!!!`
        )
    }, messageID);
}
    
 else {
   dataUser[senderID] = {
     usages: dataUser[senderID].usages + parseInt(addUsages),
     diemdanh: dataUser[senderID].diemdanh + parseInt(1)
   }
fs.writeFileSync(path, JSON.stringify(dataUser));
   
   return api.sendMessage({
     body: "[⚜️]→ Điểm danh " + thu + " thành công!!\n\n"
     + "◆━━━━━•💜•━━━━━◆\n\n"
     + "     🎊Phần quà bao gồm:🎊\n\n"
     + "     💸 " + addMoney.toLocaleString() + " Tiền mặt\n"
     + "     🧪 " + addExp.toLocaleString() + " Kinh Nghiệm\n"
     + "     💎 " + addUsages.toLocaleString() + " Lượt dùng bot\n"
     + "      + " + 1 + " Điểm đăng nhập\n\n"
     + "[⚜️]→ Bạn hiện tại có " + dataUser[senderID].diemdanh + " Điểm đăng nhập\n"
     + "dùng " + global.config.PREFIX +"daily 7day " + "để nhận quà\n"
     + "◆━━━━━•💜•━━━━━◆\n\n"
     + " !! GỬI VÀO BANK ĐỂ CÓ LÃI !!\n"
     + " !! ĐIỂM ĐĂNG NHẬP TỰ RESET VÀO THỨ 2",
        attachment: fs.createReadStream(pathDaily+"/"+listFile[Math.floor(Math.random() * listFile.length)])},
        threadID,
     async function (error) {
       data.dailyCoolDown = Date.now();
         await Currencies.setData(senderID, {
               exp: exp + parseInt(addExp),
               money: money + parseInt(addMoney),
               data
           });
    
       if (error) {
         return api.sendMessage(
           `[⚜️]→ Đã có lỗi xảy ra khi nhận thưởng!!!`,
             threadID);
           }
        },messageID);
     }                                     
  }*/
const coinsup = 500000
module.exports.config = {
	name: "daily",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Nhận tiền mỗi 12h",
	commandCategory: "Tài chính",
    cooldowns: 43200000,
    envConfig: {
    cooldownTime: 43200000 
}
  };
module.exports.run = async ({ event, api, Currencies, args }) => {
    const { threadID, messageID, senderID } = event;
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    const cooldownTime = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldownTime - (Date.now() - (data.workTime || 0)) > 0) {
        var time = cooldownTime - (Date.now() - data.workTime),
            seconds = Math.floor( (time/1000) % 60 ),
            minutes = Math.floor( (time/1000/60) % 60 ),
            hours = Math.floor( (time/(1000*60*60)) % 24 );
                 const res = await axios.get("https://docs-api.jrtxtracy.repl.co/images/wallpaper?apikey=JRTvip_2200708248");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
						return api.sendMessage({ body: `[⚜️] ➜ 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 𝐭𝐢𝐞̂̀𝐧, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐮̛𝐨̛̀𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜\n[⚜️]➜ 𝐓𝐡𝐮̛̉ 𝐥𝐚̣𝐢 𝐬𝐚𝐮 ${hours} giờ ${minutes} 𝐩𝐡𝐮́𝐭 ${(seconds < 10 ? "0" : "")}${seconds} 𝐠𝐢𝐚̂𝐲!`,
						 attachment: download }, event.threadID, event.messageID);
}
    else {
        const job = [
            "daily"
        ];
        await Currencies.increaseMoney(event.senderID, parseInt(coinsup));
                 const res = await axios.get("https://docs-api.jrtxtracy.repl.co/images/wallpaper?apikey=JRTvip_2200708248");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
						return api.sendMessage({ body: `[⚜️] ➜ 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 + ${coinsup} VNĐ.\n[⚜️]➜ 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐠𝐚̀𝐲 𝐦𝐨̛́𝐢 𝐭𝐡𝐚̣̂𝐭 𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐯𝐚̀ 𝐯𝐮𝐢 𝐯𝐞̉ 𝐛𝐞̂𝐧 𝐠𝐢𝐚 đ𝐢̣𝐧𝐡 𝐯𝐚̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐚̣̂𝐧.`,
                  attachment: download }, event.threadID, event.messageID);
	}
  return api.sendMessage(reply, threadID, messageID);
}