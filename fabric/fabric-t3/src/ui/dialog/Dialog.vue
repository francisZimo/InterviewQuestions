<template>
  <div
    class="xueyan-dialog"
    :class="state.show ? 'dialog-mask-enter-active' : 'dialog-mask-leave-active'"
    @touchmove.prevent
    @touchstart.stop
    @touchend.stop
    @click="closeDialog(false)"
  >
    <div class="xueyan-dialog-box" :class="{ pc: !isMobile, 'viewport-ignore-xueyan-dialog-box': !isMobile }">
      <div class="xueyan-dialog-header">
        <slot name="title"
          ><h2 class="title">{{ title }}</h2></slot
        >
      </div>
      <div class="xueyan-dialog-content">
        <div v-if="isHtml" class="xueyan-dialog-message" :innerHTML="content"></div>
        <div v-else class="xueyan-dialog-message">{{ content }}</div>
      </div>
      <div class="xueyan-dialog-footer" :class="{ 'xueyan-dialog-footer--center': showCenter }">
        <Button v-if="showLeft" class="btn left-btn" @click.stop="handleLeftFunc">{{ leftText }}</Button>
        <Button v-if="showCenter" class="btn center-btn" @click.stop="handleCenterFunc">{{ centerText }}</Button>
        <Button v-if="showRight" class="btn right-btn" @click.stop="handleRightFunc">{{ rightText }}</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { isMobile } from '../_utils';
import Button from '../button/Button.vue';
import { state, closeDialog } from './index';

interface IProps {
  title: string;
  content: string;
  isHtml: boolean;
  showLeft?: boolean;
  showRight?: boolean;
  showCenter?: boolean;
  leftText?: string;
  rightText?: string;
  centerText?: string;
  onLeft?: (params?: unknown) => unknown;
  onCenter?: (params?: unknown) => unknown;
  onRight?: (params?: unknown) => unknown;
}

const props = withDefaults(defineProps<IProps>(), {
  title: '',
  content: '',
  isHtml: false,
  showLeft: false,
  showRight: false,
  showCenter: true,
  leftText: '取消',
  centerText: '我知道了',
  rightText: '确定'
});

function handleLeftFunc() {
  props?.onLeft?.();
  closeDialog();
}

function handleCenterFunc() {
  props?.onCenter?.();
  closeDialog();
}

function handleRightFunc() {
  props?.onRight?.();
  closeDialog();
}
</script>

<style scoped lang="scss">
.xueyan-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  font-size: 20px;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 10 * 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  &-box {
    position: relative;
    max-height: 80vh;
    min-height: 120px;
    width: 300px;
    padding: 24px 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transform-origin: center;
    box-sizing: border-box;
    border-radius: 12px;

    &.viewport-ignore-xueyan-dialog-box.pc {
      max-height: 80vh;
      min-height: 120px;
      width: 300px;
      padding: 24px 20px;
      border-radius: 12px;

      .xueyan-dialog-header {
        line-height: 24px;
        width: 268px;

        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 500;
        margin-bottom: 14px;
        h2.title {
          font-size: 17px;
          line-height: 24px;
        }
      }

      .xueyan-dialog-content {
        width: 268px;
        font-size: 15px;
        line-height: 24px;
        font-weight: 400;
        .xueyan-dialog-message {
          min-height: 26px;
          line-height: 24px;
        }
      }

      .xueyan-dialog-footer {
        margin-top: 28px;
        width: 100%;
        height: 40px;
        .btn {
          width: 126px;
          height: 40px;
          line-height: 40px;
          font-size: 15px;
          font-weight: 400;
          border-radius: 20px;
        }
      }
    }
  }
  &-header {
    line-height: 24px;
    width: 268px;

    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 500;
    color: #333;
    text-align: center;
    margin-bottom: 14px;
    h2.title {
      font-size: 17px;
      line-height: 24px;
      text-align: left;
      display: inline-block;
    }
  }
  &-content {
    width: 268px;
    font-size: 15px;
    line-height: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333;
    flex: 1;
    overflow: auto;
    display: flex;
  }
  &-message {
    flex: 1;
    min-height: 26px;
    line-height: 24px;
    display: inline-block;
  }
  &-footer {
    margin-top: 28px;
    width: 100%;
    height: 40px;
    display: flex;
    overflow: hidden;
    user-select: none;
    justify-content: space-between;
    &--center {
      justify-content: center;
    }
    .btn {
      width: 126px;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      text-align: center;
      border-radius: 20px;
      cursor: pointer;
      // 禁止文字选中
      -moz-user-select: none;
      /*火狐*/
      -webkit-user-select: none;
      /*webkit浏览器*/
      -ms-user-select: none;
      /*IE10*/
      -khtml-user-select: none;
      /*早期浏览器*/
      user-select: none;
    }

    .left-btn {
      color: #333333;
      background: rgba(#999999, 0.1);
    }

    .right-btn,
    .center-btn {
      background: #f93834;
      color: #ffffff;
    }
  }
}

.dialog-mask-enter-active {
  animation: fadeIn 0.15s linear both;
}

.dialog-mask-leave-active {
  animation: fadeOut 0.15s linear both;
}

.dialog-enter-active {
  animation: dialogIn 0.35s cubic-bezier(0.3, 1.3, 0.3, 1) both;
}

.dialog-leave-active {
  animation: dialogOut 0.35s cubic-bezier(0.3, 1.3, 0.3, 1) both;
}

@keyframes fadeIn {
  0% {
    background: rgba($color: #000000, $alpha: 0);
    // opacity: 0;
  }

  100% {
    background: rgba($color: #000000, $alpha: 0.49);
  }
}
</style>
