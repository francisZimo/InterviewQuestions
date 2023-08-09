<template>
  <div class="empty-page">
    <Empty :image="image" :imageSize="imageSize" :description="description">
      <template #bottom>
        <div class="retryButton" @click="retryButton">
          {{ btnText }}
        </div>
      </template>
    </Empty>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted } from 'vue';
import Empty, { EmptyProps } from './Empty.vue';
import { state } from './index';
import { showLoading } from '../loading/useLoading';
export interface EmptyPageProps extends EmptyProps {
  btnText: string;
  onClickBtn: (params?: any) => unknown;
}

const props = withDefaults(defineProps<EmptyPageProps>(), {
  image: 'error',
  description: '加载失败，请检查网络',
  btnText: '重试'
});

function retryButton() {
  showLoading('');

  props?.onClickBtn?.();
}
onMounted(() => {
  state.isShow = true;
});
</script>

<style scoped lang="scss">
.empty-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: #fff;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  .retryButton {
    margin: 0 auto;
    width: 140px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    background: #eb002a;
    border-radius: 20px;
  }
}

@media screen and (min-width: 768px) {
  .empty-page {
    .retryButton {
      margin: 0 auto;
      width: 180px;
      height: 50px;
      line-height: 50px;
      font-size: 21px;
      border-radius: 30px;
      &:hover {
        opacity: 0.7;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>
