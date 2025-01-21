const fs = require("fs-extra"),
	//lmht = JSON.parse(fs.readFileSync("./lmht.json"));
  //lmht = JSON.parse(fs.readFileSync("../../lmht.json"));
  lmht = JSON.parse(fs.readFileSync("././lmht.json"));
module.exports.config = {
	name: "lmht",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Xem thông tin tướng liên minh huyền thoại",
	commandCategory: "Thông tin",
	usages: "lmht + tên tướng",
	cooldowns: 5
}
  module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "lmht.jpg")) request("https://images.wallpapersden.com/image/download/4k-league-of-legends-2020_68595_1920x1080.jpg").pipe(fs.createWriteStream(dirMaterial + "lmht.jpg"));
},module.exports.run = async function({
	api: e,
	event: n,
	args: a
}) {
  let tpk = `[⚜️]=== 『 LIST CHARACTER 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n`
	var l = lmht.length,
		o = 1;
	(o = parseInt(a[0]) || 1) < -1 && (o = 1);
	for (var t = Math.ceil(l / 15), r = "", s = 15 * (o - 1); s < 15 * (o - 1) + 15 && !(s >= l); s++) r += `[${s+1}] ➜ ${lmht[s].name}\n`;
	return r += `━━━━━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗛𝗶𝗲̣̂𝗻 đ𝗮𝗻𝗴 𝗰𝗼́ 𝘁𝗼̂̉𝗻𝗴 ${l} 𝗡𝗵𝗮̂𝗻 𝘃𝗮̣̂𝘁\n[⚜️] ➜ 𝗦𝗼̂́ 𝘁𝗿𝗮𝗻𝗴 (${o}/${t})\n[⚜️] ➜ 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}${this.config.name} <𝗦𝗼̂́ 𝘁𝗿𝗮𝗻𝗴>\n[⚜️] ➜ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝘅𝗲𝗺 𝗧𝘂̛𝗼̛́𝗻𝗴`, e.sendMessage({body: tpk + r, attachment: fs.createReadStream(__dirname + `/noprefix/lmht.jpg`)},n.threadID, ((e, a) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: a.messageID,
			author: n.senderID,
			type: "choosee"
		})
	}), n.messageID)
}, module.exports.handleReply = async function({
	api: e,
	event: n,
	handleReply: a
}) {
	if ("choosee" === a.type) try {
		var l = lmht[parseInt(n.body - 1)].name,
			o = lmht[parseInt(n.body - 1)].hp,
			t = lmht[parseInt(n.body - 1)].hp_gain_per_lvl,
			r = lmht[parseInt(n.body - 1)].hp_regen,
			s = lmht[parseInt(n.body - 1)].hp_regen_gain_per_lvl,
			i = lmht[parseInt(n.body - 1)].mana,
			p = lmht[parseInt(n.body - 1)].mana_gain_per_lvl,
			g = lmht[parseInt(n.body - 1)].mana_regen,
			c = lmht[parseInt(n.body - 1)].mana_regen_gain_per_lvl,
			d = lmht[parseInt(n.body - 1)].attack_damage,
			h = lmht[parseInt(n.body - 1)].attack_damage_gain_per_lvl,
			_ = lmht[parseInt(n.body - 1)].attack_speed,
			y = lmht[parseInt(n.body - 1)].attack_speed_gain_per_lvl,
			m = lmht[parseInt(n.body - 1)].armor,
			I = lmht[parseInt(n.body - 1)].armor_gain_per_lvl,
			b = (lmht[parseInt(n.body - 1)].magic_resist, lmht[parseInt(n.body - 1)].magic_resist_gain_per_lvl, lmht[parseInt(n.body - 1)].movement_speed, lmht[parseInt(n.body - 1)].range, lmht[parseInt(n.body - 1)].ability_power),
			$ = lmht[parseInt(n.body - 1)].ability_haste,
			v = lmht[parseInt(n.body - 1)].crit;
		console.log(lmht[parseInt(n.body - 1)].images);
		const a = lmht[parseInt(n.body - 1)].images,
			u = require("request");
		return u(encodeURI(`${a}`)).pipe(fs.createWriteStream(__dirname + "/cache/champ.png")).on("close", (() => e.sendMessage({
			body: `[⚜️]=== 『 INFORMATION CHARACTER 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[👤] ➜ 𝗧𝗲̂𝗻 : ${l}\n[💓] ➜ 𝗛𝗣: ${o}\n[🎊] ➜ 𝗦𝗼̂́ 𝗺𝗮́𝘂 𝘁𝗮̆𝗻𝗴 𝘁𝗵𝗲𝗼 𝗹𝗲𝘃𝗲𝗹: ${t}\n[💞] ➜ 𝗛𝗣 𝗵𝗼̂̀𝗶 𝗽𝗵𝘂̣𝗰: ${r}\n[💝] ➜ 𝗛𝗣 𝗵𝗼̂̀𝗶 𝗽𝗵𝘂̣𝗰 𝘁𝗵𝗲𝗼 𝗹𝗲𝘃𝗲𝗹: ${s}\n\n[💙] ➜ 𝗠𝗮𝗻𝗮: ${i}\n[⚜️] ➜ 𝗠𝗮𝗻𝗮 𝘁𝗮̆𝗻𝗴 𝘁𝗵𝗲𝗼 𝗹𝗲𝘃𝗲𝗹: ${p}\n[💌] ➜ 𝗠𝗮𝗻𝗮 𝗵𝗼̂̀𝗶 𝗽𝗵𝘂̣𝗰: ${g}\n[💗] ➜ 𝗠𝗮𝗻𝗮 𝗵𝗼̂̀𝗶 𝗽𝗵𝘂̣𝗰 𝘁𝗵𝗲𝗼 𝗹𝗲𝘃𝗲𝗹: ${c}\n\n[🗡️] ➜ 𝗧𝗮̂́𝗻 𝗖𝗼̂𝗻𝗴: ${d}\n[🍑] ➜ 𝗧𝗮̂́𝗻 𝗖𝗼̂𝗻𝗴 𝘁𝗮̆𝗻𝗴 𝘁𝗵𝗲𝗼 𝗹𝗲𝘃𝗲𝗹: ${h}\n[✨] ➜ 𝗧𝗼̂́𝗰 Đ𝗮́𝗻𝗵: ${_}\n[🍁] ➜ 𝗧𝗼̂́𝗰 Đ𝗮́𝗻𝗵 𝘁𝗮̆𝗻𝗴 𝘁𝗵𝗲𝗼 𝗹𝗲𝘃𝗲𝗹: ${y}\n\n[🥋] ➜ 𝗚𝗶𝗮́𝗽: ${m}\n[☠️] ➜ 𝗚𝗶𝗮́𝗽 𝘁𝗮̆𝗻𝗴 𝘁𝗵𝗲𝗼 𝗹𝗲𝘃𝗲𝗹: ${I}\n[⚔️] ➜ 𝗔𝗯𝗶𝗹𝗶𝗯𝗶𝘁𝘆 𝗣𝗼𝘄𝗲𝗿: ${b}\n[🌠] ➜ 𝗔𝗯𝗶𝗹𝗶𝗯𝗶𝘁𝘆 𝗛𝗮𝘀𝘁𝗲: ${$}\n\n[🍄] ➜ 𝗖𝗿𝗶𝘁: ${v}`,
			attachment: fs.createReadStream(__dirname + "/cache/champ.png")
		}, n.threadID, (() => fs.unlinkSync(__dirname + "/cache/champ.png")), n.messageID)))
	} catch (e) {
		console.log(e)
	}
};
