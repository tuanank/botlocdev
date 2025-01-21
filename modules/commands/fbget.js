module.exports.config = {
  name: "fbget",
  version: "1.1.12",
  hasPermssion: 0,
  credits: "JRT",
  description: "Lấy video/music từ facebook",
  commandCategory: "Phương tiện",
  usages: "fbget",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

const axios = require("axios");
const fbTools = {
  getVideoUrl: async (url) => {
    const res = await axios.get("https://apipremium-thanhali.thanhali.repl.co/fbdownload?apikey=ThanhAliVip_1234567890&url=" + encodeURIComponent(url));
    return res.data.data.medias[res.data.data.medias.length - 1].url;
  }
};

module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/cache/`;
  if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, {
    recursive: true
  });
  if (!fs.existsSync(dirMaterial + "facebook.jpg")) request("https://imgur.com/AKrWm2g.jpg").pipe(fs.createWriteStream(dirMaterial + "facebook.jpg"));
}
module.exports.run = async function ({
  event, api, args, Users
}) {
  const fs = require("fs");
  const t = module.exports.config.name
  const p = global.config.PREFIX
  if (!args[0])
    return api.sendMessage({
    body: `=== 『 FACEBOOK GET 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ ${p}${t} video < sao chép liên kết >\n[⚜️] ➜ ${p}${t} music < sao chép liên kết >`, attachment: fs.createReadStream(__dirname + `/cache/facebook.jpg`)
  }, event.threadID, event.messageID);
  switch (args[0].toLowerCase()) {
    case "video":
      const link = args[1];
      try {
        // console.log('hi')
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        const request = global.nodemodule["request"];
        const {
          threadID,
          messageID,
          senderID,
          body
        } = event;
        const res = await fbTools.getVideoUrl(link);
        var url = res;
        var time = res.time;

        const ress = await axios.get(url, {
          responseType: "stream",
        })

        ress.data.path = global.utils.randomString(5) + '.mp4';
        // console.log('succes');

        api.sendMessage({
          attachment: ress.data
        }, event.threadID, event.messageID);

        // return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname + '/cache/videofb.mp4')).on('close', () => callback());
      }
      catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi...", event.threadID);
      }
      break;

    case "music":
      try {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        const request = global.nodemodule["request"];
        const {
          threadID,
          messageID,
          senderID,
          body
        } = event;
        const link = args[1];
        const res = await fbTools.getVideoUrl(link);
        // console.log(res)
        var url = res;
        var time = res.time;
        var callback = () => api.sendMessage({
          attachment: fs.createReadStream(__dirname + "/cache/musicfb.mp3")
        }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/musicfb.mp3"), event.messageID);
        return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname + '/cache/musicfb.mp3')).on('close', () => callback());
      }
      catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi...", event.threadID);
      }
      break;
    default:
      break;
  }
};