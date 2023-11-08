import PSPoint from './PSPoint';
import { PSStrokeIface } from './PSStroke';
import pressure from './pressureCapture';
export type FabricPointerEvent = TouchEvent | MouseEvent | PointerEvent;

export interface FabricEvent {
  e: FabricPointerEvent;
  pointer: FabricPointer;
}

export interface FabricPointer {
  x: number;
  y: number;
}

export function isPSStroke(
  object: fabric.Object | fabric.ICollection<any>
): object is PSStrokeIface {
  return object && object['type'] === 'PSStroke';
}

export function isPSPoint(object: any): object is PSPoint {
  return object && object['type'] === 'PSPoint';
}

export function getPressure(
  ev: FabricPointerEvent,
  fallbackValue: number = 0.5
) {
  console.warn('getPressure', ev['touches']);
  if (ev['touches'] && ev['touches'].length > 0) {
    console.error('utils,===', (<TouchEvent>ev).touches[0].force);
    return (<TouchEvent>ev).touches[0].force;
    // console.log(fallbackValue, '==fallbackValue');
  }
  // MouseEvent, PointerEvent (ev.pointerType: "mouse")
  if (ev['pointerType'] === 'mouse' || typeof ev['pressure'] !== 'number') {
    return fallbackValue;
  }
  // PointerEvent (ev.pointerType: "pen" | "touch")
  if (ev['pointerType'] === 'touch' && (<PointerEvent>ev).pressure === 0) {
    return fallbackValue;
  }
  // return (<PointerEvent>ev).pressure;
  return pressure.value;
}
