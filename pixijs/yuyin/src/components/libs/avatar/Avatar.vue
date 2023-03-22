<script lang="ts" setup>
import defaultAvatar from './assets/default_avatar.png';
interface IProps {
  size: 'mini' | 'small' | 'middle' | 'large' | string;
  src: string;
  alt?: string;
  round?: boolean;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | '';
}

withDefaults(defineProps<IProps>(), {
  size: 'mini',
  src: '',
  alt: 'avatar',
  round: false,
  fit: ''
});
</script>

<template>
  <div class="ds-avatar" :class="[size, { 'ds-avatar--round': round }]">
    <img :src="src || defaultAvatar" :alt="alt" />
  </div>
</template>

<style scoped lang="scss">
@import './avatar.scss';
</style>
