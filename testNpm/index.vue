<template>
  <div></div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
import { add } from '@smart-mini-cli/testdemo'
console.log(add(1, 2))
interface DataProps { }
export default defineComponent({
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
<style scoped lang='scss'></style>