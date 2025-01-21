// 将网页保存为图片
import puppeteer, { KnownDevices } from 'puppeteer';
// const puppeteer = require('puppeteer');

const savePdf = async (url, path) => {
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

  // 地址栏输入网址 等待网络空闲再执行
  await page.goto(url, {
    waitUntil: 'networkidle0',
  });

  setTimeout(async () => {
    // 保存为pdf
    await page.pdf({
      path,
      format: 'A4',
      displayHeaderFooter: true,
      printBackground: true,
      headerTemplate: '<div></div>',
      //   headerTemplate: `
      //   <div style="font-size: 10px; width: 100%; text-align: center; margin-top: 20px;">
      //     <span class="title">标题: {{title}}</span>
      //     <br/>
      //     <span class="url">URL: {{url}}</span>
      //     <br/>
      //     <span class="date">打印日期: {{date}}</span>
      //   </div>
      // `,
      footerTemplate: `
      <div style="font-size: 10px; width: 100%; text-align: center; margin-bottom: 10px;">
        页码: <span class="pageNumber">{{pageNumber}}</span> / 总页数: <span class="totalPages">{{totalPages}}</span>
        <hr/>
        <div style="width:100%; margin:0 auto; height:4px; padding:0 50px; border-top: 1px #c07d3c dotted; border-bottom: 1px #c07d3c solid;"></div> 
      </div>
    `,
      margin: {
        top: '50px',
        bottom: '50px',
        left: '50px',
        right: '50px',
      },
    });

    // 关闭浏览器
    await browser.close();
  }, 5000);
  // // 保存为pdf
  // await page.pdf({
  //   path,
  //   format: 'A4',
  //   margin: {
  //     top: '20px',
  //     bottom: '20px',
  //     left: '20px',
  //     right: '20px',
  //   },
  // });

  // // 关闭浏览器
  // await browser.close();
};

// module.exports = saveScreenshot;
// http://127.0.0.1:5500/multiPaper.html
let url = 'http://127.0.0.1:5500/multiPaper.html';
// let url = 'http://www.weibo.com';

savePdf(url, '试题5.pdf');
