interface Pointer {
  x: number;
  y: number;
}

interface Slot {
  bone: {
    worldX: number;
    worldY: number;
  };
  attachment: {
    width: number;
    height: number;
    scaleX: number;
    scaleY: number;
    x: number;
    y: number;
  };
}

interface SpineInfo {
  x: number; // spine在stage中的x坐标
  y: number; // spine在stage中的y坐标
  scale: number; // spine在stage中的缩放比例
}

type Polygon = Pointer[];
type Bounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * @description: 是否命中指定区域，目前是矩形区域
 * @param point 点坐标 {x: number, y: number}
 * @param polygon 顶点坐标 [{x: number, y: number}]
 * @returns boolean
 */
const isPointInPolygon = (point: Pointer, polygon: Polygon) => {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > point.y !== yj > point.y && point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
};

/**
 * @description: 生成矩形区域的四个顶点坐标
 * @param bounds
 * @returns [{x,y},...]
 */

const makePolygon = (bounds: Bounds) => {
  return [
    { x: bounds.x, y: bounds.y },
    { x: bounds.x + bounds.width, y: bounds.y },
    { x: bounds.x + bounds.width, y: bounds.y + bounds.height },
    { x: bounds.x, y: bounds.y + bounds.height },
  ];
};

/**
 * @description: 判断是否点击到指定的slot
 * @param slot slot信息
 * @param pointer 点击坐标
 * @param spineInfo spine信息 {x:200, y:200, scale:1} xy为spine在stage中的坐标，scale为spine在stage中的缩放比例
 * @returns boolean
 */
const isHitSlot = (slot: Slot, pointer: Pointer, spineInfo: SpineInfo) => {
  if (!slot || !pointer) {
    console.error('参数无效');
    return false;
  }
  if (slot.bone && slot.attachment) {
    const attachmentInfo = slot.attachment;
    const boneInfo = slot.bone;
    // 考虑到骨骼的缩放
    const attachmentWorldBounds = {
      width: attachmentInfo.width * attachmentInfo.scaleX * spineInfo.scale,
      height: attachmentInfo.height * attachmentInfo.scaleY * spineInfo.scale,
      x:
        spineInfo.x +
        (boneInfo.worldX + attachmentInfo.x - (attachmentInfo.width * attachmentInfo.scaleX) / 2) * spineInfo.scale,
      y:
        spineInfo.y +
        (boneInfo.worldY + attachmentInfo.y - (attachmentInfo.height * attachmentInfo.scaleY) / 2) * spineInfo.scale,
    };
    const polygonBounds = makePolygon(attachmentWorldBounds);
    return isPointInPolygon(pointer, polygonBounds);
  }
  return false;
};

export { isHitSlot };
