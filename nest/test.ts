enum WordRole { // 世界
  ClassMonitor = 'classMonitor', // 班长
  ClassRepresentative = 'classRepresentative', // 课代表
  TeachingAssistant = 'teachingAssistant' // 助教
}

enum PlotRole { // 剧情角色
  Professor = 'professor' // 教授
}

enum RoleSkill {
  OpenBlindBox = 'OpenBlindBox', // 开盲盒
  OpenTreasureBox = 'OpenTreasureBox', // 开宝箱
  RingBellForDismissal = 'RingBellForDismissal', //打下课铃
  DistributeCards = 'DistributeCards' //发卡
}

// 开盲盒素材
enum BlindBoxMaterial {
  Doll = 'doll', // 玩偶
  Car = 'car' // 小车
}

// 开宝箱素材
enum TreasureBoxMaterial {
  Gold = 'gold', // 金子
  Silver = 'silver' // 银子
}

// 发卡素材
enum CardMaterial {
  Red = 'red', // 红色
  Blue = 'blue' // 蓝色
}

enum AISticker {
  DesertTheme = 'desertTheme', // 沙漠主题
  ProfessorTheme = 'professor' //教授贴纸
}

enum DesertTheme {
  Cactus = 'cactus', // 仙人掌
  Camel = 'camel' // 骆驼
}

enum ProfessorTheme {
  Glasses = 'glasses', // 眼镜
  Book = 'book' // 书
}

let dataInfo = [
  {
    name: '环节1',
    width: 1920,
    height: 1080,
    themeId: 1000,
    placeholders: {
      '7f6a1b2c3d4e5f6a': {
        name: '学生热区1',
        hotAreaType: 'student',
        id: '7f6a1b2c3d4e5f6a',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        rotation: 30
      },
      '7f6a1b2c3d4e5f7a': {
        name: '学生热区1',
        hotAreaType: 'student',
        id: '7f6a1b2c3d4e5f7a',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        rotation: 30
      }
    },
    part: {}
  }
];

let test = [
  {
    name: '环节1',
    width: 1920,
    height: 1080,
    themeId: 1000,
    placeholders: {
      '7f6a1b2c3d4e5f6a': {
        name: '学生热区1',
        hotAreaType: 'student',
        id: '7f6a1b2c3d4e5f6a',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        rotation: 30
      },
      '7f6a1b2c3d4e5f7a': {
        name: '学生热区1',
        hotAreaType: 'student',
        id: '7f6a1b2c3d4e5f7a',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        rotation: 30
      }
    },
    part: {
      partList: [
        {
          // 环节1
          studentHotArea: {
            location: [
              {
                id: 'uuid'
              }
            ]
          },
          stageHotArea: {
            location: [
              {
                id: 'uuid'
              }
            ]
          },
          skillHotArea: {
            location: [
              {
                id: 'uuid'
              }
            ]
          }
        },
        {
          // 环节2
        },
        {
          // 环节3
        }
      ]
    }
  }
];
