import puppeteer, { KnownDevices } from 'puppeteer';
//Puppeteer 库
// const puppeteer = require('puppeteer')
//以 headed 模式启动浏览器
puppeteer.launch({ headless: false }).then(async (browser) => {
  //浏览器新页面
  const page = await browser.newPage();
  //将设备设置为 iPhone X
  const m = KnownDevices['iPhone X'];
  //模拟 iPhoneX
  await page.emulate(m);
  //启动 URL
  await page.goto('http://www.weibo.com', {
    waitUntil: 'networkidle0',
  });

  // 查看图片数量
  const imageLinks = await page.evaluate(() => {
    const images = document.querySelectorAll('img');
    return Array.from(images).map((img) => img.src);
  });

  console.log(imageLinks);

  //捕获模拟设备的屏幕截图
  await page.screenshot({ path: 'iPhoneDevice.png', fullPage: true });
  //浏览器关闭
  await browser.close();
});
