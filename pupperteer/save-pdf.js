// 无头浏览器将一个网页保存为pdf

const puppeteer = require('puppeteer');

const savePdf = async (url, path) => {
  // 启动浏览器
  const browser = await puppeteer.launch();

  // 打开页面
  const page = await browser.newPage();

  // 设置浏览器窗口大小
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  // 地址栏输入网址
  await page.goto(url, {
    waitUntil: 'networkidle', // 等待网络空闲再执行
  });

  // 保存为pdf
  await page.pdf({
    path,
    format: 'A4',
  });

  // 关闭浏览器
  await browser.close();
};

module.exports = savePdf;

if (require.main === module) {
  savePdf('https://www.baidu.com', 'baidu.pdf');
}
