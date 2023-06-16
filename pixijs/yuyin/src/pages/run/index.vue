<template>
  <div ref="conDom"></div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';
import Main from './logic/main.js';
const conDom: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  Main(conDom.value);
});
</script>

<style lang="scss" scoped>
.conDom {
  background-color: #000;
}
</style>
