module.exports.config = {
  name: "gheplove",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "M-Drasew", 
  commandCategory: "Tình yêu", 
  usages: "gheplove [girl/boy]", 
  cooldowns: 5
};
module.exports.run = async ({ api, event, handleReply, Users, Currencies }) => {
const { threadID, messageID, senderID } = event;
var data = await Currencies.getData(event.senderID);
var money = data.money
if( money < 100000) api.sendMessage(`[⚜️]➜ Bạn muốn ghép đôi à kiếm đủ 100000 đô bot mới ghép cho nhé\n[⚜️]➜ Số tiền bạn hiện có: ${money} đô`,threadID,messageID)
  else {
  Currencies.setData(event.senderID, options = {money: money - 100000})
	return api.sendMessage(`[⚜️]=== 『 GHÉP LOVE 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ Chuẩn bị ghép đôi thành công!\n\n[⚜️]➜ Reply tin nhắn này chọn giới tính người mà bạn muốn ghép đôi "Boy hoặc Girl"\n\n[⚜️]➜ Lưu ý mỗi lần ghép đôi mất 100000 đô`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "ghep",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
     })
   }
}
module.exports.handleReply = async ({ api, event, handleReply, Users, Currencies }) => {
var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const tile = (Math.random() * 50)+50;
const { threadID, messageID, senderID } = event;
const random = ["Chúc 2 bạn trăm năm hạnh phúc", "Chúc 2 bạn hạnh fuck", "Chúc 2 bạn hạnh phúc.!"];
    switch(handleReply.type) {
        case "ghep": {
          switch(event.body) {
            case "boy":{
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`[⚜️]➜ Đang tìm đối tượng phù hợp với bạn!....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `[⚜️]=== 『 PAIRING SUCCESS 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[💟]➜ ${random[Math.floor(Math.random() * random.length)]}\n[💗]➜ Tỉ lệ hợp đôi: ${tile.toFixed(2)}%\n`+n+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
          case "girl": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`[⚜️]➜ Đang tìm đối tượng phù hợp với bạn!....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `[⚜️]=== 『 PAIRING SUCCESS 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[🎉]➜ ${random[Math.floor(Math.random() * random.length)]}\n[🔔]➜ Tỉ lệ  hợp đôi: ${tile.toFixed(2)}%\n`+n+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
        }
      }
    }
}