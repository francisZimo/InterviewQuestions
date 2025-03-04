// 将网页保存为图片
import puppeteer, { KnownDevices } from 'puppeteer';
// const puppeteer = require('puppeteer');

const savePdf = async (url, path) => {
  // 启动浏览器
  const browser = await puppeteer.launch({
    defaultTimeout: 100000,
  });

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
    timeout: 30000,
  });

  setTimeout(async () => {
    // 保存为pdf
    await page.pdf({
      path,
      format: 'A4',
      scale: 1,
      quality: 0.5,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      printBackground: true,
      headerTemplate: '<div></div>',
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
  }, 6000);

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
// let url = 'http://127.0.0.1:5500/multiPaper.html';
// let url = 'http://www.weibo.com';
// let url =
//   'http://10.8.163.9:8080/#/generatePdf?classId=250597&courseId=376842&stuCouId=10177965&stuId=58781&createTimeStamp=1737714395';

//1739002236

// 'http://10.8.163.49:8080/#/generatePdf?classId=250597&courseId=376842&stuCouId=10177965&stuId=58781&createTimeStamp=1739002236';
let url =
  'http://127.0.0.1:8080/#/generatePdf?classId=250597&courseId=376842&stuCouId=10177965&stuId=58781&createTimeStamp=1739002236';

// let url = 'http://www.baidu.com';

url = 'http://127.0.0.1:5502/multiPaper.html';

savePdf(url, '测试webp-quality30webp组合压缩.pdf');
