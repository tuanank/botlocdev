/*module.exports.config = {
    name:"nino",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Nói chiện zới bot nino cute",
    commandCategory: "Gọi bot",
    usages: "[câu hỏi]/[on,off]",
    cooldowns: 5
};

const axios = require('axios');

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'nino.json');
    if (!existsSync(path)) {
        const obj = {
            nino: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('nino')) data.nino = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.handleEvent = async ({ api, event, args, Threads }) => {
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'nino.json');
    const { nino } = require(path);

    if (nino.hasOwnProperty(threadID) && nino[threadID] == true) {
      if (event.senderID !== api.getCurrentUserID()) {
      axios.get(encodeURI(`https://api-v2.jrtxtracy.repl.co/nino/get/${event.body}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "𝘂̉𝗮 𝗻𝗼́𝗶 𝗷 𝗵𝗼𝗻𝗴 𝗵𝗶𝗲̂̉𝘂 :<") {
                api.sendMessage("𝗻𝗶𝗻𝗼 𝗸𝗼 𝗵𝗶𝗲̂̉𝘂, 𝗱𝗮̣𝘆 𝗻𝗶𝗻𝗼 đ𝗶 :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
    })
    }  
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'nino.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { nino } = database;

    if (!args[0]) { api.sendMessage("𝘂̉𝗮 𝗵𝗼̉𝗶 𝗷 𝗵𝗼̉𝗶 đ𝗶", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                nino[threadID] = true;
                api.sendMessage("[⚜️]➜ 𝗯𝗮̣̂𝘁 𝗻𝗶𝗻𝗼𝗿𝗲𝗽𝗹𝘆 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!", threadID);
                break;
            }
            case "off": {
                nino[threadID] = false;
                api.sendMessage("[⚜️]➜ 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗶𝗻𝗼𝗿𝗲𝗽𝗹𝘆", threadID);
                break;
            }
            default:
            axios.get(encodeURI(`https://api-v2.jrtxtracy.repl.co/nino/get/${args.join(" ")}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "𝘂̉𝗮 𝗻𝗼́𝗶 𝗷 𝗵𝗼𝗻𝗴 𝗵𝗶𝗲̂̉𝘂 :<") {
                api.sendMessage("𝗻𝗶𝗻𝗼 𝗸𝗼 𝗵𝗶𝗲̂̉𝘂, 𝗱𝗮̣𝘆 𝗻𝗶𝗻𝗼 𝗶𝗶𝗶 :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
            });
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}*/
module.exports.config = {
    name: "nino",
    version: "4.3.6",
    hasPermssion: 0,
    credits: "ProcodeMew",
    description: "Trò chuyện với nino",
    commandCategory: "Gọi bot",
    usages: "nino [args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function nino(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `${global.configApi.ninoapi}/nino/get/${g(a)}`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.nino && (global.nino = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.nino.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.nino.get(c)) return;
        var { data: h, error: i } = await nino(f, b, a);
        return !0 == i ? void 0 : !1 == h.reply ? g(h.error) : g(h.reply)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("[⚜️] ➜ Vui lòng nhập tin nhắn để nino trả lời");
    switch (c[0]) {
        case "on":
            return global.nino.has(d) ? f("[⚜️]➜ Bạn chưa tắt nino") : (global.nino.set(d, e), f("[⚜️] ➜ Bật nino thành công"));
        case "off":
            return global.nino.has(d) ? (global.nino.delete(d), f("[⚜️] ➜ Tắt nino thành công")) : f("[⚜️] ➜ Bạn chưa bật nino");
        default:
            var { data: g, error: h } = await nino(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.reply ? f(g.error) : f(g.reply);
    }
};