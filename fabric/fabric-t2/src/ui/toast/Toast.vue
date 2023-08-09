<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="ds-toast">
        <p>{{ props.msg }}</p>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

export interface ToastProps {
  msg?: string;
  duration?: number;
}

export interface IProps extends ToastProps {
  close: () => void;
  msg?: string;
  duration?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  msg: '网络异常，请稍后再试',
  duration: 2
});

onMounted(() => {
  const timer = setTimeout(() => {
    props.close && props.close();
    clearTimeout(timer);
  }, props.duration * 1000);
});
</script>

<style scoped lang="scss">
@import '../_styles/animation.scss';
.ds-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  padding: 16px 12px;
  text-align: center;
  font-size: 17px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  z-index: 10 * 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-width: 100px;
  max-width: 240px;
  &__msg {
    width: 100%;
    height: 100%;
    text-align: center;
    width: fit-content;
  }
}
</style>
