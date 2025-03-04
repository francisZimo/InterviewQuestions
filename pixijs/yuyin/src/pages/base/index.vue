<template>
  <div class="child-opt">
    <button class="btn" @click="handleRoute('mask')">mask</button>
    <button class="btn" @click="handleRoute('spine')">spine</button>
    <button class="btn" @click="handleRoute('spine2')">spine2</button>
    <button class="btn" @click="handleRoute('spine3')">spine3</button>
  </div>

  <router-view></router-view>
</template>

<script setup lang="ts">
import {} from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleRoute = (params: string) => {
  router.push({
    path: `/base/${params}`
  });
};
</script>

<style lang="scss" scoped>
.child-opt {
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
