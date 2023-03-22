// 帮助我们减少校验类型

import { PropType } from 'vue';

export const unknownProp = (null as unknown) as PropType<unknown>;

export const makeStringProp = <T>(defaultValue: T) => ({
  type: (String as unknown) as PropType<T>,
  default: defaultValue
});

export const makeNumberProp = <T>(defaultValue: T) => ({
  type: Number,
  default: defaultValue
});

export const numericProp = [Number, String];
export const makeNumericProp = <T>(defaultValue: T) => ({
  type: numericProp,
  default: defaultValue
});

export const makeBooleanProp = (defaultValue: boolean) => ({
  type: Boolean,
  default: defaultValue
});

export const makeArrayProp = <T>() => ({
  type: Array as PropType<Array<T>>,
  default: () => []
});

export const makeObjectProp = <T>(defaultValue?: T) => ({
  type: Object as PropType<T>,
  default: () => defaultValue || {},
  require: true as const
});

export const makeRequiredProp = <T>(type: T) => ({
  type,
  require: true as const
});

export const makeFunctionProp = (defaultFunc?: () => void) => ({
  type: Function,
  default: defaultFunc
});
