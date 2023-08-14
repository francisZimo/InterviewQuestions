<template>
  <div class="card" :style="style">
    <div class="card-header">
      <div class="card-header-left">
        <img v-if="iconUrl" draggable="false" class="card-header-left_icon" :src="iconUrl" alt="" />
        <div class="card-header-left_title">{{ title }}</div>
        <img v-if="isMark" draggable="false" class="card-header-left_mark" :src="markUrl" alt="" @click="onClickMark" />
      </div>
      <div v-if="rightStatus" class="card-header-right" @click="onClickDetail">
        <p>{{ rightText }}</p>
        <img class="card-header-right_icon" src="./assets/arrow_icon_right.png" alt="right" />
      </div>
    </div>
    <div class="card-main" :style="mainStyle">
      <slot />
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, onMounted } from 'vue';
import { debounce } from '@/utils';
import markUrl from './assets/question_mark.svg';

interface IProps {
  iconUrl: string; //图标url
  title: string; //模块名称
  isMark: boolean; //是否显示问号
  markUrl: string; //问号图标链接
  rightStatus: boolean; //右侧tip状态
  rightText: string; //右侧文案
  style?: Record<string, any>;
  mainStyle?: Record<string, any>;
}
withDefaults(defineProps<IProps>(), {
  iconUrl: '',
  isMark: false,
  markUrl,
  rightStatus: false,
  rightText: '查看详情'
});
const emit = defineEmits(['handleShowMarkDetail', 'handleShowDetail', 'mounted']);

onMounted(() => {
  emit('mounted');
});
// 点击问号的事件
function onClickMark() {
  debounce(() => emit('handleShowMarkDetail'), 500, true)();
}
function onClickDetail() {
  debounce(() => emit('handleShowDetail'), 500, true)();
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.card {
  margin: 0 auto;
  margin-top: 12px;
  padding: 16px 16px 16px 15px;
  width: 345px;
  background: #fffffe;
  border-radius: 16px;
  box-sizing: border-box;
  &-header {
    height: 28px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &-left {
      display: flex;
      align-items: center;
      &_icon {
        display: block;
        width: 28px;
        height: 28px;
      }
      &_title {
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 25px;
        margin-left: 5px;
        margin-right: 3px;
        white-space: nowrap;
      }
      &_mark {
        cursor: pointer;
        width: 24px;
        height: 24px;
        display: block;
      }
    }
    &-right {
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      p {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 19px;
        margin-right: 7px;
      }

      &_icon {
        width: 6px;
        height: 10px;
      }
    }
  }
  &-main {
    margin-top: 12px;
    width: 100%;
  }
}
</style>
