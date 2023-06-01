// RemoveListenerFn 需要移除的监听事件
export type RemoveListenerFn = () => void;
export type Area = 'cover' | 'contain';
/**
 * @method pageRem
 * @description H5页面设置rem
 * @param {number} W UI图层宽度
 * @param {number} H UI图层高度
 * @param {string} area cover: 暂时无用；contain: 强制宽度撑满(多用于分享页)
 * @returns {Function} 需要移除的监听事件
 */

function pageRem(
  W = 667,
  H = 375,
  area: Area = 'cover',
  isWatchResize = true
): RemoveListenerFn {
  const resizeEvent =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  const WHRatio = W / H;
  const HWRatio = H / W;
  const docEle = document.documentElement;
  function refreshPage() {
    if (!docEle) {
      return;
    }
    const clientWidth = docEle.clientWidth;
    const clientHeight = docEle.clientHeight;
    const ratio = clientWidth / clientHeight;

    let h;
    if (ratio < WHRatio || area === 'contain') {
      h = clientWidth * HWRatio;
    } else {
      h = clientHeight;
    }

    // 设置rem
    docEle.style.fontSize = `${100 * (h / H)}px`;
  }
  refreshPage();
  if (isWatchResize) {
    window.addEventListener(resizeEvent, refreshPage, false);
  }
  return () => {
    isWatchResize
      ? window.removeEventListener(resizeEvent, refreshPage, false)
      : () => {};
  };
}
export default pageRem;
