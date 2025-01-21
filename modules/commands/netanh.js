module.exports.config = {
  name: "netanh",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Makoto",//mod thêm by tpk
  description: "",
  commandCategory: "Hệ thống support-bot",
  usages: "reply ảnh",
  cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "tpkh.jpeg")) request("https://i.imgur.com/dlgbY3k.jpeg").pipe(fs.createWriteStream(dirMaterial + "tpkh.jpeg"));
}
  const axios = require('axios')
  const fs =require('fs')
function base64_encode(file) {
  try {
    var bitmap = fs.readFileSync(__dirname + file);
    var d = (bitmap).toString('base64')
    return d
  } catch (e) { console.log(e) }
}
module.exports.run = async ({ api, event, Threads, args }) => {

if (event.type == "message_reply") {
  var d = event.messageReply.attachments[0].url
  //const base64 =  await getbase64
  const getImg = (await axios.get(d, { responseType: 'arraybuffer' })).data;
  var img = `${event.senderID}` + ".png"
  fs.writeFileSync(__dirname + '/cache/' + img, Buffer.from(getImg, 'utf-8'));
  fs.createReadStream(__dirname + '/cache/' + img)
  const oix = base64_encode("/cache/" + img)
  const resp = await axios.post('https://upscaler.zyro.com/v1/ai/image-upscaler',{
    image_data: 'data:image/jpeg;base64,' + oix
  })
  var character = 'ABCDKCCzwKyY9rmBJGu48FrkNMro4AWtCkc1flmnopqrstuvwxyz0123456789';
  var random = '';
  var number = 32;
  for (var i = 0; i < number; i++) {
    random += character.charAt(Math.floor(Math.random() * character.length));
  }
  var base64m = resp.data.upscaled;
  const opx = (await axios.post(`${global.configApi.upanh}/uploadFile`,{
  code: random,
data: base64m,
type: "image/jpeg",
  })).data
  return api.sendMessage({body: `🌸====「 𝗥𝗘𝗠𝗜𝗡𝗜 」 ====🌸\n━━━━━━━━━━━━━━\n[🔰] ➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗰𝗵𝗼 𝗯𝗮̣𝗻 𝗮̂́𝗻 𝘃𝗮̀𝗼 𝗹𝗶𝗻𝗸 𝗯𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶 𝘃𝗮̀ 𝘅𝗲𝗺 ${global.configApi.upanh}/${opx.link}\n\n[⚜️] ➜ 𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗱𝗼𝘄𝗹𝗼𝗮𝗱 𝘃𝗲̂̀ 𝘁𝗵𝗶̀ 𝗹𝗲̂𝗻 𝗴𝗼𝗼𝗴𝗹𝗲 𝗴𝗶𝘂̛̃ 𝘃𝗮̀𝗼 𝗮̉𝗻𝗵 𝘃𝗮̀ 𝘁𝗮̉𝗶 🔗`,attachment: fs.createReadStream(__dirname + `/noprefix/tpkh.jpeg`)}, event.threadID, (() => {
    fs.unlinkSync(__dirname + "/cache/" + img)
  }))
} else {
  var d = args[0]
  //const base64 =  await getbase64
  const getImg = (await axios.get(d, { responseType: 'arraybuffer' })).data;
  var img = `${event.senderID}` + ".png"
  fs.writeFileSync(__dirname + '/cache/' + img, Buffer.from(getImg, 'utf-8'));
  fs.createReadStream(__dirname + '/cache/' + img)
  const oix = base64_encode("/cache/" + img)
  const resp = await axios.post('https://upscaler.zyro.com/v1/ai/image-upscaler',{
    image_data: 'data:image/jpeg;base64,' + oix
  })
  var character = 'ABCDKCCzwKyY9rmBJGu48FrkNMro4AWtCkc1flmnopqrstuvwxyz0123456789';
  var random = '';
  var number = 32;
  for (var i = 0; i < number; i++) {
    random += character.charAt(Math.floor(Math.random() * character.length));
  }
  var base64m = resp.data.upscaled;
  const opx = (await axios.post(`${global.configApi.upanh}/uploadFile`,{
  code: random,
data: base64m,
type: "image/jpeg",
  })).data
  return api.sendMessage({
    body: `🌸====「 𝗥𝗘𝗠𝗜𝗡𝗜 」 ====🌸\n━━━━━━━━━━━━━━\n[🔰] ➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗰𝗵𝗼 𝗯𝗮̣𝗻 𝗮̂́𝗻 𝘃𝗮̀𝗼 𝗹𝗶𝗻𝗸 𝗯𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶 𝘃𝗮̀ 𝘅𝗲𝗺 ${global.configApi.upanh}/${opx.link}\n\n[⚜️] ➜ 𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗱𝗼𝘄𝗹𝗼𝗮𝗱 𝘃𝗲̂̀ 𝘁𝗵𝗶̀ 𝗹𝗲̂𝗻 𝗴𝗼𝗼𝗴𝗹𝗲 𝗴𝗶𝘂̛̃ 𝘃𝗮̀𝗼 𝗮̉𝗻𝗵 𝘃𝗮̀ 𝘁𝗮̉𝗶 🔗`, attachment: fs.createReadStream(__dirname + `/noprefix/tpkh.jpeg`)}, event.threadID, (() => {
    fs.unlinkSync(__dirname + "/cache/" + img)
  }))
}
}