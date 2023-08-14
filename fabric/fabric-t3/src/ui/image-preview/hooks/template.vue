<template>
  <teleport to="body">
    <overlay :show="showDlg" class="image-preview" @click="bodyClickHandler">
      <template #overlay>
        <div ref="picSwiper" class="image-preview-list swiper">
          <ul class="swiper-wrapper">
            <li v-for="(url, index) in list" :key="index" class="swiper-slide">
              <div class="swiper-zoom-container image-preview-box">
                <img :src="(url as any)" />
              </div>
            </li>
          </ul>
          <div class="swiper-pagination"></div>
        </div>

        <img class="close" src="../assets/close-icon.png" @click="close" />
      </template>
    </overlay>
  </teleport>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';
import overlay from '@/components/ui/overlay/Overlay.vue';
import Swiper, { Zoom, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { closeImagePreview } from './index';

Swiper.use([Zoom, Pagination]);

const showDlg = ref(false);
const picSwiper = ref(null);
const isShow = ref(false);

interface IProps {
  list: string[];
  index: number;
}

const props = withDefaults(defineProps<IProps>(), {});

const bodyClickHandler = (e: any) => {
  const path = e.path || e.composedPath();
  if (
    !path.some((el) => {
      return el === picSwiper.value;
    })
  ) {
    if (showDlg.value === true) {
      showDlg.value = false;
      closeImagePreview();
    }
  }
};

let swiper = null;

watch(
  () => isShow.value,
  (val) => {
    showDlg.value = val;
    if (val === true) {
      setTimeout(() => {
        swiper = new Swiper(picSwiper.value, {
          direction: 'horizontal',
          zoom: true,
          initialSlide: props.index,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });
      }, 1000);
    } else if (val === false) {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  },
  {
    immediate: true
  }
);

onMounted(() => {
  isShow.value = true;
});

function close() {
  closeImagePreview();
}
</script>

<style lang="scss" scoped>
.image-preview {
  background: #000;
}
.image-preview-list {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  overflow: visible;
  --swiper-pagination-color: #fff;

  & > ul {
    & > li {
      .image-preview-box {
        & > img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

.close {
  position: fixed;
  top: 44px;
  left: 20px;
  z-index: 9999;
  width: 18px;
  height: 18px;
  color: #fff;
}
</style>
