module.exports.config = {
	name: "missyou",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "𝐃𝐚𝐫𝐤 𝐑𝐮𝐥𝐞𝐱 𝐊𝐢𝐧𝐠 𝐀𝐧𝐮𝐩", 
	description: "Just Respond",
	commandCategory: "Gọi bot",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("Nhớ anh")==0 || event.body.indexOf("Nhớ em")==0 || event.body.indexOf("Miss you")==0 || event.body.indexOf("miss you so much")==0 || event.body.indexOf("Miss you so much")==0 || event.body.indexOf("nhớ anh")==0 || event.body.indexOf("nhớ em")==0 || event.body.indexOf("nhớ bạn")==0 || event.body.indexOf("nhớ bạn")==0 || event.body.indexOf("Miss u")==0 || event.body.indexOf("Nhớ bạn")==0 ) { 
		var msg = {
				body: `Tớ cũng nhớ ${name} rất nhiều đấy ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }