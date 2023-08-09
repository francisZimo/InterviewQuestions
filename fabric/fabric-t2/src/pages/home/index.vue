<template>
  <div class="">Home</div>
  <components-a />
</template>

<script lang="ts" setup>
import ComponentsA from './components/ComponentsA.vue';

interface Props {
  msg: string;
}

// const props = defineProps<Props>();
// 对于props需要赋默认值，可以使用withDefaults
withDefaults(defineProps<Props>(), {
  msg: 'hello world'
});
</script>

<style lang="scss"></style>
