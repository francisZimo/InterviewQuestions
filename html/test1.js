const sentClient = {
    type: 'singlePraise', // 事件类型
    data: {
        stuInfo: {
            id: 1, // 学生id
            avatar: '', // 学生头像地址
            name: '', // 学生姓名
            compositionThumbnail: '', // 学生作品
        }
    }
}
const sentLog = {
    type: 'sentLog', // 端上埋点
    data: {
        eventtype: 'naturalresources_study', // 互动名称
        sno: 100,
        stable: 1,
        logtype: 'all_raise_list', // 日志类型
        extradata: { // 业务逻辑参数
            listtype: 9 // 乐探究完成榜
            // ...
        }
    }
}