const axios = require('axios');

this.config = {
  name: 'rbupt',
  version: '0.0.1',
  hasPermission: 0,
  credits: 'JRT', // Lưu Ý Là 1 Tuần Sẽ Reset 1 Lần Nhé
  description: 'Treo uptime robot',
  commandCategory: 'Công Cụ',
  usages: 'rbupt [name] [link]',
  cooldowns: 3
};

this.run = async function({ api, event, args }) {
  const { threadID, messageID } = event;
  const send = msg => api.sendMessage(msg, threadID, messageID);
  const name = args[0];
  const url = args[1];

  if (!name || !url) {
    return send(`[⚜️] ➜ JRT PROJECT Uptime Robot Pro\n[⚜️] ➜ Usage: ${this.config.usages}`);
  }

  try {
    const response = await axios.get(`${global.configApi.uptime}/api/ping?name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}`);

    if (response.status === 200 && response.data.message) {
      return send(`=== 『 UPTIME VIP 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ Name: ${name}\n[⚜️] ➜ Link Uptime: ${url}\n[⚜️] ➜ Check Status: ${global.configApi.uptime}\n[⚜️] ➜ API SEND SUCCESS BY JRT PROJECT`);
    } else {
      return send("[⚜️] ➜ Lỗi Liên Kết Hoặc Name Đã Tồn Tại");
    }
  } catch (error) {
    if (error.response) {
      if (error.response.data && error.response.data.error) {
        return send(`[⚜️] ➜ Lỗi Liên Kết Hoặc Name Đã Tồn Tại`);
      }
      return send("[⚜️] ➜ Đã xảy ra lỗi khi gửi yêu cầu đến API\nLiên Hệ JRT Ngay\nFB: https://www.facebook.com/NHD.JRT.262");
    }
    return send("[⚜️] ➜ Đã xảy ra lỗi khi gửi yêu cầu đến API\nLiên Hệ JRT Ngay\nFB: https://www.facebook.com/NHD.JRT.262");
  }
};