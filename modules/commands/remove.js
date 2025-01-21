module.exports.config = {
  name: 'remove',
  version: '1.1.1',
  hasPermssion: 2,
  credits: 'adu',
  description: 'Tách nền',
  commandCategory: 'Hệ thống support-bot',
  usages: 'Reply images or url images',
  cooldowns: 2,
  dependencies: {
       'form-data': '',
       'image-downloader': ''
    }
};

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs-extra');
const path = require('path');
const {image} = require('image-downloader');
module.exports.run = async function({
    api, event, args
}){
    try {
      var tpk = `🖼️=== [ 𝗧𝗔́𝗖𝗛 𝗕𝗔𝗖𝗞𝗚𝗥𝗢𝗨𝗡𝗗 ] ===🖼️
━━━━━━━━━━━━━━━
[⚜️]➜ 𝗧𝗮́𝗰𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗲̂̀𝗻 𝗰𝘂̉𝗮 𝗮̉𝗻𝗵 𝗯𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗿𝗲𝗽𝗹𝘆`;
        if (event.type !== "message_reply") return api.sendMessage("[⚜️]➜ Bạn phải reply một ảnh nào đó", event.threadID, event.messageID);
        if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("[⚜️]➜ Bạn phải reply một ảnh nào đó", event.threadID, event.messageID);
        if (event.messageReply.attachments[0].type != "photo") return api.sendMessage("[⚜️]➜ Đây không phải là image", event.threadID, event.messageID);

        const content = (event.type == "message_reply") ? event.messageReply.attachments[0].url : args.join(" ");
        const KeyApi = ["jYsTXJ2coyhWiHgSXPb7v5KR", "d5wLT4pa1SbHitzoJf6CBWLL", "ZTTLpCg531QVUuutWyDc8fGj", "Fpf7PsaMp1K3PHf6kWkxQBub", "8TMkQw5zUPMpJWEu1126swc4"]
        const inputPath = path.resolve(__dirname, 'cache', `photo.png`);
         await image({
        url: content, dest: inputPath
    });
        const formData = new FormData();
        formData.append('size', 'auto');
        formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
        axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
                ...formData.getHeaders(),
                'X-Api-Key': KeyApi[Math.floor(Math.random() * KeyApi.length)],
            },
            encoding: null
        })
            .then((response) => {
                if (response.status != 200) return console.error('Error:', response.status, response.statusText);
                fs.writeFileSync(inputPath, response.data);
                return api.sendMessage({body:tpk, attachment: fs.createReadStream(inputPath)},event.threadID, () => fs.unlinkSync(inputPath));
            })
            .catch((error) => {
                return console.error('Request failed:', error);
            });
     } catch (e) {
        console.log(e)
        return api.sendMessage(`[⚜️]➜ Lỗi rồi hãy kiểm tra key api!!!`, event.threadID, event.messageID);
  }
};