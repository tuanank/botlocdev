module.exports.config = {
	name: "trăng",	
	version: "1.1.1", 
	hasPermssion: 0,
	credits: "ThanhAli",
	description: "Tạo ảnh trăng theo tên/năm sinh", 
	commandCategory: "Tạo ảnh",
	usages: "< tên/năm sinh >",
	cooldowns: 5
};

module.exports.run = async function ({api,event,args}) {
const {
    get
} = require('axios');
const {
    image
} = require('image-downloader');
const {
    createReadStream
} = require('fs-extra');
const { threadID, messageID } = event;
const content = args.join(" ").split("|").map(item => item = item.trim());
const name = content[0],ngay = content[1],thang = content[2],nam = content[3];
  const dest = `${__dirname}/cache/trăng.png`;
        await image({
            url: 'https://apis-jrt.jrtxtracy.repl.co/moon&name=' + name + '&ngay=' + ngay + '&thang=' + thang + '&nam=' + nam, dest
        });
        api.sendMessage({
            body: `Ảnh của bạn nè`, attachment: createReadStream(dest)
        }, event.threadID, event.messageID)
}
module.exports.languages = {"vi": {}}