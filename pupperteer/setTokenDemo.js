const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const token = 'your-jwt-token-here';

  // 在请求拦截中设置 headers
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    const headers = request.headers();
    headers['Authorization'] = `Bearer ${token}`;
    request.continue({ headers });
  });

  await page.goto('https://example.com');

  // 你的其他操作

  await browser.close();
})();

// set localStorage

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const token = 'your-jwt-token-here';

  // 前往目标网站
  await page.goto('https://example.com', { waitUntil: 'networkidle2' });

  // 设置 Local Storage 中的 token
  await page.evaluate((token) => {
    localStorage.setItem('token', token);
  }, token);

  await page.reload({ waitUntil: 'networkidle2' }); // 确保设置生效重新加载页面

  // 你的其他操作

  await browser.close();
})();

// setCookie

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const token = 'your-jwt-token-here';

  // 前往目标网站
  await page.goto('https://example.com', { waitUntil: 'networkidle2' });

  // 设置 Cookie 中的 token
  await page.setCookie({
    name: 'token',
    value: token,
    domain: 'example.com',
  });

  await page.reload({ waitUntil: 'networkidle2' }); // 确保设置生效重新加载页面

  // 你的其他操作

  await browser.close();
})();
