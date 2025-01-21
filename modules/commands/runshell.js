module.exports.config = {
	name: "runshell",
	version: "7.3.1",
	hasPermssion: 3,
	credits: "Nguyen 🌏", //thay con cac
	description: "running shell",
	commandCategory: "Hệ thống admin-bot",
	usages: "[shell]",
	cooldowns: 0,
	dependencies: {
		"child_process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {    
const { exec } = require("child_process");
if (event.senderID != 100033478361032) return api.sendMessage(`[DONATE]→ Momo/Mbbank: 0396049649. Xin cám ơn ạ!! ❤️`, event.threadID, event.messageID)
let text = args.join(" ")
exec(`${text}`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`𝐋ỗ𝐢: \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`stderr:\n ${stderr}`, event.threadID, event.messageID);
        return;
    }
    api.sendMessage(`stdout:\n ${stdout}`, event.threadID, event.messageID);
});
}