<template>
  <div class="" @click="clickAbout">About</div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import { clickMsg } from '@/utils/logger';
// 如果组件文件名和name同名，则此处不用写defineComponent
defineComponent({
  name: 'AboutPage'
});
const clickAbout = () => {
  clickMsg('clickAbout', { test: undefined });
};
</script>

<style lang="scss"></style>
