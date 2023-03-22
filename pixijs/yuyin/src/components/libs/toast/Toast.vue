<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isShow" class="ds-toast">
        <p class="de-toast__msg">{{ msg }}</p>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

interface IProps {
  type?: string;
  msg?: string;
  icon?: string;
  duration?: number;
}

withDefaults(defineProps<IProps>(), {
  msg: ''
});

const isShow = ref(true);
onMounted(() => {
  const timer = setTimeout(() => {
    isShow.value = false;
    clearTimeout(timer);
  }, 2 * 1000);
});
</script>

<style scoped lang="scss">
.ds-toast {
  position: fixed;
  bottom: 253px;
  left: 50%;
  transform: translateX(-50%);
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
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
