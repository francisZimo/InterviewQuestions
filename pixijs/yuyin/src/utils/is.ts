const userAgent = navigator.userAgent.toLowerCase();

const isInApp = /jzh$/.test(userAgent);
const isWeiXin = !!userAgent.match(/MicroMessenger/i);
const isQQ = !!userAgent.match(/QQ\/[0-9]/i);
const isIos = userAgent.match(/(iphone|ipod|ipad)/i);
const isAndroid = !!userAgent.match(/(android)/i);

const isMac = /macintosh|mac os x/i.test(userAgent);
const isWindows = /windows/.test(userAgent);

const isIpad =
  (/macintosh|mac os x/i.test(userAgent) && window.screen.height > window.screen.width && !userAgent.match(/(iPhone\sOS)\s([\d_]+)/)) || userAgent.match(/(iPad).*OS\s([\d_]+)/);

const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(userAgent) || /jzh$/.test(userAgent) || isIpad;

const matchResult = userAgent.match(/cpu iphone os (.*?) like mac os/i);
const isIos10 = matchResult ? parseInt(matchResult[1].replace(/_/g, '.')) <= 10 : false;

const isApp = isInApp;

export { isInApp, isWeiXin, isQQ, isIos, isAndroid, isApp, isIos10, isMobile, isMac, isWindows };
