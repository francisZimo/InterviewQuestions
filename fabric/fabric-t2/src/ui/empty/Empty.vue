<template>
  <div class="empty-box">
    <div :style="`${getSizeStyle(imageSize)}`" class="empty-box__image">
      <slot v-if="$slots.image" name="image"></slot>
      <img v-else :src="imageURL" />
    </div>
    <div class="empty-box__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ description }}</p>
    </div>
    <div v-if="$slots.bottom" class="empty-box__bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, toRaw } from 'vue';
import { getSizeStyle } from '../_utils/format';
import error from './assets/net_error.png';

export interface EmptyProps {
  imageSize?: [string | number, string | number];
  image?: string;
  description?: string;
}
const PRESET_IMAGES = ['error', 'search', 'default'];

const props = withDefaults(defineProps<EmptyProps>(), {
  image: 'error'
});

const { image } = toRaw(props);
const imageURL = computed(() => {
  if (PRESET_IMAGES.includes(image)) {
    return error;
  }
  return error;
});
</script>

<style scoped lang="scss">
.empty-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &__image {
    width: 250px;
    img {
      width: 100%;
      height: 1000%;
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
  }
}

@media screen and (min-width: 768px) {
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
  }
}
</style>
