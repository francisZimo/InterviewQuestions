enum InteractionType {
  Video = 'Video',
  Audio = 'Audio',
  VideoAudio = 'VideoAudio',
}

enum InteractionRule {
  SingleSpeech = 'SingleSpeech',
  SimultaneousSpeech = 'SimultaneousSpeech',
  SequentialSpeech = 'SequentialSpeech',
}

enum RoleType {
  None = 'None',
  ClassMonitor = 'ClassMonitor',
  ClassRepresentative = 'ClassRepresentative',
  TeachingAssistant = 'TeachingAssistant',
  Professor = 'Professor',
}

enum RoleSkill {
  OpenBlindBox = 'OpenBlindBox',
  OpenTreasureBox = 'OpenTreasureBox',
  RingBellForDismissal = 'RingBellForDismissal',
  DistributeCards = 'DistributeCards',
}

enum GamePlayInteraction {
  VoiceRecognition = 'VoiceRecognition',
  TakePhotoTogether = 'TakePhotoTogether',
}

enum AISticker {
  DesertTheme = 'DesertTheme',
  Professor = 'Professor',
}

enum InteractionCommand {
  MultiplePeopleOnStage = 'MultiplePeopleOnStage',
  OneVsOne = 'OneVsOne',
  DesignatedOnStage = 'DesignatedOnStage',
}

// 【环节名称】：选中单人发言
// 【学生热区】
// 互动形式：视频上台
// 互动规则：-
// 热区：5
// 【上台热区】
// 互动指令：选中上台
// 互动形式：音视频上台
// 互动规则：单人发言
// 热区：1
let w1 = {
  clientConfig: {
    partList: [
      {
        partName: '选中单人发言',
        studentHotArea: {
          count: 5,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',
              interactionType: InteractionType.Video, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',
              interactionType: InteractionType.Video, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',
              interactionType: InteractionType.Video, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',
              interactionType: InteractionType.Video, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',
              interactionType: InteractionType.Video, // 互动形式
              role: '', //角色
            },
          ],
        },
        stageHotArea: {
          count: 1,
          interactionCommand: InteractionCommand.DesignatedOnStage, // 互动指令
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',
              interactionType: InteractionType.VideoAudio, // 互动形式
              role: '', //角色
            },
          ],
        },
      },
    ],
  },
};

// 【环节名称】：同时发言
// 【学生热区】
// 互动形式：音视频上台
// 热区：6

let w2 = {
  clientConfig: {
    partList: [
      {
        partName: '同时发言',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',
              interactionType: InteractionType.VideoAudio, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',
              interactionType: InteractionType.VideoAudio, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',
              interactionType: InteractionType.VideoAudio, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio, // 互动形式
              role: '', //角色
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio, // 互动形式
              role: '', //角色
            },
          ],
        },
      },
    ],
  },
};

// 【环节名称】：顺次发言-第1人
// -----
// 【学生热区】
// 热区：6
// 热区1-互动形式：音视频上台
// 热区2-互动形式：视频上台
// 热区3-互动形式：视频上台
// 热区4-互动形式：视频上台
// 热区5-互动形式：视频上台
// 热区6-互动形式：视频上台
// -----
// 【环节名称】：顺次发言-第2人
// 【学生热区】
// 热区：6
// 热区1-互动形式：视频上台
// 热区2-互动形式：音视频上台
// 热区3-互动形式：视频上台
// 热区4-互动形式：视频上台
// 热区5-互动形式：视频上台
// 热区6-互动形式：视频上台
// 依次类推
let w3 = {
  clientConfig: {
    partList: [
      {
        partName: '顺次发言-第1人',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
          ],
        },
      },
      {
        partName: '顺次发言-第2人',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
          ],
        },
      },
      {
        partName: '顺次发言-第3人',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
          ],
        },
      },
      {
        partName: '顺次发言-第4人',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
          ],
        },
      },
      {
        partName: '顺次发言-第5人',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
          ],
        },
      },
      {
        partName: '顺次发言-第6人',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
          ],
        },
      },
    ],
  },
};

// 【环节名称】：学生6人上台
// 【学生热区】
// 互动形式：音视频上台
// 热区：6
// ------
// 【环节名称】：班长上台
// 【学生热区】
// 互动形式：视频上台
// 热区：6
// 【上台热区】
// 互动指令：选中上台
// 互动形式：音视频上台
// 热区：1
// 角色：班长

// ------
// 【环节名称】：班长发主题
// 【学生热区】
// 互动形式：视频上台
// 热区：6
// 【上台热区】
// 互动指令：选中上台
// 互动形式：音视频上台
// 热区：1
// 角色：班长
// 【技能热区】
// 角色：班长
// 角色技能：发主题盲盒
// 热区：3

let w4 = {
  clientConfig: {
    partList: [
      {
        partName: '学生6人上台',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
          ],
        },
      },
      {
        partName: '班长上台',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
          ],
        },
        stageHotArea: {
          count: 1,
          interactionCommand: InteractionCommand.DesignatedOnStage,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',

              interactionType: InteractionType.VideoAudio,
              role: RoleType.ClassMonitor,
            },
          ],
        },
      },
      {
        partName: '班长发主题',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.Video,
              role: '',
            },
          ],
        },
        stageHotArea: {
          count: 1,
          interactionCommand: InteractionCommand.DesignatedOnStage,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',

              interactionType: InteractionType.VideoAudio,
              role: RoleType.ClassMonitor,
            },
          ],
        },
        skillHotArea: {
          count: 3,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '技能热区_1',
              hotAreaType: 'skill',
              role: RoleType.ClassMonitor,
              roleSkill: RoleSkill.OpenBlindBox,
              skillMateriaId: '', // 技能素材比如 风铃 、铃铛、鼓
              skillMaterialUrl: '', // 占位图
            },
            {
              id: 'uuid',
              index: 2,
              name: '技能热区_2',
              hotAreaType: 'skill',
              role: RoleType.ClassMonitor,
              roleSkill: RoleSkill.OpenBlindBox,
              skillMateriaId: '', // 技能素材比如 风铃 、铃铛、鼓
              skillMaterialUrl: '', // 占位图
            },
            {
              id: 'uuid',
              index: 3,
              name: '技能热区_3',
              hotAreaType: 'skill',
              role: RoleType.ClassMonitor,
              roleSkill: RoleSkill.OpenBlindBox,
              skillMateriaId: '', // 技能素材比如 风铃 、铃铛、鼓
              skillMaterialUrl: '', // 占位图
            },
          ],
        },
      },
    ],
  },
};

// 【环节名称】：课代表上台
// 【上台热区】
// 互动指令：选中上台
// 互动形式：音视频上台
// 热区：1
// 角色：课代表
// ------
// 【环节名称】：课代表发物资
// 【上台热区】
// 互动指令：选中上台
// 互动形式：音视频上台
// 热区：1
// 角色：课代表
// 【技能热区】
// 角色：课代表
// 角色技能：发宝箱
// 热区：1

let w5 = {
  clientConfig: {
    partList: [
      {
        partName: '课代表上台',
        stageHotArea: {
          count: 1,
          interactionCommand: InteractionCommand.DesignatedOnStage,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',

              interactionType: InteractionType.VideoAudio,
              role: RoleType.ClassRepresentative,
            },
          ],
        },
      },
      {
        partName: '课代表发物资',
        stageHotArea: {
          count: 1,
          interactionCommand: InteractionCommand.DesignatedOnStage,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',

              interactionType: InteractionType.VideoAudio,
              role: RoleType.ClassRepresentative,
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
              role: RoleType.ClassRepresentative,
              roleSkill: RoleSkill.OpenTreasureBox,
              skillMateriaId: '', // 技能素材比如 风铃 、铃铛、鼓
              skillMaterialUrl: '', // 占位图
            },
          ],
        },
      },
    ],
  },
};

// 【环节名称】：学生6人上台喊助教
// 【学生热区】
// 互动形式：音视频上台
// 热区：6
// 【互动玩法】
// 互动玩法：语音识别
// 关键词：助教
// 角色判断：是
// 角色名称：助教
// -------
// 【环节名称】：助教上台
// 【上台热区】
// 互动指令：选中上台
// 互动形式：音视频上台
// 热区：1
// 角色：助教
// ---
// 【环节名称】：班长发主题
// 【上台热区】
// 互动指令：选中上台
// 互动形式：音视频上台
// 热区：1
// 角色：助教
// 【技能热区】
// 角色：助教
// 角色技能：打铃
// 热区：3

let w6 = {
  clientConfig: {
    partList: [
      {
        partName: '学生6人上台喊助教',
        studentHotArea: {
          count: 6,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              role: '',
            },
          ],
        },
        partInteractionInfo: {
          // 互动玩法配置信息
          playRule: GamePlayInteraction.VoiceRecognition, // 互动玩法
          voiceRecognition: {
            // 语音识别所需的配置信息
            isRoleCheck: 0, // 是否角色判断 0： 否 1：是
            role: RoleType.TeachingAssistant, // 角色名称
            keyword: '助教', // 关键词
          },
        },
      },
      {
        partName: '助教上台',
        stageHotArea: {
          count: 1,
          InteractionCommand: InteractionCommand.DesignatedOnStage,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',
              interactionType: InteractionType.VideoAudio,
              role: RoleType.TeachingAssistant,
            },
          ],
        },
      },
      {
        partName: '班长发主题',
        stageHotArea: {
          count: 1,
          InteractionCommand: InteractionCommand.DesignatedOnStage,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',

              interactionType: InteractionType.VideoAudio,
              role: RoleType.TeachingAssistant,
            },
          ],
        },
        skillHotArea: {
          count: 3,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '技能热区_1',
              hotAreaType: 'skill',
              role: RoleType.TeachingAssistant,
              roleSkill: RoleSkill.RingBellForDismissal,
              skillMateriaId: '',
              skillMaterialUrl: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '技能热区_2',
              hotAreaType: 'skill',
              role: RoleType.TeachingAssistant,
              roleSkill: RoleSkill.RingBellForDismissal,
              skillMateriaId: '',
              skillMaterialUrl: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '技能热区_3',
              hotAreaType: 'skill',
              role: RoleType.TeachingAssistant,
              roleSkill: RoleSkill.RingBellForDismissal,
              skillMateriaId: '',
              skillMaterialUrl: '',
            },
          ],
        },
      },
    ],
  },
};

// 【环节名称】：学生6人上台
// 【学生热区】
// 互动形式：音视频上台
// 热区：6
// AI贴纸：沙漠主题
// -----
// 【环节名称】：拍照合影
// 【学生热区】
// 互动形式：音视频上台
// 热区：6
// AI贴纸：沙漠主题
// 【互动玩法】
// 角色判断：否
// 角色名称：''
// 互动玩法：拍照合影

let w7 = {
  clientConfig: {
    partList: [
      {
        partName: '学生6人上台',
        studentHotArea: {
          count: 6,

          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',
              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',
              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',
              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
          ],
        },
      },
      {
        partName: '拍照合影',
        studentHotArea: {
          count: 6,

          location: [
            {
              id: 'uuid',
              index: 1,
              name: '学生热区_1',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 2,
              name: '学生热区_2',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 3,
              name: '学生热区_3',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 4,
              name: '学生热区_4',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 5,
              name: '学生热区_5',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
            {
              id: 'uuid',
              index: 6,
              name: '学生热区_6',
              hotAreaType: 'student',

              interactionType: InteractionType.VideoAudio,
              aiSticker: AISticker.DesertTheme,
              role: '',
            },
          ],
        },
        partInteractionInfo: {
          // 互动玩法
          playRule: GamePlayInteraction.TakePhotoTogether,
        },
      },
    ],
  },
};

// 【环节名称】：选教授
// 【上台热区】
// 互动指令：1v1上台
// 互动形式：音视频上台
// 热区：1
// 角色：教授
// AI贴纸：教授

let w8 = {
  clientConfig: {
    partList: [
      {
        partName: '选教授',
        stageHotArea: {
          count: 1,
          InteractionCommand: InteractionCommand.DesignatedOnStage,
          location: [
            {
              id: 'uuid',
              index: 1,
              name: '上台热区_1',
              hotAreaType: 'stage',

              interactionType: InteractionType.VideoAudio,
              role: RoleType.Professor,
              aiSticker: AISticker.Professor,
            },
          ],
        },
      },
    ],
  },
};

let s = {
  clientConfig: {
    partList: [
      {
        // 环节1
        location: [
          {
            id: 'uuid',
          },
        ],
      },
      {
        // 环节2
      },
      {
        // 环节3
      },
    ],
  },
  coursewareInfo: {
    width: 1920, // 课件宽度
    height: 1080, // 课件高度
    location: [
      {
        // part1
        uuid1: {
          id: 'uuid',
          index: 1,
          hotAreaType: 'student', // 所属热区 student /teacher / stage / skill
          name: '学生热区_1',
          x: 10,
          y: 10,
          w: 10,
          h: 10,
          rotation: 0,
        },
      },
      {
        //part2
        uuid1: {
          id: 'uuid',
          index: 1,
          hotAreaType: 'student', // 所属热区 student /teacher / stage / skill
          name: '学生热区_1',
          x: 10,
          y: 10,
          w: 10,
          h: 10,
          rotation: 0,
        },
        uuid2: {
          id: 'uuid',
          index: 1,
          hotAreaType: 'stage', // 所属热区 student /teacher / stage / skill
          name: '上台热区_1',
          x: 10,
          y: 10,
          w: 10,
          h: 10,
          rotation: 0,
        },
      },
      {
        // part3
      },
    ],
  },
};
