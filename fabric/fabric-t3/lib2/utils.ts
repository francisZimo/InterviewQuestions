import PSPoint from './PSPoint';
import { PSStrokeIface } from './PSStroke';
import globalPressure from './pressureCapture';
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

export function getPressure(ev: FabricPointerEvent, fallbackValue: number = 1) {
  console.log('getPressure===');
  // TouchEvent
  if (ev['touches'] && ev['touches'].length > 0) {
    console.log((<TouchEvent>ev).touches[0].force, '==ev.touches[0].force==');
    return (<TouchEvent>ev).touches[0].force;
  }
  // MouseEvent, PointerEvent (ev.pointerType: "mouse")
  if (ev['pointerType'] === 'mouse' || typeof ev['pressure'] !== 'number') {
    console.log(fallbackValue, '==fallbackValue1==');
    return fallbackValue;
  }
  // PointerEvent (ev.pointerType: "pen" | "touch")
  if (ev['pointerType'] === 'touch' && (<PointerEvent>ev).pressure === 0) {
    console.log(fallbackValue, '==fallbackValue2==');
    return fallbackValue;
  }
  const pressure = globalPressure.value;
  console.log(pressure, '===全局', ev);
  console.log('最终', (<PointerEvent>ev).pressure);
  return (<PointerEvent>ev).pressure;

  // return (<PointerEvent>ev).pressure;
}
