module.exports = function ({ api, models, Users, Threads, Currencies }) {
    const logger = require("../../utils/log.js");
    return async function ({ event }) {
        const { threadID, logMessageType, logMessageData } = event;
        const { setData, getData, delData, createData } = Threads;

        try {
            let dataThread = (await getData(threadID)).threadInfo;

            switch (logMessageType) {
                case "log:thread-admins": {
                    const targetID = logMessageData.TARGET_ID;
                    const isAdminEventAdd = logMessageData.ADMIN_EVENT === "add_admin";
                    const isAdminEventRemove = logMessageData.ADMIN_EVENT === "remove_admin";

                    if (isAdminEventAdd) {
                        dataThread.adminIDs.push({ id: targetID });
                    } else if (isAdminEventRemove) {
                        dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id !== targetID);
                    }
                    logger(`Cập Nhật Danh Sách Quản Trị Viên Cho Nhóm: ${threadID}`, '[ UPDATE DATABASE ]');
                    await setData(threadID, { threadInfo: dataThread });
                    break;
                }
                case "log:thread-name": {
                    const newThreadName = logMessageData.name;
                    logger(`Cập Nhật Tên Nhóm Cho Nhóm: ${threadID}`, '[ UPDATE DATABASE ]');
                    dataThread.threadName = newThreadName;
                    await setData(threadID, { threadInfo: dataThread });
                    break;
                }
                case 'log:unsubscribe': {
                    const leftParticipantFbId = logMessageData.leftParticipantFbId;
                    if (leftParticipantFbId === api.getCurrentUserID()) {
                        logger(`Tiến Hành Xoá Data Nhóm: ${threadID}`, '[ UPDATE DATABASE ]');
                        const index = global.data.allThreadID.indexOf(threadID);
                        if (index !== -1) {
                            global.data.allThreadID.splice(index, 1);
                            await delData(threadID);
                        }
                    } else {
                        const participantIndex = dataThread.participantIDs.indexOf(leftParticipantFbId);
                        if (participantIndex !== -1) {
                            dataThread.participantIDs.splice(participantIndex, 1);
                        }

                        const adminIndex = dataThread.adminIDs.findIndex(i => i.id === leftParticipantFbId);
                        if (adminIndex !== -1) {
                            dataThread.adminIDs.splice(adminIndex, 1);
                        }

                        logger(`Tiến Hành Xoá Data Người Dùng: ${leftParticipantFbId} | Tại Nhóm: ${threadID}`, '[ UPDATE DATABASE ]');
                        await setData(threadID, { threadInfo: dataThread });
                    }
                    break;
                }
            }
        } catch (error) {
            // console.log(`Đã xảy ra lỗi khi cập nhật dữ liệu: ${error}`);
        }
        return;
    };
};