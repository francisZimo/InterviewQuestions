<template>
  <div
    :style="getStyle()"
    class="xueyan-button"
    :class="`xueyan-button--${type}`"
    :disabled="disabled"
    @click="onClick"
  >
    <div class="xueyan-button__content">
      <span class="xueyan-button__text">
        <slot>{{ $slots.default || text }}</slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, CSSProperties } from 'vue';
import { preventDefault } from '../_utils';
import { HTMLElementTagNameMap, ButtonType } from './type';

interface IProps {
  tag: keyof HTMLElementTagNameMap;
  text?: string;
  color?: string;
  plain?: string;
  loading?: boolean;
  disabled?: boolean;
  type: ButtonType;
}

const props = withDefaults(defineProps<IProps>(), {
  tag: 'button',
  type: 'default'
});

const emit = defineEmits(['click']);

function getStyle() {
  const { color, plain } = props;
  if (color) {
    const style: CSSProperties = {
      color: plain ? color : 'white'
    };
    //  Use background instead of backgroundColor to make linear-gradient work
    if (!plain) {
      style.background = color;
    }
    // hide border when color is linear-gradient
    if (color.includes('gradient')) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
    return style;
  }
  return '';
}
function onClick(event: MouseEvent) {
  if (props.loading) {
    preventDefault(event);
  } else if (!props.disabled) {
    emit('click', event);
  }
}
</script>

<style scoped lang="scss">
$xueyan-button-default-height: 40px;
$xueyan-button-default-width: 126px;
$xueyan-button-default-font-size: 15px;
$xueyan-button-default-line-height: 40px;
$xueyan-button-default-border-radius: 20px;
$xueyan-button-default-color: #ffffff;
$xueyan-button-primary-color: #e02727;
$xueyan-button-common-color: #333333;
$xueyan-button-gray-color: #999999;

.xueyan-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: $xueyan-button-default-height;
  width: $xueyan-button-default-width;
  margin: 0;
  padding: 0;
  font-size: $xueyan-button-default-font-size;
  line-height: $xueyan-button-default-line-height;
  text-align: center;
  border-radius: $xueyan-button-default-border-radius;
  cursor: pointer;
  -webkit-appearance: none;
  // 禁止文字选中
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  &__text {
  }
  &--default {
    color: $xueyan-button-common-color;
    background-color: $xueyan-button-gray-color;
  }
  &--primary {
    color: $xueyan-button-default-color;
    background-color: $xueyan-button-primary-color;
  }
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
