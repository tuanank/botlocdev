module.exports.config = {
	name: "uptrb",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "L.V. Bằng",//mod them by tpk
	description: "treo bot trên uptimerobot.com ngay tại messenger :>",
	commandCategory: "Hệ thống admin-bot",
	usages: "[text/reply]",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "upt.jpeg")) request("https://i.imgur.com/oNVUfxO.jpeg").pipe(fs.createWriteStream(dirMaterial + "upt.jpeg"));
}
module.exports.run = async function({ api, event, args, client }) {
  const fs = require("fs");
    var name = Date.now();
    var url = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    var lvbang = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	  if(url.match(lvbang) == null) return api.sendMessage(`[⚜️]➜ Vui lòng nhập/reply url repls cần treo!`, event.threadID, event.messageID);
    var request = require("request");
    var options = { method: 'POST',
  url: 'https://api.uptimerobot.com/v2/newMonitor',
  headers:
   { 'content-type': 'application/x-www-form-urlencoded',
     'cache-control': 'no-cache' },
  form:
   { api_key: 'u2257658-6431a0eb0234e48fc80666c6',
     format: 'json',
     type: '1',
     url: url,
     friendly_name: name } };
   /////////////////////////////////////////  //////Phần điều kiện và gửi tin nhắn//// ///////////////////////////////////////        
request(options, function (error, response, body) {
   if (error) return api.sendMessage(`[ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 ] → Lỗi rồi !!!`, event.threadID, event.messageID );
   if(JSON.parse(body).stat == 'fail') return api.sendMessage(`[ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 ] → Đã tồn tại url '${url}' trên hệ thống UptimeRobot !!!`, event.threadID, event.messageID );
  if(JSON.parse(body).stat == 'success')
 return
api.sendMessage({body: `=====「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」=====
━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝘁𝗿𝗲𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗟𝗶𝗻𝗸 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘃𝗮̀𝗼 𝘀𝗲𝘃𝗲𝗿 𝘂𝗽𝘁𝗶𝗺𝗲𝗿𝗼𝗯𝗼𝘁.𝗰𝗼𝗺\n[⚜️]➜ 𝗟𝗶𝗻𝗸 𝘃𝘂̛̀𝗮 𝘁𝗵𝗲̂𝗺: ${url}`, attachment: fs.createReadStream(__dirname + `/noprefix/upt.jpeg`)}, event.threadID, event.messageID);
});
                                    }