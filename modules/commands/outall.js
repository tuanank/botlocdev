module.exports.config = {
  name: "outall",
  version: "1.0.0", 
  hasPermssion: 3,
  credits: "Mirai được mod lại bởi Lý Hảii", /* vui lòng k sửa credit :) */
  description: "out all box",
  commandCategory: "Hệ thống admin-bot",
  usages: "outall [Text]",
  cooldowns: 5,
};
module.exports.run = async ({ api, event, args, permssion }) => {
if (permssion != 3) return api.sendMessage( `[DONATE] ➜ Momo/Mbbank: 0396049649. Xin cám ơn ạ!! ❤️`, event.threadID, event.messageID)
 return api.getThreadList(100, null, ["INBOX"], (err, list) => {
    if (err) throw err;
    list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ?
      api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
    api.sendMessage('[⚜️]➜ Đã out all box thành công', event.threadID);
  });
}