let s = {
  answerLogs: [
    {
      commonStuAnswer: {
        songName: 'xxx',
        songId: 'xxx',
        score: 100,
        asrResult: 'a b c'
      }
    }
  ]
};

let c = {
  type: 'answer',
  data: {
    answerData: [],
    isComplete: true
  }
};

let s1 = {};
// transmitToCourseware({ type: 'courseToWeb', data: { type: 'getConfigData' } });

let w = {
  type: 'courseToWeb',
  data: { type: 'getConfigData', data: {} }
};

let e = {
  type: 'webToCourse',
  data: {
    type: 'onRecdConfigData',
    data: {
      mode: 1, // 1正常答题 2 订正(answerInfo只有错题信息) 3 解析
      userInfo: {
        name: 'xx',
        avatarPath: 'xx',
        stuId: 111
      },
      answerInfo: [],
      // ------------------------------上面为历史逻辑
      rtcInfo: {
        // rtc录屏配置信息
        callbackId: '20ac4180-2001-4dcd-a01c-711d2f6df1c3-0',
        courseId: 367395,
        linkType: '16',
        maxIdleTime: 30,
        planId: 1742991,
        stuCouId: 10140490,
        stuId: 58079
      },
      asrInfo: {
        // asr模型信息
        akId: '1000000014',
        domin: 'wss://speech-test.tal.com/v1/ws',
        expire: 1745387667,
        payloadList: [
          {
            cluster: 'volcengine',
            data_time: 100,
            extra: {
              mode: 'stream',
              request: {
                corpus: {
                  context: '{"hotwords":[{"word":"业务热词"},{"word":"学科热词"}]}'
                },
                enable_ddc: true,
                enable_itn: true,
                enable_speaker_info: true
              },
              resource_id: 'volc.bigasr.sauc.duration'
            },
            format: 'pcm',
            hot_words: null,
            language: 'zh-CN',
            model: 'bigmodel',
            sample_rate: 16000
          },
          {
            cluster: 'aliyun',
            data_time: 100,
            extra: null,
            format: 'pcm',
            hot_words: [
              {
                weight: 1,
                word: '业务热词'
              },
              {
                weight: 1,
                word: '学科热词'
              }
            ],
            language: 'zh-CN',
            model: 'bigmodel',
            sample_rate: 16000
          }
        ],
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiIxMDAwMDAwMDE0Iiwibm9uY2UiOiJxZkVrQkM5UCIsImNvdW50IjoxMDAwMCwiaXNzIjoiZ28tdHVyYm8iLCJleHAiOjE3NDUzODc2Njd9.kERSutnN-KGZu0xPQ05C8L8qu58h6iGNzBeazXkk24Y'
      }
    }
  }
};

let s2 = {
  type: 'openVideoShare',
  data: {}
};

// 课件=>H5
let a1 = {
  type: 'loadCourseware',
  data: {
    url: '',
    hide: 0 // 0 | 1
  }
};

let a11 = {
  type: 'answer',
  data: [
    {
      type: 3, // 1：答题正误类，2：游戏完成类，3：测评类：语音选择类、测评分数类 4：语音发言类
      sentenceNo: 1, // <int>
      score: 100, // <int>
      voiceTime: 1, // <int>开口时长（秒）
      accurateScore: 30, // <int>
      fluencyScore: 40, // <int>
      pageId: 0, // <int>
      rawSentence: '你好，北京天安门,我爱伟大毛主席', // <string>
      termsScore: ['你:0，好:0'],
      isRight: [0], //0:错；1：对；2：半对半错
      originHotWords: [], // 关键词
      stuHitHotWord: [] // 命中关键词
    }
  ],
  extra: {
    gameScore: 80
  }
};

let c1 = {
  type: 'answer',
  data: {
    answerData: [],
    isComplete: true
  }
};

let c2 = {
  type: 'courseToWeb',
  data: {
    type: 'answer',
    data: {
      //有效数据
    }
  }
};
