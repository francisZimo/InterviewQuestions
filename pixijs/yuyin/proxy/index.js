module.exports = {
  '/icenter-go/App/Diary': {
    target: 'http://10.39.250.77:7300/mock/60da935a7bd0c13402ec7f6d/demo',
    pathRewrite: { '^/icenter-go/App/Diary': '' },
    onProxyReq(proxyReq) {
      console.log('path', proxyReq.path);
    },
    onProxyRes(proxyRes) {
      // 添加返回标识，方便判断数据来源
      proxyRes.headers.isMock = 'isMock';
    }
  }
};
