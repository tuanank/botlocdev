module.exports.config = {
    name: "ảnh",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "JRT",
    description: "Xem tất cả các ảnh trên bot",
    commandCategory: "Random-img",
    usages: "ảnh + reply số thứ tự",
    cooldowns: 0,
    envConfig: {
      cooldownTime: 0
    }
  };
  module.exports.run = async function ({ event, api , args, Users}){
    const fs = require("fs");
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["Sexy", "Gái nga", "Ganyu", "Twitter", "LGBT", "Loli", "Blackpink", "Tát", "Wallpaper", "Trai", "Jack", "Nude", "Instagram", "Kiss", "Ngực", "Meme", "Hentai", "Gái", "Mông", "Cosplay", "Kurumi", "Liên quân", "Lucy", "Sagiri", "Chitanda", "Rem", "Anime", "Naughty", "Wibu", "Beo", "Ausand", "Shiba", "Khánh Huyền", "Ngọc Trinh", "Linh Ngọc Đàm", "Jimmy", "Lê Bống", "Sex", "Độ Mixi", "Cặp đôi", "Streamer Hanna", "Nobra", "Gái Sexy", "Gái Xinh", "Trai đẹp", "Background 4K", "Anime Hot", "Gái Japan", "Gái China", "Hololive", "Hot Twitter", "Hot Instagram", "Gái VSBG", "Ảnh Phan Trần Anh Tâm", "Ảnh Sex 18+", "Japan", "VSBG Hot"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 10;
    var numPage = Math.ceil(b / limit);
    var msg = ``;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += ``;
    }
    msg += `=== 『 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔̉𝗡𝗛 & 𝗩𝗜𝗗𝗘𝗢 』 ===\n━━━━━━━━━━━━━━━━\n=== 𝗜𝗠𝗔𝗚𝗘 𝗔𝗡𝗜𝗠𝗘 ===\n━━━━━━━━━━━━━━━━\n𝟭. 𝗔𝗻𝗶𝗺𝗲\n𝟮. 𝗔𝗻𝗶𝗺𝗲 𝗠𝗲𝗺𝗲\n𝟯. 𝗔𝗻𝗶𝗺𝗲 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 𝟮\n𝟰. 𝗔𝘃𝗮𝘁𝗮𝗿 𝗔𝗻𝗶𝗺𝗲\n𝟱. 𝗖𝗮̣̆𝗽 đ𝗼̂𝗶\n𝟲. 𝗧𝗼𝗸𝘆𝗼 𝗥𝗲𝘃𝗲𝗻𝗴𝗲𝗿\n𝟳. 𝗔𝗾𝘂𝗮\n𝟴. 𝗟𝗼𝗹𝗶\n𝟵. 𝗟𝗼𝗹𝗶𝗰𝗼𝗻\n𝟭𝟬. 𝗟𝘂𝗰𝘆\n𝟭𝟭. 𝗠𝗶𝗿𝗮𝗶\n𝟭𝟮. 𝗥𝗲𝗺\n𝟭𝟯. 𝗦𝗮𝗴𝗶𝗿𝗶\n𝟭𝟰. 𝗦𝗶𝗲𝘀𝘁𝗮\n𝟭𝟱. 𝗨𝗺𝗮𝗿𝘂\n━━━━━━━━━━━━━━━━\n=== 𝗜𝗠𝗔𝗚𝗘 𝗛𝗨𝗠𝗔𝗡\n━━━━━━━━━━━━━━━━\n𝟭𝟲. 𝗖𝗼𝘀𝗽𝗹𝗮𝘆\n𝟭𝟳. 𝗚𝗮́𝗶 𝗡𝗵𝗮̣̂𝘁\n𝟭𝟴. 𝗚𝗮́𝗶 𝗫𝗶𝗻𝗵 𝗩𝗡\n𝟭𝟵. 𝗚𝗮́𝗶 𝗫𝗶𝗻𝗵\n𝟮𝟬. 𝗝𝗮𝗰𝗸 𝟵𝟳\n𝟮𝟭. 𝗝𝗶𝗺𝗺𝘆\n𝟮𝟮. 𝗞𝗵𝗮́𝗻𝗵 𝗛𝘂𝘆𝗲̂̀𝗻\n𝟮𝟯. 𝗟𝗲̂ 𝗕𝗼̂́𝗻𝗴\n𝟮𝟰. 𝗡𝗴𝗼̣𝗰 𝗧𝗿𝗶𝗻𝗵\n𝟮𝟱. 𝗧𝗿𝗮𝗶 Đ𝗲̣𝗽\n━━━━━━━━━━━━━━━━\n=== 𝗜𝗠𝗔𝗚𝗘 𝗖𝗔𝗥𝗧𝗢𝗢𝗡 ===\n━━━━━━━━━━━━━━━━\n𝟮𝟲. 𝗚𝗵𝗼𝘀𝘁\n𝟮𝟳. 𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝗡𝗲𝘁𝘄𝗼𝗿𝗸\n𝟮𝟴. 𝗟𝗶𝗲̂𝗻 𝗤𝘂𝗮̂𝗻\n𝟮𝟵. 𝗡𝗲̂̀𝗻 Đ𝗶𝗲̣̂𝗻 𝗧𝗵𝗼𝗮̣𝗶\n𝟯𝟬. 𝗪𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿\n━━━━━━━━━━━━━━━━\n=== 𝗜𝗠𝗔𝗚𝗘 𝗡𝗦𝗙𝗪 ===\n━━━━━━━━━━━━━━━━\n𝟯𝟭. 𝗔𝘂𝘀𝗮𝗻𝗱\n𝟯𝟮. 𝗕𝘂𝘁𝘁𝗲𝗿\n𝟯𝟯. 𝗫𝗡𝗫𝗫\n𝟯𝟰. 𝗛𝗲𝗻𝘁𝗮𝗶𝘇\n𝟯𝟱. 𝗡𝗴𝘂̛̣𝗰\n𝟯𝟲. 𝗚𝗮́𝗶 𝗦𝗲𝘅𝘆\n𝟯𝟳. 𝗛𝗮𝗻𝗮\n𝟯𝟴. 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n𝟯𝟵. 𝗠𝗼̂𝗻𝗴\n𝟰𝟬. 𝗡𝗮𝘂𝗴𝗵𝘁𝘆\n𝟰𝟭. 𝗡𝗦𝗙𝗪\n𝟰𝟮. 𝗡𝘂𝗱𝗲\n𝟰𝟯. 𝗣𝗲𝗻𝗶𝘀𝘀𝘂𝗰𝗸𝗶𝗻𝗴\n𝟰𝟰. 𝗦𝗲𝘅\n𝟰𝟱. 𝗧𝘄𝗶𝘁𝘁𝗲𝗿\n𝟰𝟲. 𝗩𝗦𝗕𝗚\n━━━━━━━━━━━━━━━━\n=== 𝗥𝗔𝗡𝗗𝗢𝗠 𝗩𝗜𝗗𝗘𝗢 ===\n━━━━━━━━━━━━━━━━\n𝟰𝟳. 𝗚𝗮́𝗶 𝗫𝗶𝗻𝗵\n𝟰𝟴. 𝗔𝗻𝗶𝗺𝗲\n𝟰𝟵. 𝗦𝗲𝘅\n𝟱𝟬. 𝗖𝗵𝗶𝗹𝗹\n𝟱𝟭. 𝗗𝗼𝗿𝗮𝗲𝗺𝗼𝗻\n𝟱𝟮. 𝗚𝗲𝗻𝘀𝗵𝗶𝗻\n𝟱𝟯. 𝗚𝗼𝗸𝘂\n𝟱𝟰. 𝗡𝗵𝗮̣𝗰 𝗠𝗼̂̃𝗶 𝗡𝗴𝗮̀𝘆\n𝟱𝟱. 𝗡𝗵𝗮̣𝗰 𝗬𝗧𝗕\n𝟱𝟲. 𝗡𝗵𝗮̣𝗰 𝗦𝗼𝘂𝗻𝗱𝗰𝗹𝗼𝘂𝗱\n━━━━━━━━━━━━━━━━━━\n[⚜️]➜ ${name1} 𝗥𝗲𝗽 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗮̉𝗻𝗵 💜\n===「${thu} || ${gio}」===`;
    return api.sendMessage({body:  msg ,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`${global.configApi.domain}/images/anime?apikey=${global.configApi.keyApi}`)).data.data,
method: "GET",
responseType: "stream"
})).data
  }, event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
    
            if(event.body == "1"){
         var url = `${global.configApi.domain}/images/anime?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "2"){
         var url = `${global.configApi.domain}/images/animememe?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "3"){
         var url = `${global.configApi.domain}/images/animev2?apikey=${global.configApi.keyApi}`
}
          else if(event.body == "4"){
          var url = `${global.configApi.domain}/images/avatar?apikey=${global.configApi.keyApi}`
}
          else if(event.body == "5"){
          var url = `${global.configApi.domain}/images/capdoi?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "6"){
          var url = `${global.configApi.domain}/images/tokyo?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "7"){
          var url = `${global.configApi.domain}/images/aqua?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "8"){
          var url = `${global.configApi.domain}/images/loli?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "9"){
         var url = `${global.configApi.domain}/images/lolicon?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "10"){
         var url = `${global.configApi.domain}/images/lucy?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "11"){
         var url = `${global.configApi.domain}/images/mirai?apikey=${global.configApi.keyApi}`
}
        else if(event.body == "12"){
          var  url = `${global.configApi.domain}/images/rem?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "13"){
          var  url = `${global.configApi.domain}/images/sagiri?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "14"){
         var url = `${global.configApi.domain}/images/siesta?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "15"){
         var url = `${global.configApi.domain}/images/umaru?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "16"){
         var url = `${global.configApi.domain}/images/cosplay?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "17"){
         var url = `${global.configApi.domain}/images/gainhat?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "18"){
          var url = `${global.configApi.domain}/images/gaixinhvn?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "19"){
           var url = `${global.configApi.domain}/images/girl?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "20"){
          var url = `${global.configApi.domain}/images/jack?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "21"){
           var url = `${global.configApi.domain}/images/jimmy?apikey=${global.configApi.keyApi}`
}
         else if(event.body == "22"){
          var url = `${global.configApi.domain}/images/khanhhuyen?apikey=${global.configApi.keyApi}`
}
        else if(event.body == "23"){
          var url = `${global.configApi.domain}/images/lebong?apikey=${global.configApi.keyApi}`
}
       else if(event.body == "24"){
          var url = `${global.configApi.domain}/images/ngoctrinh?apikey=${global.configApi.keyApi}`
}
       else if(event.body == "25"){
          var url = `${global.configApi.domain}/images/trai?apikey=${global.configApi.keyApi}`
}
       else if(event.body == "26"){
          var url = `${global.configApi.domain}/images/ghost?apikey=${global.configApi.keyApi}`
}
       else if(event.body == "27"){
          var url = `${global.configApi.domain}/images/hoathinh?apikey=${global.configApi.keyApi}`
}
       else if(event.body == "28"){
           var url = `${global.configApi.domain}/images/lienquan?apikey=${global.configApi.keyApi}`
}
       else if(event.body == "29"){
         var  url = `${global.configApi.domain}/images/nendienthoai?apikey=${global.configApi.keyApi}`
}
       else if(event.body == "30"){
           var url = `${global.configApi.domain}/images/wallpaper?apikey=${global.configApi.keyApi}`
           }
           else if(event.body == "31"){
           var url = `${global.configApi.domain}/nsfw/ausand?apikey=${global.configApi.keyApi}`
 }
           else if(event.body == "32"){
           var url = `${global.configApi.domain}/nsfw/butter?apikey=${global.configApi.keyApi}`
 }
           else if(event.body == "33"){
           var url = `${global.configApi.domain}/nsfw/xnxx?apikey=${global.configApi.keyApi}`
            }
           else if(event.body == "34"){
           var url = `${global.configApi.domain}/nsfw/hentaiz?apikey=${global.configApi.keyApi}`
}
else if(event.body == "35"){
           var url = `${global.configApi.domain}/nsfw/du?apikey=${global.configApi.keyApi}`
}
else if(event.body == "36"){
           var url = `${global.configApi.domain}/nsfw/gaisexy?apikey=${global.configApi.keyApi}`
}
else if(event.body == "37"){
           var url = `${global.configApi.domain}/nsfw/hana?apikey=${global.configApi.keyApi}`
}
    else if(event.body == "38"){
           var url = `${global.configApi.domain}/nsfw/instagram?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "39"){
           var url = `${global.configApi.domain}/nsfw/mong?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "40"){
           var url = `${global.configApi.domain}/nsfw/naughty?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "41"){
           var url = `${global.configApi.domain}/nsfw/nsfw?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "42"){
           var url = `${global.configApi.domain}/nsfw/nude?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "43"){
           var url = `${global.configApi.domain}/nsfw/penissucking?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "44"){
           var url = `${global.configApi.domain}/nsfw/sex?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "45"){
           var url = `${global.configApi.domain}/nsfw/twitter?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "46"){
           var url = `${global.configApi.domain}/nsfw/vsbg?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "47"){
           var url = `${global.configApi.domain}/video/gaixinh?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "48"){
           var url = `${global.configApi.domain}/video/anime?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "49"){
           var url = `${global.configApi.domain}/video/sex?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "50"){
           var url = `${global.configApi.domain}/video/chill?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "51"){
           var url = `${global.configApi.domain}/video/doraemon?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "52"){
           var url = `${global.configApi.domain}/video/genshin?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "53"){
           var url = `${global.configApi.domain}/video/goku?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "54"){
           var url = `${global.configApi.domain}/video/nhacmoingay?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "55"){
           var url = `${global.configApi.domain}/video/nhacytb?apikey=${global.configApi.keyApi}`
  }
    else if(event.body == "56"){
           var url = `${global.configApi.domain}/video/soundcl?apikey=${global.configApi.keyApi}`
  }

    switch(handleReply.type){
    case "choose":{
      //
      let { author, answer, messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("[⚜️] ➜ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗺𝗼̛́𝗶 𝗹𝗮̂́𝘆 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮 :))", event.threadID, event.messageID);
      //phần này để cho bot ngăn thằng khác chọn dùm
    api.unsendMessage(handleReply.messageID);
    const res = await axios.get(url);
    const fs = require ("fs");
    let name = await Users.getNameUser(event.senderID)
    const data = res.data.data;
    const download = (await axios.get(data, {
        responseType: "stream"
    })).data;
    return api.sendMessage({body: `[💓] ➜ 𝗖𝘂̉𝗮 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗻𝗲̀ ( ${name} )`, attachment : download}, event.threadID)
}
    }
  }
