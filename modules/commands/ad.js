//6628568379%7Cc1e620fa708a1d5696fb991c1bde5662
module.exports.config = {
    "name": "ad",
    "version": "1.0.0",
    "hasPermssion": 0,
    "credits": "DC-Nam",
    "description": "Kiểm tra thông tin admin .",
    "commandCategory": "Thông tin",
    "usages": "ad",
    "cooldowns": 5,
    "dependencies": {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = [
"https://i.imgur.com/xhAQLw3.mp4"
];
var callback = () => api.sendMessage({body:`[⚜️]=== 『 INFORMATION ADMIN 』 ===[⚜️]
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

[👉] ➜ Information: https://bio.link/nhdjrt262
[☎] ➜ SĐT & Zalo: 0396049649
[🌐] ➜ Facebook: https://www.facebook.com/NHD.JRT.262
[⛱] ➜ TikTok: https://www.tiktok.com/@hd.jrt03
[⛲] ➜ Instagram: https://www.instagram.com/hd.jrt.2k3
[🔎] ➜ Twitter: https://twitter.com/JRTOfficial_03
[📋] ➜ Telegram: https://t.me/nhdjrt262
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

[📝] ➜ Bot được điều hành bởi JRT`,

    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 

    fs.unlinkSync(__dirname + "/cache/1.png"));  

      return request(

        encodeURI(`https://graph.facebook.com/${100033478361032}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(

fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

       };