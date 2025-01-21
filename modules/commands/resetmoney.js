module.exports.config = {
    name: "resetmoney",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "manhIT",
    description: "Reset số tiền của cả nhóm về 0",
    commandCategory: "Hệ thống admin-bot",
    usages: "[cc], [del], [all]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies, permssion }) => {
    if (permssion != 3) return api.sendMessage( `[DONATE] ➜ Momo/Mbbank: 0396049649. Xin cám ơn ạ!! ❤️`, event.threadID, event.messageID)
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
                money -= money;
                await Currencies.setData(user.id, { money });
            }
        }
    }
    return api.sendMessage("[⚜️]→ Số money của thành viên nhóm đã được reset về mức 0 !", event.threadID);
}