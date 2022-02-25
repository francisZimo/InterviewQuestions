<template>
  <div></div>
</template>

<script lang='ts'>
import { defineComponent, reactive,toRefs} from 'vue'
import {lottie169Adaptation} from '@xes/xueyan-tools'
interface DataProps {}
export default defineComponent( {
    name: '',
      setup() {
          const data: DataProps = reactive({

          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  });
</script>
<style scoped lang='scss'>
</style>