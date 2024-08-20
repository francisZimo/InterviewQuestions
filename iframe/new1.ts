let s2={
  clientConfig: {
    partList: [
      {
        // 环节1
        partName: '学生六人上台',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              rotation: 0, // 插入 旋转角度
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',
              interactionType: '音频', // 互动形式
              role: '', //角色
              aiStickers: '', //AI贴纸
            },
          ],
        },
      },
      {
        // 环节2
        partName: '班长上台',
        studentHotArea: {
          count: 6,

          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',
              interactionType: '音频', // 互动形式
              role: '', //角色
              aiStickers: '', //AI贴纸
            },
          ],
        },
        stageHotArea: {
          count: 1,
          interactionCommand: '选中上台',

          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',
              interactionType: '音频',
              role: '班长ID',
              aiStickers: '沙漠主题ID', //AI贴纸
            },
          ],
        },
      },
      {
        // 环节3
        partName: '班长发技能',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',
              interactionType: '音频', // 互动形式
              role: '', //角色
              aiStickers: '', //AI贴纸
            },
          ],
        },
        stageHotArea: {
          count: 1,
          interactionCommand: '选中上台',

          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',
              interactionType: '音频',
              role: '班长ID',
              aiStickers: '沙漠主题ID', //AI贴纸
            },
          ],
        },
        skillHotArea: {
          count: 1,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '技能热区_1',
              hotAreaType: 'skill',
              role: '班长ID', // 角色
              skill: '打铃铛ID', // 角色技能
              skillMateriaId: '风铃ID', // 技能素材 风铃 、铃铛、鼓
              skillMaterialUrl: '风铃占位图',
            },
          ],
        },
        partInteractionInfo: {
          // 互动玩法
          playRule: '语音识别Id', // 互动形式
          voiceRecognition: {
            // 语音识别所需的配置信息
            isRoleCheck: 0, // 是否角色判断 0： 否 1：是
            role: '助教名称', // 角色名称
            keyword: '助教', // 关键词
          },
        },
      },
    ];
  }
}

let s3=
{
    clientConfig:{
        partName:'学生六人上台',
        studentHotArea:{
            count:6,
            location:[
                {
                    id:'uuid',
                    index:1,
                    name:'学生热区_1',
                    hotAreaType:'student',
                    interactType:'音频', // 互动形式
                    role:'', //角色
                    aiSticker:'' //角色贴纸    
                }
            ],
        }
     },
    coursewareConfig:{
        location:[
            { //  表单中所有的坐标id信息
                id:'uuid',
                index:1,  
                hotAreaType: 'student', // 所属热区 student /teacher / stage / skill
                name:'学生热区_1',
            }
        ]
        
    }
}


let s4=
{
    clientConfig: {
        partName: '班长上台',
        studentHotArea: {
            count: 6,
            location: [{
                id: 'uuid',
                index: 1,
                name: '学生热区_1',
                hotAreaType: 'student',
                interactType: '音频', // 互动形式
                role: '', //角色
                aiSticker: '' //角色贴纸    
            }],
        },
        stageHotArea: {
            count: 1,
            interactCommand: '选中上台',
            location: [{
                id: 'uuid',
                index: 1,
                name: '上台热区_1',
                hotAreaType: 'stage',
                interactType: '音频',
                role: '班长ID',
                aiSticker: '沙漠主题ID' //角色贴纸
            }],
        }
    },
    coursewareConfig:{
        location:[
            {
                id: 'uuid',
                index: 1,
                name: '学生热区_1',
                hotAreaType: 'student',
            },
            {
                id: 'uuid',
                index: 1,
                hotAreaType: 'stage', // 所属热区 student /teacher / stage / skill
                name: '上台热区_1',
            }
        ]
        
    }
}
