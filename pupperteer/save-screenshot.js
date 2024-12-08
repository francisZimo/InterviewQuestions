// 将网页保存为图片
import puppeteer, { KnownDevices } from 'puppeteer';
// const puppeteer = require('puppeteer');

const saveScreenshot = async (url, path) => {
  // 启动浏览器
  const browser = await puppeteer.launch();

  // 打开页面
  const page = await browser.newPage();

  // 获取内置的设备描述符
  const devices = KnownDevices['iPhone X'];

  // 模拟设备
  await page.emulate(devices);

  // 设置浏览器UA
  await page.setUserAgent('jzh Mobile iPhone');

  // 设置浏览器窗口大小
  await page.setViewport({
    width: 750,
    height: 1334,
  });

  // 地址栏输入网址
  await page.goto(url);

  // 保存为图片
  await page.screenshot({
    path,
    fullPage: true,
  });

  // 关闭浏览器
  await browser.close();
};

// module.exports = saveScreenshot;

saveScreenshot('baidu.com', 'baidu.png');

// if (require.main === module) {

// }
