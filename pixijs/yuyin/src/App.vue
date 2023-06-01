<template>
  <div class="btn" @click="handleRoute('bowen')">波纹</div>
  <div class="btn" @click="handleRoute('game')">游戏</div>
  <div class="btn" @click="handleRoute('base')">基础</div>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleRoute = (params: string) => {
  router.push({
    path: `/${params}`
  });
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.btn {
  width: 40px;
  display: inline-block;
  padding: 5px 10px;
  background-color: beige;
  margin-right: 10px;
  cursor: pointer;
}
div {
  font-size: 20px;
}
</style>

<style lang="scss">
.con-wrapper {
  span,
  i {
    color: red;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
