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
  // '/xxx': {
  //   target: 'https://i.xueersi.com',
  //   secure: false,
  //   changeOrigin: true,
  //   // cookieDomainRewrite: {
  //   //   '*': '10.73.13.227' // 去浏览器中把需要携带的cookie 域都设置成 自己dev页面的域(ip也行)
  //   // },
  //   onProxyReq(proxyReq) {
  //     proxyReq.setHeader(
  //       'Cookie',
  //       'tal_token=' +
  //         'tal173ATbSM4VhHYiPhe3xu4udb47yebbB_richNNbIgNoS32k-wrX7bxEGeV11aXsGIlpw1viYHuyrbxrPga9nyCHTI-vDbrKsRYKmTUNL199aiR0OJ7CKJ2oKmHFEqcaltlFSjq4JNT7WrSXptsLT4pcM4jVeWhM83k_B_8g_ydYwFEeaCqIyk9XRhOS949nxX-YwNRLi2klYn7O6kqt8_YpHf2CiUy_H9sLeL-_sZFe_5WYNASam9mA0_KN-YhPaZ0MmNbPbsLyaoObyQd9Isr4DOteSYOi5zDNYUMs4V-YcvRZn'
  //     );
  //   },
  //   // pathRewrite: { '^/api': '/' },
  //   onProxyRes: function (proxyRes, req, res) {
  //     // 添加返回标识，方便判断数据来源
  //     proxyRes.headers.isProxy = 'isProxy';
  //     // const cookies = proxyRes.headers['set-cookie'];
  //     // const cookieRegex = /Domain=\.?xueersi.com/i; // 返回的cookie中提取domain
  //     // //修改cookie Path
  //     // if (cookies) {
  //     //   const newCookie = cookies.map(function (cookie) {
  //     //     if (cookieRegex.test(cookie)) {
  //     //       // 将domain设置为localhost
  //     //       return cookie.replace(cookieRegex, 'Domain=localhost');
  //     //     }
  //     //     return cookie;
  //     //   });
  //     //   delete proxyRes.headers['set-cookie'];
  //     //   proxyRes.headers['set-cookie'] = newCookie;
  //     // }
  //   }
  // }
};
