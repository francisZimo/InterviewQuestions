<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="ds-loading" @touchmove.prevent>
        <div class="ds-loading-icon">
          <img class="ds-loading-icon__idol" src="./assets/idol.png" />
          <img class="ds-loading-icon__circle" src="./assets/circle.png" />
        </div>
        <p class="ds-loading__msg">{{ msg }}</p>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
interface IProps {
  msg?: string;
}

withDefaults(defineProps<IProps>(), {
  msg: '加载中...'
});
</script>

<style scoped lang="scss">
.ds-loading,
.viewport-ignore-ds-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.06);
  background: #fff;
  border-radius: 12px;
  padding: 15px 0 13px;
  z-index: 10;
  &-icon {
    width: 50px;
    height: 50px;
    position: relative;
    &__idol {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    &__circle {
      position: absolute;
      width: 100%;
      height: 100%;
      animation: circleRound 0.7s infinite;
    }
  }
  &__msg {
    text-align: center;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 18px;
  }
}

@keyframes circleRound {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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
