this.config = {
    name: 'autoband',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Cấm thành viên sử dụng bot, nếu chửi bot!',
    commandCategory: 'Hệ thống support-bot',
    usages: 'autoban unban id',
    cooldowns: 3
};
let fs = require('fs');
let path = __dirname+'/bot/autoband.json';
let data = {};
let now = ()=>Date.now()+25200000;
let unban_time = 1000*60*60*24; // qua bao nhiêu thời gian là mở cấm (ms);
let save = ()=>fs.writeFileSync(path, JSON.stringify(data, 0, 4));

if (!fs.existsSync(path))save();

data = require(path);

let từ_cấm = ["bot óc chó", "bot lồn", "bot ngu", "bot gà", "bot lol", "bot tuấn óc", "bot như cặc", "bot chó", "bot ngu lồn", "bot chó", "dm bot", "dmm bot", "Clm bot", "bot ghẻ", "đmm bot", "đb bot", "bot điên", "bot dở", "bot khùng", "đĩ bot", "bot paylac rồi", "con bot lòn", "cmm bot", "clap bot", "bot ncc", "bot oc", "bot óc", "bot óc chó", "cc bot", "bot tiki", "lozz bottt", "lol bot", "loz bot", "lồn bot", "bot hãm", "bot lon", "bot cac", "bot nhu lon", "bot như cc", "bot như bìu", "bot sida", "bot xàm", "bot fake", "bot súc vật", "bot shoppee", "bot đểu", "bot như lồn", "bot dởm", "bot chó", "bot cho", "bot chó đẻ", "bot cho d", "bot chó chết", "bot ăn cứt", "bot bú lồn", "bot ăn cuc", "bot bulon", "bot bú cặc", "bot bu cac", "bot lon", "bot loz", "bot cac", "bot cc", "bot cl", "bot như l", "bot như lồn", "bot như loz", "bot l", "bot c", "bot lỏ", "lỏ bot", "l bot", "lồn bot", "loz bot", "admin bot như l", "admin bot như lồn", "admin bot như lozz", "thằng admin bot như lồn", "admin ngu", "admin bot lỏ", "admin súc vật", "admin óc chó", "admin như cái cc", "admin như db", "jrt ngu", "jrt lỏ"];

if(!global.interval_chui_bot_auto_ban_user)global.interval_chui_bot_auto_ban_user = setInterval(function() {
    let all_tid = Object.keys(data);

    if (all_tid.length == 0 || typeof((global.client || {}).api) != 'object')return;
    global.data.data_auto_ban = {
            data,
            unban_time
        };
    for (let tid of all_tid)for (let sid of Object.keys(data[tid].user)) {
        let user = data[tid].user[sid];

        if (user.status == true && (user.time_ban+unban_time) < now()) {
            user.status = false;
            save();
            try {
            var name = global.data.userName.get(sid);
            } catch{var name = ''};
            global.client.api.sendMessage({
                body: `=== 『 CẤM NGƯỜI DÙNG 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ Bạn đã được mở cấm\n[👤] ➜ Tên: ${name}\n[🌐] ➜ Facebook: Facebook.com/${sid}`, mentions: [{
                    id: sid, tag: name,
                }],
            }, tid);
        };
    };
}, 100);

this.run = function(o) {
    let {
        type: t, messageReply: r, mentions: m, threadID: tid,
    } = o.event;
    let send = msg=>(o.api.sendMessage(msg, tid, o.event.messageID));
    let user = data[tid].user;
    if (o.event.senderID != 100033478361032) return send(`[Donate] ➜ Hãy donate cho admin để được mở ban!!!`)
    if (/^(unban)$/.test(o.args[0])) {
        let id = t == 'message_reply'?r.senderID: Object.keys(m).length > 0?Object.keys(m)[0]: isFinite(o.args[1])?o.args[1]: false;
        if (!id)return send(`[⚜️] ➜ ID cần mở cấm chưa xác định!`);
        if (!user[id] || !user[id].status)return send(`[⚜️] ➜ ID chưa bị cấm!`);

        user[id].status = false;
        return send(`[⚜️] ➜ Đã mở cấm ID "${id}"\n[❗] ➜ Bị cấm do chửi "${user.msg}"`);
    };
};
this.handleEvent = function(o) {
    let {
        threadID: tid,
        senderID: sid,
        body = '',
    } = o.event;
    let send = msg=>(o.api.sendMessage(msg, tid, o.event.messageID));

    if (!data[tid])data[tid] = {};
    if (!data[tid].user)data[tid].user = {};
    if (!data[tid].user[sid])data[tid].user[sid] = {
        status: false,
        msg: '',
        time_ban: 0,
    };
    save();

    let user = data[tid].user[sid];

    if (từ_cấm.map($=>$.toLowerCase()).includes(body.toLowerCase())) {
        user.status = true,
        user.msg = body,
        user.time_ban = now();
        save();
        let result = (user.time_ban+unban_time)-now();
        send(`=== 『 NOTI SYSTEM BOT 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ Bạn đã vi phạm bot và bị cấm sử dụng bot\n[🔐] ➜ Bạn sẽ được mở ban sau ${result/1000/60/60<<0} giờ nữa\n[⏰] ➜ Thời gian còn lại là: ${result/1000/60/60<<0} giờ ${result/1000/60%60<<0} phút ${result/1000%60<<0} giây`);
    };
};

/*const fs = global.nodemodule['fs-extra']
module.exports.config = {
  name: 'autoban',
  version: '1.1.0',
  hasPermssion: 2,
  credits: 'D-Jukie mod by JRT',
  description: 'Tự động ban người dùng chửi bot',
  commandCategory: 'Hệ thống support-bot',
  usages: 'autoban',
  cooldowns: 0,
}
module.exports.handleEvent = async function ({
  api,
  event,
  args,
  Users,
  Threads,
}) {
  var { threadID, reason } = event,
    id = '' + event.senderID,
    idgr = '' + event.threadID,
    name = (await Users.getData(event.senderID)).name,
    idbox = event.threadID,
    datathread = (await Threads.getData(event.threadID)).threadInfo
  const moment = require('moment-timezone')
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss DD/MM/YYYY')
  const time = moment.tz('Asia/Ho_Chi_minh').format('HH:MM:ss L')
  const random = ["Chúc bạn ăn ban vui vẻ 💓", "Bạn ngu ngốc lắm!!! Quá tệ ☠️", "Bớt chửi lại cho đời thanh xuân nghen 😘"];
  if (!event.body) {
    return
  }
  if (
    event.body.indexOf('ban t đi') !== -1 || 
    event.body.indexOf('ban t di') !== -1 ||
    event.body.indexOf('Ban t di') !== -1 ||
    event.body.indexOf('Ban t đi') !== -1 ||
    event.body.indexOf('please ban me') !== -1 ||
    event.body.indexOf('Please ban me') !== -1 ||
    event.body.indexOf('bot loz') !== -1 ||
    event.body.indexOf('Bot loz') !== -1 ||
    event.body.indexOf('bot ngu') !== -1 ||
    event.body.indexOf('Bot ngu') !== -1 ||
    event.body.indexOf('botngu') !== -1 ||
    event.body.indexOf('Botngu') !== -1 ||
    event.body.indexOf('bot dỏm') !== -1 ||
    event.body.indexOf('Bot dỏm') !== -1 ||
    event.body.indexOf('Bot lazada') !== -1 ||
    event.body.indexOf('bot lazada') !== -1 ||
    event.body.indexOf('Bot shoppe') !== -1 ||
    event.body.indexOf('bot shoppe') !== -1 ||
    event.body.indexOf('bot tiki') !== -1 ||
    event.body.indexOf('Bot tiki') !== -1 ||
    event.body.indexOf('bot óc') !== -1 ||
    event.body.indexOf('botoc') !== -1 ||
    event.body.indexOf('Botoc') !== -1 ||
    event.body.indexOf('Bot óc') !== -1 ||
    event.body.indexOf('dm bot') !== -1 ||
    event.body.indexOf('dmbot') !== -1 ||
    event.body.indexOf('Dmbot') !== -1 ||
    event.body.indexOf('Dm bot') !== -1 ||
    event.body.indexOf('Đm bot') !== -1 ||
    event.body.indexOf('clmm bot') !== -1 ||
    event.body.indexOf('Clmm bot') !== -1 ||
    event.body.indexOf('bot đần') !== -1 ||
    event.body.indexOf('Bot đần') !== -1 ||
    event.body.indexOf('óc bot') !== -1 ||
    event.body.indexOf('Óc bot') !== -1 ||
    event.body.indexOf('Bot lỏ') !== -1 ||
    event.body.indexOf('kick bot') !== -1 ||
    event.body.indexOf('Kick bot') !== -1 ||
    event.body.indexOf('bot ngáo') !== -1 ||
    event.body.indexOf('Bot ngáo') !== -1 ||
    event.body.indexOf('bot não') !== -1 ||
    event.body.indexOf('Bot não') !== -1 ||
    event.body.indexOf('bot cặc') !== -1 ||
    event.body.indexOf('Bot cặc') !== -1 ||
    event.body.indexOf('bot cac') !== -1 ||
    event.body.indexOf('Bot cac') !== -1 ||
    event.body.indexOf('Bot óc') !== -1 ||
    event.body.indexOf('bot óc') !== -1 ||
    event.body.indexOf('bot lon') !== -1 ||
    event.body.indexOf('Bot lon') !== -1 ||
    event.body.indexOf('Bot lồn') !== -1 ||
    event.body.indexOf('bot lồn') !== -1 ||
    event.body.indexOf('Đỉ bot') !== -1 ||
    event.body.indexOf('đỉ bot') !== -1 ||
    event.body.indexOf('đỷ bot') !== -1 ||
    event.body.indexOf('Đỷ bot') !== -1 ||
    event.body.indexOf('chó bot') !== -1 ||
    event.body.indexOf('Chó bot') !== -1 ||
    event.body.indexOf('Bot chó') !== -1 ||
    event.body.indexOf('bot chó') !== -1 ||
    event.body.indexOf('súc vật bot') !== -1 ||
    event.body.indexOf('Súc vật bot') !== -1 ||
    event.body.indexOf('bot này ngu') !== -1 ||
    event.body.indexOf('Bot này ngu') !== -1 ||
    event.body.indexOf('Bot láo') !== -1 ||
    event.body.indexOf('bot láo') !== -1 ||
    event.body.indexOf('dcm bot') !== -1 ||
    event.body.indexOf('Dcm bot') !== -1 ||
    event.body.indexOf('bot mất dạy') !== -1 ||
    event.body.indexOf('Bot mất dạy') !== -1 ||
    event.body.indexOf('botoccho') !== -1 ||
    event.body.indexOf('Botoccho') !== -1 ||
    event.body.indexOf('Bot rác') !== -1 ||
    event.body.indexOf('bot rác') !== -1 ||
    event.body.indexOf('Bot rac') !== -1 ||
    event.body.indexOf('bot rac') !== -1 ||
    event.body.indexOf('Botrac') !== -1 ||
    event.body.indexOf('botrac') !== -1 ||
    event.body.indexOf('bot ncc') !== -1 ||
    event.body.indexOf('Bot ncc') !== -1 ||
    event.body.indexOf('bot lỏ') !== -1 ||
    event.body.indexOf('cc bot') !== -1 ||
    event.body.indexOf('Cc bot') !== -1 ||
    event.body.indexOf('bot ncl') !== -1 ||
    event.body.indexOf('Bot ncl') !== -1 ||
    event.body.indexOf('bot cút') !== -1 ||
    event.body.indexOf('Bot cút') !== -1 ||
    event.body.indexOf('Cút đi bot') !== -1 ||
    event.body.indexOf('cút đi bot') !== -1 ||
    event.body.indexOf('Sơn ngu') !== -1 ||
    event.body.indexOf('sv bot') !== -1 ||
    event.body.indexOf('Cmmmm mẹ mày bot') !== -1 ||
    event.body.indexOf('admin ngáo') !== -1 ||
    event.body.indexOf('chó Sơn') !== -1 ||
    event.body.indexOf('lồn Admin') !== -1 ||
    event.body.indexOf('sơnsv') !== -1 ||
    event.body.indexOf('Sơn sv') !== -1 ||
    event.body.indexOf('admin ngu') !== -1 ||
    event.body.indexOf('Admin chó') !== -1 ||
    event.body.indexOf('admin đểu') !== -1 ||
    event.body.indexOf('Admin ngu') !== -1 ||
    event.body.indexOf('Admin sv') !== -1 ||
    event.body.indexOf('admin lồn') !== -1 ||
    event.body.indexOf('Admin óc') !== -1 ||
    event.body.indexOf('admin óc') !== -1 ||
    event.body.indexOf('Admin rác') !== -1 ||
    event.body.indexOf('admin rác') !== -1 ||
    event.body.indexOf('Admin ncc') !== -1 ||
    event.body.indexOf('admin ncc') !== -1
  ) {
    let data = (await Users.getData(id)).data || {}
    var namethread = datathread.threadName
     api.removeUserFromGroup(id, threadID)
    return (
      (data.banned = true),
      (data.reason = 'Chửi bot' || null),
      (data.dateAdded = time),
      await Users.setData(id, { data: data }),
      global.data.userBanned.set(id, {
        reason: data.reason,
        dateAdded: data.dateAdded,
      }),
      api.sendMessage(
'⭐ ━━━━━━━ User Ban ━━━━━━━ ⭐' + '\n' +
'| ➜ Bạn Đã Bị Ban' + ' | ' + ' Chửi Bot , Admin' + '\n' +
'| ➜ Tên : ' + name + '\n' +
'| ➜ Tid : ' + idgr + '\n' +
`| ➜ Admin said you : ${random[Math.floor(Math.random() * random.length)]}` + '\n' +
'| ➜ Xin Gỡ Ban Qua : ' + 'fb.com/NHD.JRT.262' + '\n' +
'━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        threadID,
        () => {
          var idd = global.config.ADMINBOT
          for (let idad of idd) {
            api.sendMessage(
'⭐ ━━━━━━━ User Ban ━━━━━━━ ⭐' + '\n' +
'| ➜ ' + name + ' nhóm ' + namethread + '\n' +
'| ➜ Chửi Bot : ' + event.body + '\n' +
'| ➜ Lúc : ' + gio + '\n' +
'| ➜ Id Nhóm : ' + idgr + '\n' +
'| ➜ Facebook.com/' + id + '\n' +
'━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 
              idad
            )
          }
        }
      )
    )
    
  } else {
    return
  }
}
module.exports.run = async function ({
  api,
  event,
  args,
  Users,
  Threads,
  __GLOBAL,
}) {
  api.sendMessage(
    `[⚜️] ➜ Tự động ban khi chửi bot\n[⚜️] ➜ Module code by Jukie~~ Mod by JRT`,
    event.threadID,
    event.messageID
  )
}*/
