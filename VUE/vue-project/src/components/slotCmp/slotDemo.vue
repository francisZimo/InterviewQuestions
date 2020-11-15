<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <div style="border:1px solid blue">
                <slot v-bind:usertest="user">
                    {{ user.title }}
                </slot>
            </div>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>

    </div>
</template>

<script>
  export default {
    name: 'slotDemo',
    data(){
      return{
        user:{
          title:'我是插槽标题new',
          con:'我是插槽内容new'
        }
      }
    }
  }
</script>

<style scoped>

</style>