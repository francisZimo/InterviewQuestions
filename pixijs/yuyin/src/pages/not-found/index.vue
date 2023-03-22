<template>
  <div class="empty viewport-ignore-empty">
    <div class="empty-box">
      <div class="empty-box__image">
        <img src="./assets/net_error.png" />
      </div>
      <div class="empty-box__description">
        <p>出现错误，请重试</p>
      </div>
      <div class="empty-box__bottom" @click="handleRetry">重试</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { isApp } from '@/utils';

const router = useRouter();

function handleRetry() {
  router.go(0);
}
</script>

<style scoped lang="scss">
.empty,
.viewport-ignore-empty {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #ffffff;
  .empty-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &__image {
      width: 250px;
      height: auto;
      img {
        width: 100%;
        height: auto;
      }
    }
    &__description {
      padding: 12px 0 20px 0;
      color: #5b6169;
      font-size: 14px;
      line-height: 14px;
    }
    &__bottom {
      margin: 0 auto;
      background: #f93834;
      border-radius: 20px;
      padding: 10px 40px;
      font-size: 15px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 21px;
      white-space: nowrap;
    }
  }

  /* @media screen and (min-width: 768px) {
    .empty-box {
      width: 375px;
      &__image {
        width: 100%;
        img {
          width: 100%;
          height: 1000%;
        }
      }
      &__description {
        padding: 18px 0 30px 0;
        font-size: 21px;
        line-height: 21px;
        color: #5b6169;
      }
      &__bottom {
        margin: 0 auto;
        background: #f93834;
        border-radius: 20px;
        padding: 10px 40px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 21px;
        white-space: nowrap;
      }
    }
  } */
}
</style>
